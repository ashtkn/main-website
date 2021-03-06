const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteTitle: `Asahi Takenouchi`,
    siteTitleAlt: `Asahi Takenouchi`,
    siteHeadline: `Asahi Takenouchi`,
    siteUrl: `https://www.takenouchi.work`,
    siteDescription: `Asahi Takenouchi's Portfolio Website`,
    siteLanguage: `ja`,
    siteImage: `/banner.jpg`,
    author: `@ashtkn`,
    basePath: `/`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asahi Takenouchi`,
        short_name: `Asahi`,
        description: `Asahi Takenouchi's Portfolio Website`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.takenouchi.work`,
      },
    },
  ],
}
