import PropTypes from "prop-types"
import "@/styles/tailwind.css"
import "@/styles/extra.css"
import useAnalytics from "@/config/analytics"
import { Toaster } from "react-hot-toast"

function App({ Component, pageProps }) {
  useAnalytics()
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
