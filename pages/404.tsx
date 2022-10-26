import Layout from '../components/layout'

import Link from 'next/link'

import type { NextPageWithLayout } from 'gossip'

const NotFound: NextPageWithLayout = () => (
  <div className="flex flex-col xl:flex-row xl:mt-56 mt-28 xl:space-x-5 space-y-2 font-en">
    <span className="text-6xl lg:text-8xl text-gray-900 dark:text-gray-300">Oops!</span>
    <br />
    <div className="xl:self-center text-lg xl:text-xl dark:text-gray-400">
      Seem to have lost your way.
      <br />
      Click <Link href="/" className="text-blue-600">here</Link> to go back to the home page.
    </div>
  </div>
)

NotFound.getLayout = page => <Layout middle={page} />

export default NotFound
