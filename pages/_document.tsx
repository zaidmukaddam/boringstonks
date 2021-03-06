import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '~/styles'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman-latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-R6WZ15DJB6" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R6WZ15DJB6');
            `
          }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
