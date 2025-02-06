'use client'
import { FixedSidebar } from "@/components/ui/FixedSidebar";
import { Navbar } from "@/components/ui/navbar";
import { TabBar } from "@/components/ui/TabBar";

export default function MainLayout ({
    children,
  }: {
    children: React.ReactNode;
  }){

    return(

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
    )

}