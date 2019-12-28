import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

import "./index.scss";

const IndexPage = () => (
  <Layout pageTitle="Home" showHeader={false}>
    <SEO title="home" />
    <div className="home-page">

      <Nav />
      {/*<Link to="/album/"></Link>*/}
    </div>
  </Layout>
)

export default IndexPage
