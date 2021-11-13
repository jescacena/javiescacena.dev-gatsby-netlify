import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import "./cardhome.component.scss";

// TODO make click on the card to go to slug
const CardHome = ({ tag, title, slug }) => {
  return (
    <Link to={slug} className="card-home pa-12">
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

export default CardHome;
