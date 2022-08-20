import type { SVGProps } from 'react'

const Mail: React.FC<SVGProps<SVGSVGElement>> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className="cursor-pointer"
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    onClick={() => window.open(`mailto:${process.env.mail}`, '_blank')}
  >
    <path
      fill="currentColor"
      d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM20 8l-7.475 4.675q-.125.075-.263.112q-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h16Zm-8 3l8-5H4ZM4 8v.25v-1.475v.025V6v.8v-.013V8.25V8v10Z"
    />
  </svg>
)

export default Mail
