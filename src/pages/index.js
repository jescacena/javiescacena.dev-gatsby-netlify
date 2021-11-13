import * as React from "react";
import JaviEscacenaHomeLayout from "../components/javiescacena-home-layout";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import SocialComponent from "../components/social.component";
import { graphql, Link } from "gatsby";
import CardsCarouselHome from "../components/cards-carousel-home.component";
import CardHome from "../components/cardhome.component";

const HomePage = ({ data }) => {
  return (
    <JaviEscacenaHomeLayout>
      <h1>Hi, I'm Javi Escacena</h1>

      <p className="font-paragraph-medium mt-24 full-screen-mobile">
        I’m a Programmer currently working as{" "}
        <strong>Frontend Developer</strong> for{" "}
        <a href="https://paradigmadigital.com" target="_blank" rel="noreferrer">
          Paradigma Digital
        </a>
        . Like exploring cutting edge frontend stuff and hybrid mobile
        development.
      </p>

      <SocialComponent></SocialComponent>

      <h5 className="mt-40 mb-12">Jobs Journey</h5>
      <CardsCarouselHome>
        {data.jobxps.nodes.map((node) => (
          <CardHome
            tag="frontend"
            title={node.childMdx.frontmatter.title}
            slug={`/jescv-experiences/${node.childMdx.slug}`}
          ></CardHome>
        ))}
      </CardsCarouselHome>

      <h5 className="mt-40 mb-12">Education Journey</h5>
      <CardsCarouselHome>
        {data.edus.nodes.map((node) => (
          <CardHome
            tag="frontend"
            title={node.childMdx.frontmatter.title}
            slug={`/jescv-certificates/${node.childMdx.slug}`}
          ></CardHome>
        ))}
      </CardsCarouselHome>
      <h5 className="mt-40 mb-12">Articles</h5>
      <CardsCarouselHome>
        {data.articles.nodes.map((node) => (
          <CardHome
            tag="frontend"
            title={node.childMdx.frontmatter.title}
            slug={`/blog/${node.childMdx.slug}`}
          ></CardHome>
        ))}
      </CardsCarouselHome>
    </JaviEscacenaHomeLayout>
  );
};

export const query = graphql`
  query {
    jobxps: allFile(
      filter: {
        sourceInstanceName: { eq: "jescv-experiences" }
        extension: { eq: "mdx" }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            start_date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
    edus: allFile(
      filter: {
        sourceInstanceName: { eq: "jescv-certificates" }
        extension: { eq: "mdx" }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            academy
            url_certificate
            url_course
          }
          id
          slug
        }
      }
    }
    articles:   allFile(
                  filter: {sourceInstanceName: {eq: "blog"}, extension: {eq: "mdx"}}
                ) {
                  nodes {
                    childMdx {
                      frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        description
                        url_original
                      }
                      id
                      slug
                    }
                  }
                }
  }
`;

export default HomePage;
