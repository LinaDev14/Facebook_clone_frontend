import '../styles/globals.css'
import { SessionProvider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session=>
      <Component {...pageProps} />
    <SessionProvider />

    )
}

export default MyApp
