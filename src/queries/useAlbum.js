import { useStaticQuery, graphql } from "gatsby";
//import map from "lodash/map";

const useAlbum = (album) => {
  let albumKey = `all${album.charAt(0).toUpperCase() + album.slice(1)}Json`;

  const data = useStaticQuery(
    graphql`
      query {
        allRubinsteinaJson {
          edges {
            node {
              _0
              _1
            }
          }
        }
        allEleventhfloorJson {
          edges {
            node {
              _0
              _1
            }
          }
        }
      }
    `
  )
  if (data[albumKey]) {
    console.log(data[albumKey]);
  }
  
  //return map(data.allAlbumsJson.edges, "node");
}

export default useAlbum;