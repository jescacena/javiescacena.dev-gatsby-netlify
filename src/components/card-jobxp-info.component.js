import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./card-jobxp-info.component.scss";

const CardJobXpInfo = ({
  tags,
  startDate,
  company,
  companyWebsite,
  duration,
}) => {
  return (
    <div className="card-jobxp-info">
      <a className="company" href={companyWebsite}>
        {company}
      </a>
      <p className="duty">Frontend developer</p>
      <div className="tags">
        <FontAwesomeIcon
          icon={faTags}
          className="card-home-desktoop__tags-icon mr-8"
        />
        {tags}
      </div>

      <p className="duration">
        {startDate} -{duration}
      </p>
    </div>
  );
};

export default CardJobXpInfo;
