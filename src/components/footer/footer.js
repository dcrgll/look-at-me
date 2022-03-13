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
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
}
