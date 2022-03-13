import splitbee from "@splitbee/web"
import { useEffect } from "react"

export default function useAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    splitbee.init({
      disableCookie: true,
      scriptUrl: "/bee.js",
      apiUrl: "/_hive"
    })
  }, [])
}
