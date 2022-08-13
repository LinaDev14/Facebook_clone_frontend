import '../styles/globals.css'
import { SessionProvide} from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvide?r
    <Component {...pageProps} />
    )
}

export default MyApp
