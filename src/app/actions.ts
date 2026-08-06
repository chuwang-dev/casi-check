'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '../lib/db';
import {
  clearSessionCookie,
  createSessionToken,
  generateRandomPassword,
  generateResetToken,
  hashPassword,
  setSessionCookie,
  verifyPassword,
} from '../lib/auth';

export async function registerAlumni(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const firstName = String(formData.get('firstName') ?? '').trim();
  const lastName = String(formData.get('lastName') ?? '').trim();
  const graduationYear = Number(formData.get('graduationYear'));
  const degree = String(formData.get('degree') ?? '').trim();
  const major = String(formData.get('major') ?? '').trim();

  if (!email || !password || !firstName || !lastName || !graduationYear) {
    return { error: 'Missing required registration fields.' };
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: 'An account already exists with that email address.' };
  }

  await db.user.create({
    data: {
      email,
      password,
      status: 'PENDING',
      profile: {
        create: {
          firstName,
          lastName,
          graduationYear,
          degree,
          major,
        },
      },
    },
  });

  revalidatePath('/admin/verifications');
  return { success: true };
}

export async function updateVerificationStatus(userId: string, status: 'VERIFIED' | 'REJECTED') {
  await db.user.update({
    where: { id: userId },
    data: { status },
  });

  revalidatePath('/admin/verifications');
  return { success: true, status };
}

/* ------------------------------ Admin Auth ----------------------------- */

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');

  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  const admin = await db.admin.findUnique({ where: { email } });
  if (!admin || !verifyPassword(password, admin.passwordHash)) {
    return { error: 'Invalid email or password.' };
  }

  const token = createSessionToken(admin.id);
  await setSessionCookie(token);

  redirect('/admin/verifications');
}

export async function logoutAdmin() {
  await clearSessionCookie();
  redirect('/admin/login');
}

export async function forgotPasswordAdmin(formData: FormData) {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!email) {
    return { error: 'Email is required.' };
  }

  const admin = await db.admin.findUnique({ where: { email } });
  if (!admin) {
    return { error: 'No admin account found with that email address.' };
  }

  const newPassword = generateRandomPassword();
  const passwordHash = hashPassword(newPassword);
  const resetToken = generateResetToken();
  const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await db.admin.update({
    where: { id: admin.id },
    data: { passwordHash, resetToken, resetTokenExpiry },
  });

  // NOTE: In production, email this generated password to the admin.
  // For now, we return it so the requesting admin can see it on screen.
  return {
    success: true,
    newPassword,
    message: `A new password has been generated for ${admin.email}. Store it securely.`,
  };
}
