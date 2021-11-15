import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import "./cardhome-desktop.component.scss";

const CardHomeDesktop = ({ tags, title, excerpt, date, slug }) => {
  return (
    <Link to={slug} className="card-home-desktop pa-36 mb-12">
      <div className="font-pill-small uppercase tag-0">{tags[0]}</div>
      <h1 className="mt-12 title">{title}</h1>
      {excerpt && <h6 className="excerpt mt-12 font-paragraph-medium">{excerpt}</h6>}
      <div className="footer mt-40">
        {/* <div>
          <FontAwesomeIcon
            icon={faTags}
            className="card-home-desktoop__tags-icon mr-8"
          />
          <p className="tag-list">{tags.join(", ")}</p>
        </div> */}
        <p className="date">{date}</p>
      </div>
    </Link>
  );
};

export default CardHomeDesktop;
