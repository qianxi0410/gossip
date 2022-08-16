import type { SVGProps } from 'react'

const RSS: React.FC<SVGProps<SVGSVGElement>> = (properties) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (process.env.rss !== 'true') return <></>

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      className="cursor-pointer"
      onClick={() => window.open('/feed.xml', '_blank')}
      {...properties}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.5 3.25a.75.75 0 0 1 .75-.75C14.053 2.5 22 10.447 22 20.25a.75.75 0 0 1-1.5 0C20.5 11.275 13.225 4 4.25 4a.75.75 0 0 1-.75-.75zM3.5 19a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm.75-9.5a.75.75 0 0 0 0 1.5a9.25 9.25 0 0 1 9.25 9.25a.75.75 0 0 0 1.5 0C15 14.313 10.187 9.5 4.25 9.5z"
      />
    </svg>
  )
}

export default RSS
