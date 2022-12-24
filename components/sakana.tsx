import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import SakanaWidget from 'sakana-widget'
import 'sakana-widget/lib/index.css'

const Sakana = () => {
  const { theme } = useTheme()

  useEffect(() => {
    new SakanaWidget({ character: 'takina', controls: false, stroke: { color: theme === 'dark' ? '#333333' : '#e6e6e6' } }).mount('#sakana-widget')
  }, [theme])

  return (
    <div id="sakana-widget" className="cursor-pointer bottom-0 left-16 fixed hidden xl:block" />
  )
}

export default Sakana
