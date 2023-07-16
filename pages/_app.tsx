import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSEO } from '@/lib/seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  )
}
