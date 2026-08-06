import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Grab session token (e.g., from an HTTP-only auth cookie)
  const sessionToken = request.cookies.get('session_token')?.value;
  const adminSessionToken = request.cookies.get('admin_session_token')?.value;
  const { pathname } = request.nextUrl;

  // --- Admin portal protection ---
  const isAdminRoute = pathname.startsWith('/admin');
  const isAdminLoginRoute = pathname === '/admin/login';

  if (isAdminRoute && !isAdminLoginRoute) {
    if (!adminSessionToken) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Already-authenticated admins visiting login page go to verifications
  if (isAdminLoginRoute && adminSessionToken) {
    return NextResponse.redirect(new URL('/admin/verifications', request.url));
  }

  // --- Alumni portal/directory protection (existing) ---
  const isProtectedPortalRoute = pathname.startsWith('/portal') || pathname.startsWith('/directory');
  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/register');

  // 1. Unauthenticated users trying to access protected directory/portal
  if (isProtectedPortalRoute && !sessionToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Already authenticated users trying to view login/register pages
  if (isAuthRoute && sessionToken) {
    return NextResponse.redirect(new URL('/portal/dashboard', request.url));
  }

  // 3. Public static routes (/, /news, /stories) bypass cleanly
  return NextResponse.next();
}

export const config = {
  /*
   * Match all request paths except:
   * - api routes that don't need middleware
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico, images, public assets
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
