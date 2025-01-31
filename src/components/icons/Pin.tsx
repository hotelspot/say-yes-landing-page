import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? '#00662B'}
      fillRule="evenodd"
      d="M14.5 12.833c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75m0-5.834a4.09 4.09 0 0 0-4.083 4.084 4.09 4.09 0 0 0 4.083 4.083 4.09 4.09 0 0 0 4.083-4.083A4.09 4.09 0 0 0 14.5 6.999m0 15.921c-1.954-1.848-7-7.036-7-11.344 0-3.81 3.14-6.91 7-6.91s7 3.1 7 6.91c0 4.308-5.046 9.496-7 11.344m0-20.587c-5.146 0-9.333 4.145-9.333 9.243 0 6.387 8.224 13.508 8.574 13.808a1.165 1.165 0 0 0 1.518 0c.35-.3 8.574-7.42 8.574-13.808 0-5.098-4.187-9.243-9.333-9.243"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
