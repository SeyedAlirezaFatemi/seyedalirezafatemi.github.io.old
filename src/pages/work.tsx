import React from "react"

import { Layout, SEO, WorkSection } from "../components"
import { Sections } from "../utils"

const WorkPage = () => (
  <Layout page={Sections.work.name}>
    <SEO title={Sections.work.title} />
    <WorkSection />
  </Layout>
)

export default WorkPage
