import Link from "next/link";
import Sidebar from "./MovilSidebar";

export const TabBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full grid grid-cols-4 grid-rows-1 gap-3 justify-center items-center bg-gray-950 rounded-t-2xl p-2 text-white font-serif text-lg">
      <Sidebar />
      <Link className="flex flex-col justify-center items-center" href="/">
        <CupIcon className="w-6 h-6" />
        <h1>Concurso</h1>
      </Link>
      <Link className="flex flex-col justify-center items-center" href="/">
        <CasinoIcon className="w-6 h-6" />
        <h1>Casino</h1>
      </Link>
      <Link className="flex flex-col justify-center items-center" href="/">
        <Ballicon className="w-6 h-6" />
        <h1>Deportes</h1>
      </Link>
    </div>
  );
};

// Iconos del tab bar

import React from "react";
import type { SVGProps } from "react";

export function CasinoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.5 10A2.5 2.5 0 0 0 13 8.5c0-.564-.194-1.079-.509-1.497L12.5 7l-5-6l-5 6l.009.003A2.48 2.48 0 0 0 2 8.5A2.5 2.5 0 0 0 6.5 10l.5-.666V11.5C7 13 4.5 13 4.5 13a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1S8 13 8 11.5V9.334z"
      ></path>
    </svg>
  );
}

export function CupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M12 16v3"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"
        ></path>
        <path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
        <path
          strokeLinecap="round"
          d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"
        ></path>
      </g>
    </svg>
  );
}
export function Ballicon(props: SVGProps<SVGSVGElement>) {
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
        <path d="M17.736 20.192c4.524-3.168 5.623-9.404 2.455-13.928C17.024 1.74 10.788.641 6.264 3.81C1.74 6.976.641 13.212 3.808 17.736s9.404 5.623 13.928 2.456m0 0L6.264 3.809"></path>
        <path d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415"></path>
        <path d="M13.06 2.056c.413 5.24 3.392 9.494 8.646 12.35M2.293 9.595c4.783 2.18 7.761 6.434 8.647 12.349"></path>
      </g>
    </svg>
  );
}
