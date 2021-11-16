import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layouts/layout";

const InspirationalsPage = ({ data }) => {
  return (
    <Layout pageTitle="JesIdea Inspirational Blog">
      {data.allFile.nodes.map((node) => (
        <article key={node.childMdx.id}>
          <h2>
            <Link to={`/inspirational/${node.childMdx.slug}`}>
              {node.childMdx.frontmatter.title}
            </Link>
          </h2>{" "}
          <p>Posted: {node.childMdx.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "inspirational" }, extension: {eq: "mdx"} }) {
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  }
`;

export default InspirationalsPage;
