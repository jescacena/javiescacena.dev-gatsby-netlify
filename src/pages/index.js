import * as React from "react";
import JaviEscacenaHomeLayout from "../components/javiescacena-home-layout";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import SocialComponent from "../components/social.component";

const HomePage = () => {
  return (
    <JaviEscacenaHomeLayout>
      <h1>Hi, I'm Javi Escacena</h1>

      <p className="font-paragraph-medium mt-24 full-screen-mobile">
        I’m a Programmer currently working as{" "}
        <strong>Frontend Developer</strong> for{" "}
        <a href="https://paradigmadigital.com" target="_blank" rel="noreferrer">
          Paradigma Digital
        </a>
        . Like exploring cutting edge frontend stuff and hybrid mobile
        development.
      </p>

      <SocialComponent></SocialComponent>
      
    </JaviEscacenaHomeLayout>
  );
};

export default HomePage;
