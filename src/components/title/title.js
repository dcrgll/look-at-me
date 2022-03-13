import PropTypes from "prop-types"

export default function Title({ children }) {
  return (
    <h1 className="text-gray-500 text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold">
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    ),
    PropTypes.element,
    PropTypes.string
  ]).isRequired
}
