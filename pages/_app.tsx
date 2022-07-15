import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="sm:w-10/12 md:w-9/12 lg:w-7/12 container">
    <Component {...pageProps} />
  </div>
)

export default MyApp
