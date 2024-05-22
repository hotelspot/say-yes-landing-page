import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M22.646 2.667H9.332c-3.661 0-6.666 3.005-6.666 6.687v13.313c0 3.66 3.005 6.666 6.666 6.666h13.312c3.683 0 6.688-3.005 6.688-6.688V9.355c0-3.683-3.005-6.688-6.687-6.688M19.575 16h-2.518v8.254h-3.174V16H12.19v-3.386h1.482v-1.44c0-1.354.677-3.492 3.534-3.492h2.604v2.815h-1.842c-.296 0-.698.19-.698.847v1.27h2.603z"
    />
  </svg>
);
export default SvgFacebook;
