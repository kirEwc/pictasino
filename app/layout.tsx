import "@/styles/globals.css";
import { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { TabBar } from "@/components/ui/TabBar";
import { FixedSidebar } from "@/components/ui/FixedSidebar";

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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-row flex-1">
            <FixedSidebar />
            <div className="flex-1">
              <main className="w-full">
                {children}
              </main>
              <footer className="w-full h-96 bg-gray-900">
                <h1>Hello Footer</h1>
              </footer>
            </div>
          </div>
          <TabBar />
        </div>
      </body>
    </html>
  );
}
