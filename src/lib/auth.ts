import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
import { db } from './db';
import type { Admin } from '@prisma/client';

const SESSION_COOKIE = 'admin_session_token';
const SESSION_TTL_DAYS = 7;

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret) {
    throw new Error('Missing ADMIN_SESSION_SECRET or NEXTAUTH_SECRET env var.');
  }
  return secret;
}

/* ----------------------------- Password hashing ---------------------------- */

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `scrypt:${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [scheme, salt, hash] = stored.split(':');
  if (scheme !== 'scrypt' || !salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

/* ------------------------------ Session tokens ----------------------------- */

function signToken(payload: string): string {
  return createHmac('sha256', getSecret()).update(payload).digest('hex');
}

export function createSessionToken(adminId: string): string {
  const createdAt = Date.now();
  const payload = `${adminId}.${createdAt}`;
  const signature = signToken(payload);
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string): string | null {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [adminId, createdAt, signature] = parts;
  const payload = `${adminId}.${createdAt}`;
  const expected = signToken(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  const age = Date.now() - Number(createdAt);
  const maxAge = SESSION_TTL_DAYS * 24 * 60 * 60 * 1000;
  if (Number.isNaN(age) || age < 0 || age > maxAge) return null;

  return adminId;
}

/* -------------------------- Cookie / session helpers ----------------------- */

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_DAYS * 24 * 60 * 60,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}

export async function getCurrentAdmin(): Promise<Admin | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const adminId = verifySessionToken(token);
  if (!adminId) return null;

  const admin = await db.admin.findUnique({ where: { id: adminId } });
  return admin;
}

/* --------------------------- Password reset utils -------------------------- */

export function generateResetToken(): string {
  return randomBytes(32).toString('hex');
}

export function generateRandomPassword(): string {
  // 16-char, URL-safe password
  return randomBytes(12).toString('base64url');
}
