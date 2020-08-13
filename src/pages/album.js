import React from "react";
//import { Link } from "gatsby";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import SEO from "../components/seo";
import useAlbums from "../queries/useAlbums";
import AlbumContent from "../components/album/album";


const Album = ({ location }) => {
  const albums = useAlbums();
  const albumKey = location.pathname.replace('/album/', '');
  const album = albums.find(a => a.key === albumKey);
  console.log(album);

  return (
    <Layout pageTitle="Album" showHeader={true}>
      <SEO title="Page two" />
      
      <Router>
        {/*<Redirect from="/album/" to="/" />*/}
        <AlbumContent path="/album/:albumKey" album={album} />
      </Router>
      
    </Layout>
  )
}

export default Album;