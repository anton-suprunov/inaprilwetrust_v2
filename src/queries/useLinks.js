import { useStaticQuery, graphql } from "gatsby";

const useLinks = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allLinksJson {
          edges {
            node {
              title
              type
              url
            }
          }
        }
      }
    `
  )
  return data.allLinksJson.edges;
}

export default useLinks;