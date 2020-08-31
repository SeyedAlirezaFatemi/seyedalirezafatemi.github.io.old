import React from "react"

import { HonorsSection, Layout, SEO } from "../components"
import { Sections } from "../utils"

const HonorsPage = () => (
  <Layout page={Sections.honors.name}>
    <SEO title={Sections.honors.title} />
    <HonorsSection />
  </Layout>
)

export default HonorsPage
