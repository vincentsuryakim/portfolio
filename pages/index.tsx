import { NextPage } from "next"

import Layout from "@/components/Layout"
import Hero from "@/containers/Hero"
import GetToKnowMe from "@/containers/GetToKnowMe"
import Experiences from "@/containers/Experiences"

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <GetToKnowMe />
      <Experiences />
    </Layout>
  )
}

export default Home
