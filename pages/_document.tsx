import { Head, Html, Main, NextScript } from 'next/document'

import type { NextPage } from 'next'

const Document: NextPage = () => (
  <Html lang="zh-CN" id="html">
    <Head />
    <body className="dark:bg-black bg-gray-50">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
