import { StaticImage } from 'gatsby-plugin-image';
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./social.component.scss";

const SocialComponent = () => {
  return (
    <ul className="social-section mt-24 full-screen-mobile">
      <li>
        <StaticImage
          width={36}
          height={36}
          src="../images/jes-avatar.png"
          alt="Javier Escacena Avatar"
        />
      </li>
      <li className="social-item">
        <FontAwesomeIcon
          icon={faGithub}
          style={{ width: "24px", height: "24px" }}
        />
        <span className="font-pill-medium social-item__label">Github</span>
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className="social-item__link-external"
        />
      </li>
      <li className="social-item">
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ width: "24px", height: "24px" }}
        />
        <span className="font-pill-medium social-item__label">Twitter</span>
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          className="social-item__link-external"
        />
      </li>
    </ul>
  );
};

export default SocialComponent;

