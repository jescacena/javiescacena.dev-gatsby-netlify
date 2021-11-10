import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const JesCVCertificatePost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  const academyImage = getImage(data.mdx.frontmatter.academy_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
      />

      <a href={data.mdx.frontmatter.url_course} target="_blank" rel="noreferrer">
        <GatsbyImage
          image={academyImage}
          alt={data.mdx.frontmatter.academy_image_alt}
        />
      </a>

      <p>Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <a href={data.mdx.frontmatter.url_certificate} target="_blank" rel="noreferrer">
        Certificate
      </a>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        academy
        url_certificate
        url_course
        tags
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        academy_image_alt
        academy_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default JesCVCertificatePost;
