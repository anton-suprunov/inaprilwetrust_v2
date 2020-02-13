import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav/nav"

import "./index.scss";

const IndexPage = () => {  
  return <Layout pageTitle="Home" showHeader={false}>
    <SEO title="home" />
    <div className="home-page">
      <Nav />
    </div>
  </Layout>
};

export default IndexPage
