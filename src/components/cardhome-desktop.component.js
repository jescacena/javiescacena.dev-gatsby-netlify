import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import "./cardhome.component.scss";

const CardHomeDesktop = ({ tag, title, slug }) => {
  return (
    <Link to={slug} className="card-home-desktop pa-12">
      <div className="font-pill-xsmall">{tag}</div>
      <p className="mt-12">{title}</p>
      <FontAwesomeIcon
        icon={faChevronCircleRight}
        size="2x"
        className="card-home__chevron-go"
      />
    </Link>
  );
};

export default CardHomeDesktop;
