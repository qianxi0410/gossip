import Github from './icons/github'

import Image from 'next/image'

import type { User } from 'gossip'

const Header: React.FC<{ user: User }> = ({ user }) => (
  <div>
    <div className="mt-5 flex flex-col self-center space-y-3 sm:flex-row sm:justify-between sm:space-x-3">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="relative sm:w-16 sm:h-16 self-center">
          <Image
            src={user.avatar_url}
            alt="logo"
            className="rounded-full self-center"
            layout="fill"
          />
        </div>
        <div className="text-center sm:float-right sm:text-start sm:ml-3 sm:self-center">
          <span className="text-xl font-medium">{user.nick_name}</span>
          <br />
          <span className="italic">{user.bio}</span>
        </div>
      </div>
      <div className="self-center text-sm sm:text-lg">
        <Github width="2em" height="2em" />
      </div>
    </div>

    <hr className="mt-3" />
  </div>
)

export default Header
