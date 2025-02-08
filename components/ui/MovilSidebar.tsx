"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const MovilSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <button
        className="bg-transparent lg:hidden flex flex-col justify-center items-center"
        onClick={() => handleOpen()}
      >
        <MenuIcon className="w-6 h-6 " />
        <h2 className=""> Menu</h2>
      </button>
      <Drawer
        defaultOpen={true}
        backdrop={"blur"}
        isOpen={isOpen}
        size="xs"
        placement="left"
        onClose={onClose}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Drawer Title
              </DrawerHeader>
              <DrawerBody>
                <p>Drawer Content</p>
              </DrawerBody>
              <DrawerFooter>
                <p>Drawer Footer</p>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MovilSidebar;

// Menu icon component

import type { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M21.25 2.75v18.5"></path>
        <rect
          width={6}
          height={10}
          x={7.75}
          y={19.75}
          rx={2}
          transform="rotate(-90 7.75 19.75)"
        ></rect>
        <rect
          width={6}
          height={15}
          x={2.75}
          y={10.25}
          rx={2}
          transform="rotate(-90 2.75 10.25)"
        ></rect>
      </g>
    </svg>
  );
}
