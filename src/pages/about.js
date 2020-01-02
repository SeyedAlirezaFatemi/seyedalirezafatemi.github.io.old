import React from "react"
import { AboutSection, Layout, SEO } from "../components"
import { Sections } from "../utils"

const AboutPage = () => (
  <Layout page={Sections.about.name}>
    <SEO title={Sections.about.title} />
    <AboutSection />
  </Layout>
)

export default AboutPage
