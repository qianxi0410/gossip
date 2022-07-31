import type { SVGProps } from 'react'

const Triangle: React.FC<SVGProps<SVGSVGElement>> = properties => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1.8em"
    height="1.8em"
    viewBox="0 0 24 24"
    {...properties}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"
    />
  </svg>
)

export default Triangle
