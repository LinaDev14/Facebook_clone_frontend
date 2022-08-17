import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"

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
