import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import JesCvXpLayout from '../../components/layouts/jescv-xp-layout.component';

const JesideaInspirationalPost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <JesCvXpLayout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </JesCvXpLayout>
  );
};

export const query = graphql`
query($id: String) {
  mdx(id: { eq: $id }) {
    body
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      url_original
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

export default JesideaInspirationalPost;
