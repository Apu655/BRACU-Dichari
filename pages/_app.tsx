import '../styles/globals.css'
import "../styles/style.css"
import "../styles/contact.css"
import {motion,AnimatePresence} from 'framer-motion'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <AnimatePresence exitBeforeEnter>
  <Component {...pageProps} key={router.route} />
  </AnimatePresence>
  )
}

export default MyApp