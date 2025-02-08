// app/page.tsx
import { redirect } from "next/navigation";

export default function Page() {
  // Al ejecutar redirect, se redirige de inmediato a la ruta indicada.
  redirect("/home");

  // Este return nunca se ejecutará, pero es necesario para evitar errores de tipado.
  return null;
}
