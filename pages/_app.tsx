import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSEO } from '@/lib/seo'
import { firebase } from '@/lib/firebase/firebaseClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  )
}
