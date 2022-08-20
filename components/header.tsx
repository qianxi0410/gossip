import Rose from './icons/rose'
import Theme from './theme'

const Header: React.FC = () => (
  <header>
    <div className="my-10 flex self-center flex-row justify-between">
      <div className="flex self-center flex-row justify-between">
        <Rose width="4em" height="4em" />
      </div>
      <div className="self-center text-sm sm:text-lg">
        <Theme />
      </div>
    </div>
  </header>
)

export default Header
