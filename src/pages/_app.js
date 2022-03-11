import PropTypes from 'prop-types'
import '@/styles/tailwind.css'
import '@/styles/extra.css'
import { useAnalytics } from '@/utils/analytics'

function App ({ Component, pageProps }) {
  useAnalytics()
  return <Component {...pageProps} />
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
