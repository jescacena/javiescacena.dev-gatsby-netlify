module.exports = {
  siteMetadata: {
    siteUrl: "http://jesidea.com",
    title: "jesidea.com-gatsby-netlify",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jesidea-projects`,
        path: `${__dirname}/jesidea-projects`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jescv-experiences`,
        path: `${__dirname}/jescv-experiences`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `jescv-certificates`,
        path: `${__dirname}/jescv-certificates`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `inspirational`,
        path: `${__dirname}/inspirational`,
      }
    },
  ],
};
