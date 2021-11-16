import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import JesCvXpLayout from '../../components/layouts/jescv-xp-layout.component';

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <JesCvXpLayout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <a href={data.mdx.frontmatter.url_original} target="_blank" rel="noreferrer">
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      </a>
      <p>
        <a href={data.mdx.frontmatter.url_original}  target="_blank" rel="noreferrer">
          {data.mdx.frontmatter.url_original}
        </a>
      </p>
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

export default BlogPost;
