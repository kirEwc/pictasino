import "@/styles/globals.css";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: {
    default: "Pictasino",
    template: `%s - Pictasino`,
  },
  description: `Make a beautiful site made in airdev and deldev`,
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className="dark text-foreground bg-gray-800 font-serif antialiased">
      <main className="w-full">
                {children}
              </main>
      </body>
    </html>
  );
}