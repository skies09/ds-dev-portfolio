import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
	

	return (
		<div className="flex flex-row justify-center items-center pt-6">
        <a id='facebook' href="https://www.facebook.com/profile.php?id=100002920786337"
        className="mx-3 inline-block text-lg text-colorFour hover:text-colorOne">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
        <a id='instagram' href="https://www.instagram.com/skies009/"
          className="mx-3 inline-block text-lg text-colorFour hover:text-colorOne">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a id='github' href="https://github.com/skies09"
        className="mx-3 inline-block text-lg text-colorFour hover:text-colorOne">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
		</div>
	);
}
