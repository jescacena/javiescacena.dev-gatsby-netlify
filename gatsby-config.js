module.exports = {
  siteMetadata: {
    siteUrl: "https://javiescacena.dev",
    title: "javiescacena.dev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-mdx-source-name`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jesidea-projects`,
        path: `${__dirname}/jesidea-projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jescv-experiences`,
        path: `${__dirname}/jescv-experiences`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jescv-certificates`,
        path: `${__dirname}/jescv-certificates`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `inspirational`,
        path: `${__dirname}/inspirational`,
      },
    },
  ],
};
