import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const JesCvCertificatesPage = ({ data }) => {
  return (
    <Layout pageTitle="JesCV Certificates">
      {data.allFile.nodes.map((node) => (
        <article key={node.childMdx.id}>
          <h2>
            <Link to={`/jescv-certificates/${node.childMdx.slug}`}>
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
    allFile(filter: { sourceInstanceName: { eq: "jescv-certificates" } }) {
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

export default JesCvCertificatesPage;
