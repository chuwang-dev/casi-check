'use server';

import { revalidatePath } from 'next/cache';
import { db } from '../lib/db';

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
