'use client'
import { Navbar as HeroUINavbar } from "@heroui/navbar";
import { Button } from "@heroui/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="full" position="sticky" className="bg-gray-950">
      <div className="flex flex-row ">
      {/* <Sidebar /> */}
      <h1 className="font-serif flex flex-row justify-center items-center pr-3">
        <Image src={'/images/logo.png'} alt="logo" width={30} height={30} />
        Pictasino
      </h1>
      </div>
      <div>
      <Button className=" mr-3 font-serif" variant="bordered" color="secondary">
          Iniciar seccion
        </Button>
        <Button className="bg-purple-500 font-serif">
          Registrarse
        </Button>
      </div>
    </HeroUINavbar>
  );
};
