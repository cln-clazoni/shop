import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.json();
  const { user, password } = body;

  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;
  const jwtSecret = process.env.JWT_SECRET;

  if (!adminUser || !adminPass || !jwtSecret) {
    return NextResponse.json({ message: 'Variables de entorno no configuradas' }, { status: 500 });
  }

  if (user === adminUser && password === adminPass) {
    const token = jwt.sign({ user }, jwtSecret, { expiresIn: '1h' });

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hora
      path: '/',
    });
    return NextResponse.json({ message: 'Inicio de sesión exitoso' });
  } else {
    return NextResponse.json({ message: 'Credenciales incorrectas' }, { status: 401 });
  }
}
