import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvide
    <Component {...pageProps} />
    )
}

export default MyApp
