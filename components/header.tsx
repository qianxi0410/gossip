import Theme from './theme'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  const isHome = router.pathname === '/'
  const backIcon = <div className="flex self-center flex-row justify-between"><Link href="/" className="md:text-2xl text-xl cursor-pointer dark:hover:text-white dark:text-gray-400 text-gray-500 hover:text-black transition-colors duration-200 font-en">cd ..</Link></div>

  return (
    <header>
      <div className="my-10 flex self-center flex-row justify-between">
        {isHome ? <div /> : backIcon}
        <div className="self-center text-sm sm:text-lg">
          <Theme />
        </div>
      </div>
    </header>
  )
}

export default Header
