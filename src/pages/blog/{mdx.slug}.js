import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import JesCvArticleLayout from "../../components/layouts/jescv-articles-layout.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <JesCvArticleLayout pageTitle={data.mdx.frontmatter.title}>
      <h2 className="mb-24">{data.mdx.frontmatter.title}</h2>
      <a className="container-jescv-article__image mb-24"
        href={data.mdx.frontmatter.url_original}
        target="_blank"
        rel="noreferrer"
      >
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      </a>

      <p className="mb-24">{data.mdx.frontmatter.description}</p>

      <div className="container-jescv-article__external-link">
        <a
          href={data.mdx.frontmatter.url_original}
          target="_blank"
          rel="noreferrer"
        >
          Link
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            size="1x"
            className="back-link__icon ml-8"
          />
        </a>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </JesCvArticleLayout>
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
        url_original
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default BlogPost;
