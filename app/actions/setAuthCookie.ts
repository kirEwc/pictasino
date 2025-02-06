'use server'

import { cookies } from 'next/headers';

export async function setAuthCookie(token: string, role: string) {
  console.log('token: ', token);


  const maxAge = 60 * 60 * 24 

  await cookies().set('auth-token', token, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: maxAge,  // Expiración en 24 horas

  });

  await cookies().set('user-role', role, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: maxAge,  // Expiración en 24 horas
  });
}
