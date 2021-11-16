import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./javiescacena-home-layout.scss";

const JaviEscacenaHomeLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="container">
      <main>{children}</main>
    </div>
  );
};

export default JaviEscacenaHomeLayout;
