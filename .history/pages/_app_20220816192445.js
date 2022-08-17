import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>

    )
}

export default MyApp;
