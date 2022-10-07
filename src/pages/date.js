import Layout from "@/components/layout"
import Content from "@/components/content"
import Title from "@/components/title"

export default function Date() {
  return (
    <Layout background="bg-gray-50 dark:bg-gray-800 px-2">
      <Content>
        <Title>Date Booking</Title>
        <div>
          To book a date please send a calendar invite to
          <br />
          <a href="mailto:dan@cargill.dev" className="hover:text-teal-400">
            dan@cargill.dev
          </a>
        </div>
      </Content>
    </Layout>
  )
}
