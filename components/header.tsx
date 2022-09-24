import Theme from './theme'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  const isHome = router.pathname === '/'
  const backIcon = <div className="flex self-center flex-row justify-between"><Link href="/"><a className="md:text-2xl text-xl cursor-pointer hover:underline underline-offset-4 italic font-en">cd ..</a></Link></div>

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
