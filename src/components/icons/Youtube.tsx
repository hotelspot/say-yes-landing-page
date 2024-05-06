import * as React from "react";
import type { SVGProps } from "react";
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="#00662B" d="M14.286 13.376v4.867l4.487-2.412z" />
    <path
      fill="#00662B"
      d="M22.646 2.667H9.332c-3.661 0-6.666 3.005-6.666 6.688v13.312c0 3.661 3.005 6.666 6.666 6.666h13.312c3.683 0 6.688-3.005 6.688-6.687V9.354c0-3.683-3.005-6.688-6.687-6.688m1.608 13.99c0 1.396-.127 2.814-.127 2.814s-.148 1.185-.635 1.714c-.635.699-1.333.699-1.65.74-2.329.17-5.82.191-5.82.191s-4.34-.063-5.673-.19c-.36-.063-1.206-.042-1.841-.74-.508-.53-.635-1.715-.635-1.715s-.127-1.418-.127-2.815v-1.312c0-1.397.127-2.815.127-2.815s.148-1.185.635-1.714c.635-.699 1.333-.72 1.65-.762 2.35-.17 5.842-.19 5.842-.19s3.492.02 5.82.19c.318.042 1.037.063 1.672.74.508.53.635 1.736.635 1.736s.127 1.418.127 2.815z"
    />
  </svg>
);
export default SvgYoutube;