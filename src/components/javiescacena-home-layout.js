import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./javiescacena-home-layout.scss";
import { useMediaQuery } from "react-responsive";

const JaviEscacenaHomeLayout = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return isMobile !== null ? (
    <div className="container">
      <p>{isMobile ? "mobile" : "desktop"}</p>
      <main className={isMobile ? "mobile" : "desktop"}>{children}</main>
    </div>
  ) : null;
};

export default JaviEscacenaHomeLayout;
