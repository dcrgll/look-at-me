import PropTypes from "prop-types"

export default function Wave({ children }) {
  return <span className="wave">{children}</span>
}

Wave.propTypes = {
  children: PropTypes.string.isRequired
}
