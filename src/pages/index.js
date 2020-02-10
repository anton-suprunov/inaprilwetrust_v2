import React from "react"
//import { Link } from "gatsby"
//import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

import "./index.scss";

const IndexPage = (props) => {  
  return <Layout pageTitle="Home" showHeader={false}>
    <SEO title="home" />
    <div className="home-page">
      <Nav />
    </div>
  </Layout>
};

export default IndexPage
