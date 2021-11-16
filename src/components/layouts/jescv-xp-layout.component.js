import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from "react";
import "./jescv-xp-layout.component.scss";

const JesCvXpLayout = ({ children }) => {
  return (
    <div className="container-jescv-xp">
      <Link to="/" className="back-link">
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="1x"
          className="back-link__icon mr-8"
        />
        <h6>javiescacena.dev</h6>
      </Link>
      <main>{children}</main>
    </div>
  );
};

export default JesCvXpLayout;
