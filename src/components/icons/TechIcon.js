import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowUpRightFromSquare,
	faBriefcase,
	faCheckCircle,
	faChevronDown,
	faClipboardList,
	faCode,
	faCodeBranch,
	faCommentDots,
	faCogs,
	faEnvelope,
	faHandshake,
	faHome,
	faLaptopCode,
	faListCheck,
	faPaperPlane,
	faPhone,
	faQuestionCircle,
	faQuoteLeft,
	faRocket,
	faStar,
	faToolbox,
	faUser,
	faWrench,
} from "@fortawesome/free-solid-svg-icons";

const FaIcon = ({ icon, className = "", ...props }) => (
	<FontAwesomeIcon
		icon={icon}
		className={`inline-block ${className}`.trim()}
		aria-hidden="true"
		{...props}
	/>
);

export const IconRocket = (props) => <FaIcon icon={faRocket} {...props} />;
export const IconBriefcase = (props) => (
	<FaIcon icon={faBriefcase} {...props} />
);
export const IconCode = (props) => <FaIcon icon={faCode} {...props} />;
export const IconCodeBranch = (props) => (
	<FaIcon icon={faCodeBranch} {...props} />
);
export const IconGears = (props) => <FaIcon icon={faCogs} {...props} />;
export const IconWrench = (props) => <FaIcon icon={faWrench} {...props} />;
export const IconHome = (props) => <FaIcon icon={faHome} {...props} />;
export const IconUser = (props) => <FaIcon icon={faUser} {...props} />;
export const IconTools = (props) => <FaIcon icon={faToolbox} {...props} />;
export const IconProcess = (props) => (
	<FaIcon icon={faListCheck} {...props} />
);
export const IconChat = (props) => <FaIcon icon={faCommentDots} {...props} />;
export const IconQuestion = (props) => (
	<FaIcon icon={faQuestionCircle} {...props} />
);
export const IconMail = (props) => <FaIcon icon={faEnvelope} {...props} />;
export const IconClipboard = (props) => (
	<FaIcon icon={faClipboardList} {...props} />
);
export const IconBuild = (props) => <FaIcon icon={faLaptopCode} {...props} />;
export const IconHandshake = (props) => (
	<FaIcon icon={faHandshake} {...props} />
);
export const IconChevronDown = (props) => (
	<FaIcon icon={faChevronDown} {...props} />
);
export const IconExternal = (props) => (
	<FaIcon icon={faArrowUpRightFromSquare} {...props} />
);
export const IconCheck = (props) => <FaIcon icon={faCheckCircle} {...props} />;
export const IconPhone = (props) => <FaIcon icon={faPhone} {...props} />;
export const IconSend = (props) => <FaIcon icon={faPaperPlane} {...props} />;
export const IconStar = (props) => <FaIcon icon={faStar} {...props} />;
export const IconQuote = (props) => <FaIcon icon={faQuoteLeft} {...props} />;

export default FaIcon;
