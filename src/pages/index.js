import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div className="home-page">
      <span className="home-page__bg" />
      <div className="home-page__content">
        <Nav />
        {/*<Link to="/album/"></Link>*/}
      </div>
    </div>
  </Layout>
)

export default IndexPage
