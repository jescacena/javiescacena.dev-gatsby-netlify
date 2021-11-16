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

      <h3>Excerpt:</h3>
      <p>{data.mdx.frontmatter.excerpt}</p>

      <hr />
      <h3>Tags:</h3>
      <p>{data.mdx.frontmatter.tags.join(", ")}</p>

      <hr />
      <h3>Company:</h3>
      <a href={data.mdx.frontmatter.company_website}>
        {data.mdx.frontmatter.company}
      </a>

      <hr />
      <h3>Duration:</h3>
      {data.mdx.frontmatter.duration}

      <hr />
      <p>
        Dates: {data.mdx.frontmatter.start_date} -{" "}
        {data.mdx.frontmatter.end_date}
      </p>
      <hr />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <hr />
      <h3>Project website:</h3>
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
        excerpt
        company
        company_website
        project_website
        start_date(formatString: "MMMM DD, YYYY")
        end_date(formatString: "MMMM DD, YYYY")
        duration
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
