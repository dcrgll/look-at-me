import Layout from "@/components/layout"
import Content from "@/components/content"
import Title from "@/components/title"
import Link from "next/link"

export default function Calendar() {
  return (
    <Layout background="bg-gray-50 dark:bg-gray-800 px-2">
      <Content>
        <Title>Calendar</Title>
        <div className="flex justify-between">
          <Link href="/hey-claudia-you-should-go-on-a-date-with-me">
            <span className="hover:text-underline hover:text-red-400 cursor-pointer">
              back
            </span>
          </Link>
          <Link href="/date" className="hover:text-underline">
            <span className="hover:text-underline hover:text-teal-400 cursor-pointer">
              ready to book a date?
            </span>
          </Link>
        </div>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&src=ZGFuQGNhcmdpbGwuZGV2&src=Y18xOGprOGYwbTZnaWNyNHUxZmFzOWw2MjNqMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19zYjRoZmk0NGptM3Y2a2VqdXNscTA0bDUzOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y184a2NqOTllM2pxamMwdjg4Ym9jM3RobmV2Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19vbzZldHNtbnR2aGp2dXRuanQyMTEyaDM3Z0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23F6BF26&color=%23D50000&color=%238E24AA&color=%23E67C73"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </Content>
    </Layout>
  )
}
