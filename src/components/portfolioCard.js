import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortfolioCard = ({ project, index }) => {
	// Alternate layout: even index = image left, odd index = image right
	const isImageLeft = index % 2 === 0;

	return (
		<motion.div
			className={`w-full flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center mb-12 lg:mb-16 relative ${
				isImageLeft ? "" : "lg:flex-row-reverse"
			}`}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
		>
			{/* Image Section */}
			<div className={`w-full lg:w-3/5 ${isImageLeft ? "lg:pr-0" : "lg:pl-0"}`}>
				<div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden group">
					<img
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						src={`../../assets/Images/${project.img}`}
						alt={`Screenshot of ${project.title} project`}
					/>
				</div>
			</div>

			{/* Content Section - Title, Text Box, and Links */}
			<div
				className={`w-full lg:w-2/5 flex flex-col justify-center mt-6 lg:mt-0 ${
					isImageLeft
						? "lg:pl-8"
						: "lg:pr-8 lg:items-end"
				}`}
			>
				{/* Title - Outside, above everything */}
				<div className={`mb-4 text-left ${isImageLeft ? "lg:text-left" : "lg:text-right"}`}>
					<p className="text-xs text-colorOne font-semibold mb-2 font-display uppercase tracking-wider">
						Featured Project
					</p>
					<h3 className="text-2xl lg:text-3xl font-bold text-colorFive font-display tracking-tight">
						{project.title}
					</h3>
				</div>

				{/* Text Box - Overlapping image on desktop */}
				<div
					className={`rounded-lg p-6 lg:p-8 shadow-2xl text-left relative z-10 ${
						isImageLeft ? "lg:text-left lg:-ml-12" : "lg:text-right lg:-mr-12"
					}`}
					style={{
						backgroundColor: "rgba(0, 52, 89, 0.95)",
						boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(240, 248, 255, 0.1)",
					}}
				>
					{/* Description */}
					<p className="text-sm lg:text-base text-colorFive/90 font-sans leading-relaxed mb-5">
						{project.longDescription}
					</p>

					{/* Key Features */}
					{project.keyFeatures && project.keyFeatures.length > 0 && (
						<div className="mb-5">
							<ul className="space-y-2">
								{project.keyFeatures.map((feature, idx) => (
									<li
										key={idx}
										className={`text-sm text-colorFive/80 font-sans flex items-start ${
											isImageLeft ? "" : "lg:flex-row-reverse lg:justify-end"
										}`}
									>
										<span className="text-colorOne mr-2 mt-1">
											•
										</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Tech Stack */}
					{project.languages && project.languages.length > 0 && (
						<div
							className={`flex flex-wrap gap-2 justify-start ${
								isImageLeft ? "lg:justify-start" : "lg:justify-end"
							}`}
						>
							{project.languages.map((lang, idx) => (
								<span
									key={idx}
									className="px-3 py-1 text-xs font-medium text-colorOne bg-colorOne/10 border border-colorOne/30 rounded-full font-monoTwo"
								>
									{lang}
								</span>
							))}
						</div>
					)}
				</div>

				{/* Links - Outside, below text box */}
				<div
					className={`flex items-center gap-4 mt-4 justify-start ${
						isImageLeft ? "lg:justify-start" : "lg:justify-end"
					}`}
				>
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View ${project.title} on GitHub`}
							className="text-colorFive hover:text-colorOne transition-colors duration-300"
							onClick={(e) => e.stopPropagation()}
						>
							<FontAwesomeIcon
								className="text-xl lg:text-2xl"
								icon={faGithub}
							/>
						</a>
					)}
					{!project.link.includes("Coming Soon") && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Visit ${project.title} website`}
							className="text-colorFive hover:text-colorOne transition-colors duration-300"
							onClick={(e) => e.stopPropagation()}
						>
							<FontAwesomeIcon
								className="text-xl lg:text-2xl"
								icon={faArrowUpRightFromSquare}
							/>
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioCard;
