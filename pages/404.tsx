import Link from 'next/link'

import type { NextPage } from 'next'

const NotFound: NextPage = () => (

  <div className="flex flex-col sm:flex-row sm:mt-56 mt-28 sm:space-x-5 space-y-2">
    <span className="text-6xl sm:text-8xl text-gray-900">Oops!</span>
    <br />
    <div className="self-center text-lg">
      Seem to have lost your way.
      <br />
      Click <Link href="/"><a className="text-blue-600">here</a></Link> to go back to the home page.
    </div>
  </div>

)

export default NotFound
