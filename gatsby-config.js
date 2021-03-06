module.exports = {
  siteMetadata: {
    title: `inaprilwetrust`,
    description: ``,
    author: `suprunov.anton@gmail.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src"],
      }
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shared`,
        path: `${__dirname}/src/shared`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { 
        prefixes: [`/album/*`] 
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
