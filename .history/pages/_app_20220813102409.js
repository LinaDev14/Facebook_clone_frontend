import '../styles/globals.css'
import { SessionProvider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
    <Component {...pageProps} />
    )
}

export default MyApp
