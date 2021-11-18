import React from "react";
import BackHomeLink from "../back-home-link.component";
import "./jescv-articles-layout.component.scss";

const JesCvArticleLayout = ({ children }) => {
  return (
    <div className="container-jescv-article">
      <BackHomeLink></BackHomeLink>
      <main>{children}</main>
    </div>
  );
};

export default JesCvArticleLayout;
