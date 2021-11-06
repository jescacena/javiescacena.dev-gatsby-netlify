import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const JesCVCertificatePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const heroImage = getImage(data.mdx.frontmatter.academy_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.academy_image_alt} />
      <GatsbyImage image={heroImage} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>{data.mdx.frontmatter.academy}</p>

      <p>Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <a href={data.mdx.frontmatter.url_certificate} target="_blank">
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
        tags
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        academy_image_alt

      }
    }
  }
`;

export default JesCVCertificatePost;
