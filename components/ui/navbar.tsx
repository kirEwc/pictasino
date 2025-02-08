"use client";
import { Navbar as HeroUINavbar, NavbarBrand } from "@heroui/navbar";
import { Button } from "@heroui/react";
import Image from "next/image";
import AnimatedButton from "./BotonAnimado/AnimatedButton";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="full" position="sticky" className="bg-gray-950">
      <NavbarBrand className="flex flex-row pr-3 gap-2">
        <Image src={"/images/logo.png"} alt="logo" width={70} height={50} />
        <Image
          src={"/images/pictasino.png"}
          alt="logo"
          width={100}
          height={60}
          className="hidden md:block"
        />
      </NavbarBrand>

      <div>
        <AnimatedButton />
      </div>
    </HeroUINavbar>
  );
};
