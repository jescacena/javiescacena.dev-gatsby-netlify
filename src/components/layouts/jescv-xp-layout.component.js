import React from "react";
import BackHomeLink from "../back-home-link.component";
import "./jescv-xp-layout.component.scss";

const JesCvXpLayout = ({ children }) => {
  return (
    <div className="container-jescv-xp">
      <BackHomeLink></BackHomeLink>
      <main>{children}</main>
    </div>
  );
};

export default JesCvXpLayout;
