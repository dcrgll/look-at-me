import PropTypes from 'prop-types'

export default function Layout ({ background, children }) {
  return (
    <main className={`${background} min-h-screen`}>
      <div className='container mx-auto px-4'>
        {children}
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired
}
