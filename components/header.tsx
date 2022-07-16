import Image from 'next/image'

const Header = () => (
  <div>
    <div className="mt-5 flex flex-row items-end space-x-3">
      <Image
        src="https://avatars.githubusercontent.com/u/55543743?v=4"
        alt="logo"
        className="rounded-full"
        width={80}
        height={80}
      />

      <div className="space-y-1">
        <p className="text-xl">キリサメ qianxi</p>
        <p>my vegetable exploded (我 菜 爆 了)</p>
        <p />
      </div>
    </div>

    <hr className="mt-3" />
  </div>
)

export default Header
