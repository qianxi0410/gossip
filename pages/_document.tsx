import { isGithubChannel, isSpecialRepo } from '../lib'

import { Head, Html, Main, NextScript } from 'next/document'

import type { NextPage } from 'next'

const Document: NextPage = () => {
  let href = '/favicon.ico'
  if (isGithubChannel() && !isSpecialRepo()) href = './favicon.ico'

  return (
    <Html lang="zh-CN" id="html">
      <Head>
        <link rel="shortcut icon" href={href} />
      </Head>
      <body className="dark:bg-black bg-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
