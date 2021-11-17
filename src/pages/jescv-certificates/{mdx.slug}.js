import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import JesCvEduLayout from "../../components/layouts/jescv-edu-layout.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const JesCVCertificatePost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  const academyImage = getImage(data.mdx.frontmatter.academy_image);

  return (
    <JesCvEduLayout pageTitle={data.mdx.frontmatter.title}>
      <h2 className="mb-30">{data.mdx.frontmatter.title}</h2>

      <GatsbyImage
        image={heroImage}
        className="mb-30 box-shadow-01"
        alt={data.mdx.frontmatter.hero_image_alt}
      />

      <div className="edu-info-section">
        <a
          href={data.mdx.frontmatter.url_course}
          target="_blank"
          rel="noreferrer"
          className="learning-entity mb-30"
        >
          {data.mdx.frontmatter.academy}
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            size="1x"
            className="back-link__icon ml-8"
          />
        </a>

        <div className="mb-30">
          <FontAwesomeIcon
            icon={faClock}
            size="1x"
            className="back-link__icon mr-8"
          />
          {data.mdx.frontmatter.date}
        </div>
      </div>

      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {/* <a
        href={data.mdx.frontmatter.url_certificate}
        target="_blank"
        rel="noreferrer"
      >
        Certificate
      </a> */}
    </JesCvEduLayout>
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
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
            )
          }
        }
        academy_image_alt
        academy_image {
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default JesCVCertificatePost;
