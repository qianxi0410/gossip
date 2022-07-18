import Github from './icons/github'

import Image from 'next/image'

import type { User } from 'gossip'

const Header: React.FC<{ user: User }> = ({ user }) => (
  <div>
    <div className="mt-5 flex flex-row justify-between space-x-3">
      <div className="flex flex-row justify-between">

        <div className="relative w-12 h-12 self-center">
          <Image
            src={user.avatar_url}
            alt="logo"
            className="rounded-full self-center"
            layout="fill"
          />
        </div>
        <div className="float-right ml-3 self-center">
          <span className="text-xl font-medium">{user.nick_name}</span>
          <br />
          <span className="italic">{user.bio}</span>
        </div>
      </div>
      <div className="self-center">
        <Github width="2em" height="2em" />
      </div>
    </div>

    <hr className="mt-3" />
  </div>
)

export default Header
