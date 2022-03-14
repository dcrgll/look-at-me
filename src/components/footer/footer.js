import PropTypes from "prop-types"
import Ping from "@/components/ping"

export default function Footer({ data }) {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="flex w-full justify-end p-8 relative">
        <Ping data={data} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      isPlaying: PropTypes.bool.isRequired,
      item: PropTypes.shape({
        album: PropTypes.shape({
          images: PropTypes.arrayOf(
            PropTypes.shape({
              height: PropTypes.number.isRequired,
              url: PropTypes.string.isRequired,
              width: PropTypes.number.isRequired
            })
          ).isRequired
        }).isRequired,
        artists: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired
          })
        ).isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    }),
    PropTypes.shape({
      isPlaying: PropTypes.bool.isRequired
    })
  ])
}
