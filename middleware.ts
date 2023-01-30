import { AUTH_ROUTES, GUEST_ROUTES } from 'config';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookies = request.cookies.getAll();
  const isAuth = cookies.some((cookie) => cookie.name === 'isAuth');
  const { pathname } = request.nextUrl;

  if (pathname === GUEST_ROUTES && isAuth) {
    response = NextResponse.redirect(new URL('/movie-list', request.url));
  }

  for (const auth of AUTH_ROUTES) {
    if (pathname.includes(auth) && !isAuth) {
      response = NextResponse.redirect(new URL('/', request.url));
    }
  }

  return response;
}
