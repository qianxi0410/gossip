import { useRouter } from 'next/router'

import type { MouseEventHandler, SVGProps } from 'react'

const Home: React.FC<SVGProps<SVGAElement>> = ({ width, height }) => {
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
      viewBox="0 0 24 24"
      onClick={handleClick}
      className="cursor-pointer"
    >
      <path
        fill="currentColor"
        d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454l-6 5.454V19h5v-6h2v6z"
      />
    </svg>
  )
}

export default Home
