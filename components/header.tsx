import Image from 'next/image'

import type { User } from 'gossip'

const Header: React.FC<{ user: User }> = ({ user }) => (
  <div>
    <div className="mt-5 flex flex-row items-end space-x-3">
      <Image
        src={user.avatar_url}
        alt="logo"
        className="rounded-full"
        width={80}
        height={80}
      />

      <div className="space-y-1">
        <p className="text-xl">{user.nick_name}</p>
        <p>{user.bio}</p>
        <p />
      </div>
    </div>

    <hr className="mt-3" />
  </div>
)

export default Header
