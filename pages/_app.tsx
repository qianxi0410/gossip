import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import type { NextPageWithLayout } from 'gossip'
import type { AppProps } from 'next/app'

type AppPropertiesWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Gossip = ({ Component, pageProps }: AppPropertiesWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Head>
        <title>{process.env.OWNER!}&apos;s website</title>
      </Head>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}

export default Gossip
