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
      <body className="dark text-foreground bg-gray-800 min-h-screen font-serif antialiased">
        {/* Flex layout for full height */}
        <div className="relative flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          <div className="flex flex-row flex-grow">
            {/* Sidebar */}
            <FixedSidebar />

            {/* Main content area */}
            <div className="flex flex-col flex-grow">
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>

              {/* Footer */}
              <footer className="w-full h-96 bg-gray-900">
                <h1>Hello Footer</h1>
              </footer>
            </div>
          </div>

          {/* TabBar */}
          <TabBar />
        </div>
      </body>
    </html>
  );
}
