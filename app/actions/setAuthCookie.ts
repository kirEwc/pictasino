"use server";

export async function setAuthCookie(token: string, role: string) {
  const maxAge = 60 * 60 * 24; // 24 horas

  return new Response(null, {
    headers: {
      "Set-Cookie":
        `auth-token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}, ` +
        `user-role=${role}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`,
    },
  });
}
