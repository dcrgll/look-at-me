import Layout from "@/components/layout"
import Content from "@/components/content"
import Title from "@/components/title"
import LineBreak from "@/components/line_break"
import Wave from "@/components/wave"
import Link from "next/link"

export default function HHeyYou() {
  return (
    <Layout background="bg-gray-50 dark:bg-gray-800">
      <Content>
        <Title>
          Hey <span className="text-blue-400">Claudia!</span>
          <div className="px-2 w-full text-2xl mt-4">
            You should go on a date with me, that&apos;d be pretty{" "}
            <span className="text-red-400">cool</span> of you.
            <LineBreak />
            <Wave>📦</Wave>
            <Wave>📦</Wave>
            <Wave>📦</Wave>
            <Wave>📦</Wave>
            <Wave>📦</Wave>
            <LineBreak />
            <div className="mt-8">
              Please find my availability{" "}
              <Link href="/cal">
                <span className="text-teal-400 cursor-pointer">here</span>
              </Link>
              .
            </div>
          </div>
        </Title>
      </Content>
    </Layout>
  )
}
