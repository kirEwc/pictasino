import React from "react";
import type { SVGProps } from "react";
import "./boton.css";

export function SolarLogin2Broken(props: SVGProps<SVGSVGElement>) {
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
        strokeWidth={1.5}
      >
        <path
          strokeLinejoin="round"
          d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"
        ></path>
        <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121c-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121c.641.642 1.568.815 3.121.862"></path>
      </g>
    </svg>
  );
}

const AnimatedButton = () => {
  return (
    <button className="button">
      <div className="dots_border"></div>
      {/* <SolarLogin2Broken className="sparkle" /> */}
      <span className="text_button">Registrarse</span>
    </button>
  );
};

export default AnimatedButton;
