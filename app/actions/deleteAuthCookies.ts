'use server';

import { cookies } from 'next/headers';

export async function deleteAuthCookies() {
  cookies().set('auth-token', '', {
    expires: new Date(0), // Expira inmediatamente
  });

  cookies().set('user-role', '', {
    expires: new Date(0), // Expira inmediatamente
  });
}
