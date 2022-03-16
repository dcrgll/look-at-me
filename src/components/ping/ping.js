import PropTypes from "prop-types"
import Status from "@/components/status"
import toast from "react-hot-toast"

export default function Ping({ data }) {
  function openToast() {
    toast.custom(
      (t) => {
        return <Status t={t} dismiss={() => toast.dismiss()} data={data} />
      },
      { id: "status", position: "bottom-right", duration: Infinity }
    )
  }

  return (
    <span
      className="h-8 w-8 relative cursor-pointer"
      onClick={() => openToast()}
    >
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${
          data?.spotify ? "bg-green-400" : "bg-red-400"
        }`}
      ></span>
      <span
        className={`relative inline-flex rounded-full h-8 w-8 opacity-80 ${
          data?.spotify ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
    </span>
  )
}

Ping.propTypes = {
  data: PropTypes.object
}
