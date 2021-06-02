import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'styles/globals.css'
import * as gtag from 'utils/gtag'
import { StateProvider } from 'utils/store.js';

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default App
