module.exports = {
  siteMetadata: {
    title: `Aravind Jaimon`,
    description: `Aravind Jaimon is an Experienced FrontEnd Developer based in India, Who can create stunning websites`,
    author: `@aravind_jaimon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
  ],
}
