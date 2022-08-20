import { useRouter } from 'next/router'

import type { MouseEventHandler, SVGProps } from 'react'

const Rose: React.FC<SVGProps<SVGSVGElement>> = ({ width, height }) => {
  const router = useRouter()

  // don't use window.push because it will cause a re-render
  const handleClick: MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault()
    router.push('/')
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      onClick={handleClick}
      className="cursor-pointer"
      viewBox="0 0 26 26"
    >
      <path
        fill="currentColor"
        d="M12.875 0a1 1 0 0 0-.844.719l-1.937 6.375l-4-2.094c-.3-.2-.7-.112-1 .188c-.3.3-.294.606-.094.906l2.094 4L.719 12.03a1 1 0 0 0 0 1.938l6.343 1.906L5 19.906c-.2.3-.112.7.188 1c.2.2.425.282.625.282c.1 0 .275.006.375-.094l3.968-2.063l1.875 6.25a1 1 0 0 0 1.938 0l1.906-6.343L19.813 21c.1.1.274.094.375.094c.2 0 .425-.082.625-.282c.3-.3.287-.7.187-1l-2.094-3.906l6.375-1.937a1 1 0 0 0 0-1.938L19 10.125l2-4.031c.2-.3.113-.7-.188-1c-.3-.3-.7-.288-1-.188L15.845 6.97L13.969.719A1 1 0 0 0 12.875 0zM13 4.469V13l2.094-2.094a1 1 0 0 0 .406.25L21.531 13H13l2.094 2.094a1 1 0 0 0-.25.406L13 21.531V13l-2.094 2.094a1 1 0 0 0-.406-.25L4.469 13H13l-2.094-2.094a1 1 0 0 0 .25-.406L13 4.469z"
      />
    </svg>
  )
}

export default Rose
