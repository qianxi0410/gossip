import Link from 'next/link'

import type { NextPage } from 'next'

const NotFound: NextPage = () => (

  <div className="flex flex-col xl:flex-row xl:mt-56 mt-28 xl:space-x-5 space-y-2">
    <span className="text-6xl lg:text-8xl text-gray-900">Oops!</span>
    <br />
    <div className="xl:self-center text-lg xl:text-xl">
      Seem to have lost your way.
      <br />
      Click <Link href="/"><a className="text-blue-600">here</a></Link> to go back to the home page.
    </div>
  </div>

)

export default NotFound
