import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
	const socialLinks = [
		{
			id: "facebook",
			href: "https://www.facebook.com/profile.php?id=100002920786337",
			icon: faFacebook,
			label: "Facebook",
		},
		{
			id: "instagram",
			href: "https://www.instagram.com/skies009/",
			icon: faInstagram,
			label: "Instagram",
		},
		{
			id: "github",
			href: "https://github.com/skies09",
			icon: faGithub,
			label: "GitHub",
		},
		{
			id: "linkedIn",
			href: "https://www.linkedin.com/in/donna-smith-091285/",
			icon: faLinkedin,
			label: "LinkedIn",
		},
	];

	return (
		<div className="flex flex-row justify-center items-center pt-6 mb-8 gap-3 lg:gap-4">
			{socialLinks.map((link, index) => (
				<motion.a
					key={link.id}
					id={link.id}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Visit ${link.label}`}
					className="relative p-4 rounded-full bg-colorTwo text-colorFive hover:text-colorOne transition-all duration-300 shadow-neo-outset hover:shadow-neo-inset"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.98 }}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						delay: index * 0.1,
						ease: "easeOut",
					}}
				>
					<FontAwesomeIcon
						icon={link.icon}
						className="text-xl lg:text-2xl relative z-10"
					/>
				</motion.a>
			))}
		</div>
	);
};
export default SocialLinks;
