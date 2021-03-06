import * as React from "react";
import JaviEscacenaHomeLayout from "../components/layouts/javiescacena-home-layout";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import SocialComponent from "../components/social.component";
import { graphql, Link } from "gatsby";
import CardsCarouselHome from "../components/cards-carousel-home.component";
import CardHome from "../components/cardhome.component";
import CardHomeDesktop from "../components/cardhome-desktop.component";
import { Helmet } from "react-helmet";

const HomePage = ({ data }) => {
  const [contentActive, setContentActive] = React.useState("jobs");
  return (
    <JaviEscacenaHomeLayout>
      <div className="section-home-1">
        <h1 className="heading">Hi, I'm Javi Escacena</h1>

        <p className="presentation font-paragraph-medium mt-24 full-screen-mobile">
          I’m a Programmer currently working as{" "}
          <strong>Frontend Developer</strong> for{" "}
          <a
            href="https://paradigmadigital.com"
            target="_blank"
            rel="noreferrer"
          >
            Paradigma Digital
          </a>
          . I like exploring cutting edge frontend stuff and cross-platform
          mobile development. In development teams I am a promoter of good{" "}
          <strong>clean code</strong> practices and efficient{" "}
          <strong>unit tests</strong>
        </p>

        <ul className="content-navigator mt-40">
          <li
            data-content="jobs"
            className={contentActive === "jobs" ? "active" : ""}
            onClick={() => setContentActive("jobs")}
          >
            01 <span className="line-separator"></span> JOBS JOURNEY
          </li>
          <li
            data-content="education"
            className={contentActive === "education" ? "active" : ""}
            onClick={() => setContentActive("education")}
          >
            02 <span className="line-separator"></span> EDUCATION JOURNEY
          </li>
          <li
            data-content="articles"
            className={contentActive === "articles" ? "active" : ""}
            onClick={() => setContentActive("articles")}
          >
            03{" "}
            <span
              className="line-separator"
              onClick={() => setContentActive("articles")}
            ></span>{" "}
            ARTICLES
          </li>
        </ul>

        <SocialComponent></SocialComponent>
      </div>
      {/* MOBILE CONTENTS: start */}
      <div className="section-home-2">
        <h5 className="mt-40 mb-12 jobs-heading">Jobs Journey</h5>
        <CardsCarouselHome prefix="job" >
          {data.jobxps.nodes.map((node, index) => (
            <CardHome
              key={`chjob-${index}`}
              tag="frontend"
              title={node.childMdx.frontmatter.title}
              slug={`/jescv-experiences/${node.childMdx.slug}`}
            ></CardHome>
          ))}
        </CardsCarouselHome>

        <h5 className="mt-40 mb-12 edu-heading">Education Journey</h5>
        <CardsCarouselHome prefix="edu">
          {data.edus.nodes.map((node, index) => (
            <CardHome
              key={`chedu-${index}`}
              tag="frontend"
              title={node.childMdx.frontmatter.title}
              slug={`/jescv-certificates/${node.childMdx.slug}`}
            ></CardHome>
          ))}
        </CardsCarouselHome>
        <h5 className="mt-40 mb-12 article-heading">Articles</h5>
        <CardsCarouselHome prefix="article">
          {data.articles.nodes.map((node, index) => (
            <CardHome
              key={`charticle-${index}`}
              tag="frontend"
              title={node.childMdx.frontmatter.title}
              slug={`/blog/${node.childMdx.slug}`}
            ></CardHome>
          ))}
        </CardsCarouselHome>
      </div>
      {/* MOBILE CONTENTS: end */}

      {/* DESKTOP CONTENTS: start */}
      <section className="section-home-2-desktop">
        {contentActive === "jobs" &&
          data.jobxps.nodes.map((node, index) => (
            <CardHomeDesktop
              key={`chd-job-${index}`}
              tags={node.childMdx.frontmatter.tags}
              date={node.childMdx.frontmatter.date}
              title={node.childMdx.frontmatter.title}
              excerpt={node.childMdx.frontmatter.excerpt}
              slug={`/jescv-experiences/${node.childMdx.slug}`}
            ></CardHomeDesktop>
          ))}
        {contentActive === "education" &&
          data.edus.nodes.map((node, index) => (
            <CardHomeDesktop
              key={`chd-edu-${index}`}
              tags={node.childMdx.frontmatter.tags}
              date={node.childMdx.frontmatter.date}
              title={node.childMdx.frontmatter.title}
              slug={`/jescv-certificates/${node.childMdx.slug}`}
            ></CardHomeDesktop>
          ))}
        {contentActive === "articles" &&
          data.articles.nodes.map((node, index) => (
            <CardHomeDesktop
              key={`chd-article-${index}`}
              tags={node.childMdx.frontmatter.tags}
              date={node.childMdx.frontmatter.date}
              title={node.childMdx.frontmatter.title}
              excerpt={node.childMdx.frontmatter.excerpt}
              slug={`/blog/${node.childMdx.slug}`}
            ></CardHomeDesktop>
          ))}
      </section>
      {/* DESKTOP CONTENTS: end */}
      <div className="footer-gradient"></div>
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
      sort: { fields: childrenMdx___frontmatter___index, order: DESC }
    ) {
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            tags
            excerpt
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
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            academy
            url_certificate
            url_course
            tags
            excerpt
          }
          id
          slug
        }
      }
    }
    articles: allFile(
      filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "mdx" } }
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMdx {
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            description
            url_original
            tags
            excerpt
          }
          id
          slug
        }
      }
    }
  }
`;

export default HomePage;
