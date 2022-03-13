import PropTypes from "prop-types"

export default function Layout({ background, children }) {
  return (
    <main className={`${background} min-h-screen`}>
      <div className="min-h-screen flex items-center justify-center py-12">
        {children}
      </div>
    </main>
  )
}

Layout.propTypes = {
  children:
    PropTypes.arrayOf(PropTypes.element).isRequired ||
    PropTypes.element.isRequired,
  background: PropTypes.string.isRequired
}
