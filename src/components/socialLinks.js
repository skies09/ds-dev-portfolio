import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
	return (
		<div className="flex flex-row justify-center items-center pt-6 mb-8">
			<a
				id="facebook"
				href="https://www.facebook.com/profile.php?id=100002920786337"
				className="mx-3 inline-block text-lg text-colorOne hover:text-colorFive"
			>
				<FontAwesomeIcon icon={faFacebook} size="2x" />
			</a>
			<a
				id="instagram"
				href="https://www.instagram.com/skies009/"
				className="mx-3 inline-block text-lg text-colorOne hover:text-colorFive"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
			<a
				id="github"
				href="https://github.com/skies09"
				className="mx-3 inline-block text-lg text-colorOne hover:text-colorFive"
			>
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>
			<a
				id="linkedIn"
				href="https://www.linkedin.com/in/donna-smith-091285/"
				className="mx-3 inline-block text-lg text-colorOne hover:text-colorFive"
			>
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
			</a>
		</div>
	);
};
export default SocialLinks;
