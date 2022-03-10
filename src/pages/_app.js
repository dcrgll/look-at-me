import PropTypes from 'prop-types'
import '@/styles/tailwind.css'
import '@/styles/extra.css'

function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
