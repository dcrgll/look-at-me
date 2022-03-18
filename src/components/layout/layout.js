import PropTypes from "prop-types"
import useSWR from "swr"
import fetcher from "@/utils/fetcher"
import Footer from "../footer/footer"
import SEO from "@/components/seo"

export default function Layout({ background, children }) {
  const { data } = useSWR(
    `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_ID}`,
    fetcher,
    { refreshInterval: 10000 }
  )

  return (
    <>
      <SEO />
      <main className={`${background} min-h-screen`}>
        <div className="min-h-screen flex items-center justify-center py-12">
          {children}
        </div>
      </main>
      <Footer data={data} />
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
