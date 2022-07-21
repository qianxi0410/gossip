import '../styles/globals.css'

import Head from 'next/head'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{process.env.OWNER!}&apos;s website</title>
    </Head>
    <div className="w-full sm:w-10/12 md:w-9/12 lg:w-7/12 container">
      <Component {...pageProps} />
    </div>
  </>
)

export default MyApp
