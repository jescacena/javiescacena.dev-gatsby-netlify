import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import BackHomeLink from '../back-home-link.component';
import "./jescv-edu-layout.component.scss";

const JesCvEduLayout = ({ children }) => {
  return (
    <div className="container-jescv-edu">
      <BackHomeLink></BackHomeLink>
      <main>{children}</main>
    </div>
  );
};

export default JesCvEduLayout;
