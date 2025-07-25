import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    console.error('JWT_SECRET no está definido en las variables de entorno');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(jwtSecret);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/admin/:path*',
};
