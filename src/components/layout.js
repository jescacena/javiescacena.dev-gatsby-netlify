import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../styles/main.scss";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
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
    <div className={container}>
      {/* <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title> */}
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header>{" "} */}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jesidea-projects" className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jescv" className={navLinkText}>
              JESCV
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jescv-experiences" className={navLinkText}>
              JESCV-Experiences
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jescv-certificates" className={navLinkText}>
              JESCV-Certificates
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/inspirational" className={navLinkText}>
              Inspirationals
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/tags" className={navLinkText}>
              Tags
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
