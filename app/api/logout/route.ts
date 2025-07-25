import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    cookies().set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: -1, // Expira la cookie inmediatamente
      path: '/',
    });

    return NextResponse.json({ message: 'Cierre de sesión exitoso' });
  } catch (error) {
    return NextResponse.json({ message: 'Error al cerrar sesión' }, { status: 500 });
  }
}
