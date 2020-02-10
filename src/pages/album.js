import React from "react";
//import { Link } from "gatsby";
import { Router } from "@reach/router";

import Layout from "../components/layout"
import SEO from "../components/seo"

const AlbumContent = (props) => {
  console.log(props);
  return <div>test</div>;
}

const Album = () => (
  <Layout pageTitle="Album" showHeader={true}>
    <SEO title="Page two" />
    
    <Router>
      {/*<Redirect from="/album/" to="/" />*/}
      <AlbumContent path="/album/:albumName" />
    </Router>
    
  </Layout>
)

export default Album;