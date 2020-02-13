import React from "react";
//import { Link } from "gatsby";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import SEO from "../components/seo";

import AlbumContent from "../components/album/album";

const Album = () => (
  <Layout pageTitle="Album" showHeader={true}>
    <SEO title="Page two" />
    
    <Router>
      {/*<Redirect from="/album/" to="/" />*/}
      <AlbumContent path="/album/:albumKey" />
    </Router>
    
  </Layout>
)

export default Album;