import { useStaticQuery, graphql } from "gatsby";
import map from "lodash/map";

const useAlbum = (album) => {
  let albumKey = `all${album.charAt(0).toUpperCase() + album.slice(1)}Json`;

  const data = useStaticQuery(
    graphql`
      query {
        allRubinsteina1Json {
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

  if (!data[albumKey]) {
    return [];
  }

  const res = map(data[albumKey].edges, "node");
  return res;
}

export default useAlbum;