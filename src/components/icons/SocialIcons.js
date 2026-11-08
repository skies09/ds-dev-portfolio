import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGithub,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = ({ icon, className = "", ...props }) => (
	<FontAwesomeIcon
		icon={icon}
		className={className}
		aria-hidden="true"
		{...props}
	/>
);

export const IconGithub = (props) => (
	<SocialIcon icon={faGithub} {...props} />
);
export const IconLinkedin = (props) => (
	<SocialIcon icon={faLinkedinIn} {...props} />
);
export const IconInstagram = (props) => (
	<SocialIcon icon={faInstagram} {...props} />
);
export const IconFacebook = (props) => (
	<SocialIcon icon={faFacebookF} {...props} />
);
