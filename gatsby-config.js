/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
require("dotenv").config({  
  path: `.env`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Alrifqi Site",
    author: "Muhammad Reza Nurrifqi",
    description: "Alrifqi Website",
    siteUrl: "https://alrifqi.com",
    social: [],
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost`,
        contentTypes: [
          `portfolio`,
          `blog`
        ],
        // singleTypes: [`portfolio`],
        queryLimit: 100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `${process.env.API_URL}/graphql` || `http://localhost/graphql`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`
  ],
}
