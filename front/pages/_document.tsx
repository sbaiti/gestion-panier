import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"
import React from "react"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document {
  
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheet.getStyleElement()
        ]
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mulish&display=auto" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument