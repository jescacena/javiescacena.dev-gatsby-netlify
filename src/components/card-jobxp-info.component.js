import {
  faTags,
  faBuilding,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./card-jobxp-info.component.scss";

const CardJobXpInfo = ({
  tags,
  startDate,
  company,
  companyWebsite,
  duration,
  duties,
}) => {
  return (
    <div className="card-jobxp-info box-shadow-blue">
      <div className="item company mb-12">
        <FontAwesomeIcon
          icon={faBuilding}
          className="mr-8"
        />
        <a href={companyWebsite}>{company}</a>
      </div>

      {duties && <div className="item duty mb-12">
        <FontAwesomeIcon
          icon={faUser}
          className="mr-8"
        />
        {duties[0]}
      </div>}

      <div className="item tags mb-12">
        <FontAwesomeIcon
          icon={faTags}
          className="mr-8"
        />
        {tags}
      </div>

      <div className="item duration">
        <FontAwesomeIcon
          icon={faClock}
          className="mr-8"
        />
        {startDate} - {duration}
      </div>
    </div>
  );
};

export default CardJobXpInfo;
