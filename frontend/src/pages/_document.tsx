import React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import Document, { DocumentContext } from 'next/document'

interface Props {}
export default class extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body className="column1">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
