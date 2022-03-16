import PropTypes from "prop-types"
import NowPlaying from "./children/now_playing/now_playing"

export default function Status({ t, dismiss, data }) {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="pt-0.5 overflow-x-hidden">
            <NowPlaying data={data} />
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200 dark:border-gray-900">
        <button
          onClick={() => dismiss()}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}

Status.propTypes = {
  t: PropTypes.shape({
    visible: PropTypes.bool.isRequired
  }).isRequired,
  dismiss: PropTypes.func.isRequired,
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
