'use client'
import { Navbar as HeroUINavbar, NavbarBrand } from "@heroui/navbar";
import { Button } from "@heroui/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="full" position="sticky" className="bg-gray-950">
       <NavbarBrand  className="flex flex-row pr-3 gap-2">
        
      <Image src={'/images/logo.png'} alt="logo" width={30} height={30} />
      <Image src={'/images/pictasino.png'} alt="logo" width={100} height={60} />
       </NavbarBrand>

      <div>
      <Button className=" mr-3 font-serif" variant="bordered" color="secondary" onBlur={() => { }} onFocus={() => { }}>
          <h1 className="font-serif sm:block hidden">Iniciar Sección</h1>
          <h1 className="font-serif sm:hidden block">Inic. Ses.</h1>
        </Button>
        <Button className="bg-purple-500 font-serif">
          <h1 className="font-serif">Registrarse</h1>
        </Button>
      </div>
    </HeroUINavbar>
  );
};
