"use server";

export async function deleteAuthCookies() {
  return new Response(null, {
    headers: {
      "Set-Cookie": [
        "auth-token=; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
        "user-role=; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      ].join(", "), // Unir las cookies en un solo string
    },
  });
}
