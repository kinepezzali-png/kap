import { NextResponse } from 'next/server';

export const config = { matcher: '/:path*' };

export function middleware(request) {
  const auth = request.cookies.get('kap-auth')?.value;
  if (auth === 'kap2026') return NextResponse.next();

  const url = request.nextUrl.clone();
  if (url.pathname === '/login') return NextResponse.next();

  return NextResponse.redirect(new URL('/login', request.url));
}