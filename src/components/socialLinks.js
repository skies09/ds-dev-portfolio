import React from "react";
import { motion } from "framer-motion";
import {
	IconFacebook,
	IconGithub,
	IconInstagram,
	IconLinkedin,
} from "./icons";

const SocialLinks = () => {
	const socialLinks = [
		{
			id: "facebook",
			href: "https://www.facebook.com/profile.php?id=100002920786337",
			icon: IconFacebook,
			label: "Facebook",
		},
		{
			id: "instagram",
			href: "https://www.instagram.com/skies009/",
			icon: IconInstagram,
			label: "Instagram",
		},
		{
			id: "github",
			href: "https://github.com/skies09",
			icon: IconGithub,
			label: "GitHub",
		},
		{
			id: "linkedIn",
			href: "https://www.linkedin.com/in/donna-smith-091285/",
			icon: IconLinkedin,
			label: "LinkedIn",
		},
	];

	return (
		<div className="flex flex-row justify-center items-center pt-6 mb-8 gap-3 lg:gap-4">
			{socialLinks.map((link, index) => {
				const LinkIcon = link.icon;
				return (
					<motion.a
						key={link.id}
						id={link.id}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit ${link.label}`}
						className="relative inline-flex items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-colorTwo/80 text-colorFive hover:text-colorOne border border-colorOne/20 hover:border-colorOne/50 transition-all duration-300"
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
						<LinkIcon className="w-5 h-5 lg:w-[1.35rem] lg:h-[1.35rem] relative z-10" />
					</motion.a>
				);
			})}
		</div>
	);
};

export default SocialLinks;
