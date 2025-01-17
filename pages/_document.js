import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Hamza Javed | Portfolio </title>
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
      </Head>
      <body
        data-theme='light'
        data-menu='fixed'
        data-footer-effect='on'
        data-footer-corners='on'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
