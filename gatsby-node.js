const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  // const blogPostTemplate = path.resolve("src/templates/blog.js");
  const tagTemplate = path.resolve("src/components/tags.js");
  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000, filter: {frontmatter: {tags: {ne: ""}}}) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // const posts = result.data.postsRemark.edges
  // // Create post detail pages
  // posts.forEach(({ node }) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: blogPostTemplate,
  //   })
  // })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
    //   console.log('JES tags-->', tags);

  // Make tag pages
  tags.forEach((tag) => {
    // console.log('JES tag-->', tag);
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};