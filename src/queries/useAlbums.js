import { useStaticQuery, graphql } from "gatsby";
import map from "lodash/map";

const useAlbums = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allAlbumsJson {
          edges {
            node {
              title
              key
              category
            }
          }
        }
      }
    `
  )
  return map(data.allAlbumsJson.edges, "node");
}

export default useAlbums;