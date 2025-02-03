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
      {/* agregando dark , text-foreground y bg-background en el className para que se aplique el tema dark por defecto */}
      <body className="dark text-foreground  bg-gray-800 min-h-screen font-serif antialiased  ">
          <div className=" flex flex-col">
            <Navbar />


            <div className="flex flex-row min-h-screen">
            <FixedSidebar />

            {/* contenedor del Children junto con el  */}
          <div className="flex flex-col flex-grow ">


            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full h-96 bg-gray-900 ">

              <h1>Hello Fotter</h1>
            </footer>
          </div>
            </div>
              <TabBar />
          </div>
      </body>
    </html>
  );
}
