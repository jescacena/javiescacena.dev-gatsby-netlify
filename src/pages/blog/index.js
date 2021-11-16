import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layouts/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Articles / Posts">
      {data.allFile.nodes.map((node) => (
        <article key={node.childMdx.id}>
          <h2>
            <Link to={`/blog/${node.childMdx.slug}`}>{node.childMdx.frontmatter.title}</Link>
          </h2>{" "}
          <p>Posted: {node.childMdx.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "blog"}, extension: {eq: "mdx"}}
  ) {
    nodes {
      childMdx {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          url_original
        }
        id
        slug
      }
    }
  }
}
`;

export default BlogPage;
