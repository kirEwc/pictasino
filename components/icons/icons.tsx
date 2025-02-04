import React from "react";
import type { SVGProps } from "react";

export default function DoubleMenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          {/* Línea superior (más larga) */}
          <rect x="0" y="6" width="22" height="1.5" fill="white" />
          
          {/* Línea inferior (más corta) */}
          <rect x="0" y="16" width="18" height="1.5" fill="white" />
        </svg>
      );
}