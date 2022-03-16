import Layout from "@/components/layout"
import Content from "@/components/content"
import Title from "@/components/title"
import LineBreak from "@/components/line_break"
import Wave from "@/components/wave"
import TextLoop from "react-text-loop"
import ROLES from "@/config/roles"
import Role from "@/components/role"

export default function Home() {
  return (
    <Layout background="bg-gray-50 dark:bg-gray-800">
      <Content>
        <Title>
          Hey <Wave>👋🏼</Wave> I&apos;m Dan, <LineBreak />
          <div className="px-2 w-full">
            a{" "}
            <TextLoop interval={3000} className="text-loop">
              {ROLES.map((r) => (
                <Role text={r.text} color={r.color} key={r.text} />
              ))}
            </TextLoop>
          </div>
        </Title>
      </Content>
    </Layout>
  )
}
