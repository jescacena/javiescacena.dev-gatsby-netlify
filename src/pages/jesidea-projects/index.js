import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const JesideaProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="Jesidea Projects">
      {data.allFile.nodes.map((node) => (
        node.childMdx? <article key={node.childMdx.id}>
          <h2>
            <Link to={`/jesidea-projects/${node.childMdx.slug}`}>
              {node.childMdx.frontmatter.title}
            </Link>
          </h2>{" "}
          <p>{node.childMdx.frontmatter.description}</p>
          <p>Posted: {node.childMdx.frontmatter.date}</p>
        </article>
        : null
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "jesidea-projects"}, extension: {eq: "mdx"}}
    ) {
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            link_website
          }
          id
          slug
        }
      }
    }
  }
`;

export default JesideaProjectsPage;
