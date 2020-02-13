import { useStaticQuery, graphql } from "gatsby";

const useAlbums = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allAlbumsJson {
          edges {
            node {
              title
              key
            }
          }
        }
      }
    `
  )
  return data.allAlbumsJson.edges;
}

export default useAlbums;