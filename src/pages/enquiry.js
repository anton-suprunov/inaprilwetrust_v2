import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Enquiry = () => (
  <Layout pageTitle="Enquiry" showHeader={true}>
    <SEO title="Enquiry" />
    <nav className="nav">
      <a href="mailto:inaprilwetrust@gmail.com" 
        style={{ color: "#666", textDecoration: "none", fontSize: "16px" }}>inaprilwetrust@gmail.com</a>
    </nav>
    
  </Layout>
)

export default Enquiry
