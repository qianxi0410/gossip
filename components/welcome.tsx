import Image from 'next/image'
import Blog from './icons/blog'
import Github from './icons/github'
import Rss from './icons/rss'
import Twitter from './icons/twitter'

interface Properties {
  avatar: string
  company: string
  motto: string
  name: string
  github: string
  twitter: string
  location: string
}

const Welcome: React.FC<Properties> = ({
  avatar, name, motto, github, twitter,
}) => (
  <div>
    <div className="flex flex-col items-center mt-28 space-y-2">
      <div>
        <Image src={avatar} width={120} height={120} alt="avatar" className="rounded-full" />
      </div>
      <span className="text-2xl font-bold">{name}</span>
      <span className="text-gray-800 text-xl">{motto}</span>
      <div className="relative lg:w-5/6 lg:h-56 sm:w-4/5 sm:h-32">
        <Image
          layout="fill"
          src="https://raw.githubusercontent.com/qianxi0410/qianxi0410/output/github-contribution-grid-snake.gif"
        />
      </div>
    </div>

    <div className="flex flex-row mt-8 justify-center space-x-8">
      <Github width="2em" height="2em" href={github} />
      <Twitter width="2em" height="2em" href={twitter} />
      <Rss width="2em" height="2em" />
      <Blog width="2em" height="2em" />
    </div>
  </div>
)

export default Welcome
