import PropTypes from "prop-types"
import "@/styles/tailwind.css"
import "@/styles/extra.css"
import { Toaster } from "react-hot-toast"
import PlausibleProvider from "next-plausible"

function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="cargill.dev">
      <Toaster />
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
