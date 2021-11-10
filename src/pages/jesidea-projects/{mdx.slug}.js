import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const JesideaProjectPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />

      <p>{data.mdx.frontmatter.description}</p>
      <hr />
      <ul>
        {data.mdx.frontmatter.link_playstore ? (
          <li>
            playstore:{" "}
            <a href={data.mdx.frontmatter.link_playstore} target="_blank" rel="noreferrer">
              {data.mdx.frontmatter.link_playstore}
            </a>
          </li>
        ) : null}
        <li>
          website:{" "}
          <a href={data.mdx.frontmatter.link_website} target="_blank" rel="noreferrer">
            {data.mdx.frontmatter.link_website}
          </a>
        </li>
      </ul>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        link_playstore
        link_website
        tags
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default JesideaProjectPost;
