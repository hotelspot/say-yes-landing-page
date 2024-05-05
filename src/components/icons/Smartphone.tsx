import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#00662B"
      fillRule="evenodd"
      d="M11.083 7h5.834a1.166 1.166 0 1 1 0 2.333h-5.834a1.166 1.166 0 1 1 0-2.333m1.167 12.25a1.75 1.75 0 1 1 3.501.001 1.75 1.75 0 0 1-3.501-.001M21 22.167c0 .644-.523 1.166-1.167 1.166H8.167A1.167 1.167 0 0 1 7 22.167V5.833c0-.644.523-1.166 1.167-1.166h11.666c.644 0 1.167.522 1.167 1.166zM19.833 2.333H8.167c-1.93 0-3.5 1.57-3.5 3.5v16.334c0 1.93 1.57 3.5 3.5 3.5h11.666c1.93 0 3.5-1.57 3.5-3.5V5.833c0-1.93-1.57-3.5-3.5-3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartphone;
