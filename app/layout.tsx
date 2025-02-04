import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Pictasino",
    template: `%s - Pictasino`,
  },
  description: `Make a beautiful site made in airdev and deldev`,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className="min-h-screen  font-mono antialiased ">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <h2>Footer</h2>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
