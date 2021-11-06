import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const JesCVExperiencePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />

      <a href={data.mdx.frontmatter.company_website}>
        {data.mdx.frontmatter.company}
      </a>
      <p>
        Dates: {data.mdx.frontmatter.start_date} -{" "}
        {data.mdx.frontmatter.end_date}
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {data.mdx.frontmatter.project_website ? (
        <p>
          <a href={data.mdx.frontmatter.project_website}>
            {data.mdx.frontmatter.project_website}
          </a>
        </p>
      ) : null}
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        company
        company_website
        project_website
        start_date(formatString: "MMMM DD, YYYY")
        end_date(formatString: "MMMM DD, YYYY")
        duties
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

export default JesCVExperiencePost;
