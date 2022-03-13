import PropTypes from "prop-types"

export default function Role({ text, color }) {
  return (
    <>
      <span className={color}>{text}</span>.
    </>
  )
}

Role.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
