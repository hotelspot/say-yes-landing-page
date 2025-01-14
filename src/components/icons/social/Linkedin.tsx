import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M23.296 2.667h-13.28c-3.68 0-6.683 3.005-6.683 6.687v13.313c0 3.66 3.003 6.666 6.683 6.666h13.301c3.68 0 6.683-3.005 6.683-6.688V9.355c-.021-3.683-3.024-6.688-6.704-6.688m-11.08 21.587H8.408V13.248h3.806zM10.29 11.555a1.94 1.94 0 0 1-1.946-1.947c0-1.08.867-1.947 1.946-1.947s1.945.868 1.945 1.947c-.02 1.08-.888 1.947-1.945 1.947m14.634 12.699h-3.193V18.92c0-1.29-.17-2.941-1.925-2.941-1.797 0-2.093 1.396-2.093 2.857v5.418H14.54V13.248h2.961v1.482h.085c.465-.847 1.543-1.503 3.235-1.503 3.49 0 4.103 2.01 4.103 4.995z"
    />
  </svg>
);
export default SvgLinkedin;
