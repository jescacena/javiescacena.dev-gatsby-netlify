import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./javiescacena-home-layout.scss";
import { useMediaQuery } from 'react-responsive';


const JaviEscacenaHomeLayout = ({ children }) => {
   const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })
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
      <main className={isMobile ? 'mobile' : 'desktop'}>
        {children}
      </main>
    </div>
  );
};

export default JaviEscacenaHomeLayout;
