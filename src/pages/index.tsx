import React from "react"

import { HomeSection, Layout, SEO } from "../components"
import { Sections } from "../utils"

const IndexPage = () => (
  <Layout page={Sections.home.name}>
    <SEO title={Sections.home.title} />
    <HomeSection />
  </Layout>
)

export default IndexPage
