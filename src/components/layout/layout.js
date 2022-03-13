import PropTypes from "prop-types"
import useSWR from "swr"
import fetcher from "@/utils/fetcher"
import Footer from "../footer/footer"
import { useEffect, useState } from "react"

export default function Layout({ background, children }) {
  const [spotifyData, setSpotifyData] = useState({ isPlaying: false })
  const { data } = useSWR("/api/spotify/now_playing/", fetcher)

  useEffect(() => {
    if (data?.isPlaying === false) {
      setSpotifyData(null)
    }
    setSpotifyData(data)
  }, [data])

  return (
    <>
      <main className={`${background} min-h-screen`}>
        <div className="min-h-screen flex items-center justify-center py-12">
          {children}
        </div>
      </main>
      <Footer data={spotifyData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  background: PropTypes.string.isRequired
}
