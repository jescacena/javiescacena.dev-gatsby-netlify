import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from "react";

import "./back-home-link.component.scss";

const BackHomeLink = () => {
  return (
    <Link to="/" className="back-link">
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="1x"
        className="back-link__icon mr-8"
      />
      <h6>javiescacena.dev</h6>
    </Link>
  );
};

export default BackHomeLink;
