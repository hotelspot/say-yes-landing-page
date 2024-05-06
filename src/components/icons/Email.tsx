import * as React from 'react';
import type { SVGProps } from 'react';

const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? '#00662B'}
      fillRule="evenodd"
      d="M22.167 21H5.833a1.17 1.17 0 0 1-1.166-1.167V8.458l8.633 6.475a1.16 1.16 0 0 0 1.4 0l8.633-6.475v11.375c0 .644-.523 1.167-1.166 1.167m-.779-14L14 12.542 6.612 7zm.779-2.333H5.833c-1.93 0-3.5 1.57-3.5 3.5v11.666c0 1.93 1.57 3.5 3.5 3.5h16.334c1.93 0 3.5-1.57 3.5-3.5V8.167c0-1.93-1.57-3.5-3.5-3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmail;
