import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import JesCvXpLayout from "../../components/layouts/jescv-xp-layout.component";
import CardJobXpInfo from "../../components/card-jobxp-info.component";

const JesCVExperiencePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <JesCvXpLayout pageTitle={data.mdx.frontmatter.title}>
      {/* Title */}
      <h2 className="mb-30">{data.mdx.frontmatter.title}</h2>

      <GatsbyImage
        image={image}
        className="mb-30"
        alt={data.mdx.frontmatter.hero_image_alt}
      />

      <CardJobXpInfo
        className="mb-30"
        company={data.mdx.frontmatter.company}
        companyWebsite={data.mdx.frontmatter.company_website}
        startDate={data.mdx.frontmatter.start_date}
        duration={data.mdx.frontmatter.duration}
        duties={data.mdx.frontmatter.duties}
        tags={data.mdx.frontmatter.tags.join(", ")}
      ></CardJobXpInfo>

      <h4>{data.mdx.frontmatter.excerpt}</h4>

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
        excerpt
        company
        company_website
        project_website
        start_date(formatString: "MMMM, YYYY")
        end_date(formatString: "MMMM, YYYY")
        duration
        duties
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
      }
    }
  }
`;

export default JesCVExperiencePost;
