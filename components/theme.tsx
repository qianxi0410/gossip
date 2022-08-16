import Moon from './icons/moon'
import Sun from './icons/sun'

import { useTheme } from 'next-themes'

const Theme = () => {
  const { theme, setTheme } = useTheme()

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (process.env.theme !== 'both') return <></>

  return (
    theme === 'light'
      ? <Moon width="2em" height="2em" onClick={() => setTheme('dark')} />
      : <Sun width="2em" height="2em" onClick={() => setTheme('light')} />
  )
}

export default Theme
