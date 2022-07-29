import CopyRight from '../copyright'

import type { ReactNode } from 'react'

const Layout: React.FC<{ middle: ReactNode; left?: ReactNode; right?: ReactNode }>
= ({ middle, left, right }) => (
  <div className="grid grid-cols-12 container auto-cols-min">

    <div className="sm:col-span-1 md:col-span-2 sm:block hidden">{left}</div>

    <div className="sm:col-span-10 md:col-span-8 col-span-full">
      {middle}
      <CopyRight className="text-sm sm:text-md mt-8 mb-12 text-gray-700 dark:text-gray-500" />
    </div>

    <div className="sm:col-span-1 md:col-span-2 sm:block hidden">{right}</div>

  </div>

)

export default Layout
