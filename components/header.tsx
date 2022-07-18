import Image from 'next/image'

interface Properties {
  avatar: string
  name: string
  motto: string
}

const Header: React.FC<Properties> = ({ avatar, name, motto }) => (
  <div>
    <div className="mt-5 flex flex-row items-end space-x-3">
      <Image
        src={avatar}
        alt="logo"
        className="rounded-full"
        width={80}
        height={80}
      />

      <div className="space-y-1">
        <p className="text-xl">{name}</p>
        <p>{motto}</p>
        <p />
      </div>
    </div>

    <hr className="mt-3" />
  </div>
)

export default Header
