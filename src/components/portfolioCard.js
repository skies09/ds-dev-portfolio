import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortfolioCard = ({ project, index }) => {
	// Alternate layout: even index = image left, odd index = image right
	const isImageLeft = index % 2 === 0;

	return (
		<div
			className={`w-full flex flex-col lg:flex-row gap-0 items-start lg:items-center mb-12 lg:mb-24 relative ${
				isImageLeft ? "" : "lg:flex-row-reverse"
			}`}
		>
			{/* Mobile: Title at top */}
			<motion.div
				className="w-full mb-6 lg:hidden text-center"
				initial={{ opacity: 0, y: -30, scale: 0.95 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{
					duration: 0.7,
					ease: [0.16, 1, 0.3, 1],
					delay: index * 0.1,
				}}
			>
				<h3 className="text-3xl lg:text-4xl font-bold text-colorFive font-display tracking-tight leading-tight">
					{project.title}
				</h3>
			</motion.div>

			{/* Image Section */}
			<motion.div
				className={`w-full lg:w-3/5 flex justify-center relative z-20 lg:z-0 ${
					isImageLeft ? "lg:pr-0" : "lg:pl-0"
				}`}
				initial={{
					opacity: 0,
					x: isImageLeft ? -120 : 120,
					scale: 0.85,
					rotateY: isImageLeft ? -15 : 15,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					scale: 1,
					rotateY: 0,
				}}
				viewport={{ once: true, margin: "-100px" }}
				transition={{
					duration: 1,
					delay: index * 0.12,
					ease: [0.16, 1, 0.3, 1],
				}}
			>
				{!project.link.includes("Coming Soon") ? (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit ${project.title} website`}
						className="relative w-[85%] lg:w-full h-auto md:w-auto lg:h-96 rounded-xl overflow-hidden group -mb-8 lg:mb-0 block"
						style={{
							boxShadow: `
								0 0 40px rgba(0, 168, 232, 0.5),
								0 0 80px rgba(138, 0, 196, 0.3),
								0 0 120px rgba(0, 168, 232, 0.2),
								0 20px 60px rgba(0, 0, 0, 0.4)
							`,
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-colorOne/20 via-transparent to-colorOne/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
						{/* Mobile Image */}
						{project.imgMobile && (
							<img
								className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 lg:hidden"
								src={`../../assets/Images/${project.imgMobile}`}
								alt={`Screenshot of ${project.title} project`}
							/>
						)}
						{/* Desktop Image */}
						<img
							className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${
								project.imgMobile ? "hidden lg:block" : ""
							}`}
							src={`../../assets/Images/${project.img}`}
							alt={`Screenshot of ${project.title} project`}
						/>
					</a>
				) : (
					<div
						className="relative w-[85%] lg:w-full h-[500px] lg:h-96 rounded-xl overflow-hidden group -mb-8 lg:mb-0"
						style={{
							boxShadow: `
								0 0 40px rgba(0, 168, 232, 0.5),
								0 0 80px rgba(138, 0, 196, 0.3),
								0 0 120px rgba(0, 168, 232, 0.2),
								0 20px 60px rgba(0, 0, 0, 0.4)
							`,
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-colorOne/20 via-transparent to-colorOne/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
						{/* Mobile Image */}
						{project.imgMobile && (
							<img
								className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 lg:hidden"
								src={`../../assets/Images/${project.imgMobile}`}
								alt={`Screenshot of ${project.title} project`}
							/>
						)}
						{/* Desktop Image */}
						<img
							className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${
								project.imgMobile ? "hidden lg:block" : ""
							}`}
							src={`../../assets/Images/${project.img}`}
							alt={`Screenshot of ${project.title} project`}
						/>
					</div>
				)}
			</motion.div>

			{/* Content Section */}
			<motion.div
				className={`w-full lg:w-2/5 flex flex-col justify-center lg:mt-0 ${
					isImageLeft ? "lg:pl-10" : "lg:pr-10 lg:items-end"
				}`}
				initial={{
					opacity: 0,
					x: isImageLeft ? 120 : -120,
					scale: 0.85,
					rotateY: isImageLeft ? 15 : -15,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					scale: 1,
					rotateY: 0,
				}}
				viewport={{ once: true, margin: "-100px" }}
				transition={{
					duration: 1,
					delay: index * 0.12 + 0.25,
					ease: [0.16, 1, 0.3, 1],
				}}
			>
				{/* Desktop: Title */}
				<motion.div
					className={`hidden lg:block mb-6 ${
						isImageLeft ? "text-left" : "text-right"
					}`}
					initial={{ opacity: 0, y: -30, scale: 0.95 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.7,
						delay: index * 0.12 + 0.4,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<h3 className="text-5xl lg:text-6xl font-bold text-colorFive font-display tracking-tight leading-tight bg-gradient-to-r from-colorFive via-colorOne to-colorSix bg-clip-text text-transparent">
						{project.title}
					</h3>
				</motion.div>

				{/* Text Box */}
				<motion.div
					className={`rounded-xl pt-[3.5rem] pb-6 px-6 lg:pt-10 lg:pb-10 lg:px-10 shadow-2xl text-left relative z-10 lg:z-20 ${
						isImageLeft
							? "lg:text-left lg:-ml-14"
							: "lg:text-right lg:-mr-14"
					}`}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.8,
						delay: index * 0.12 + 0.5,
						ease: [0.16, 1, 0.3, 1],
					}}
					style={{
						backgroundColor: "rgba(0, 52, 89, 0.98)",
						backdropFilter: "blur(10px)",
						boxShadow:
							"0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(240, 248, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
						border: "1px solid rgba(0, 168, 232, 0.2)",
					}}
				>
					{/* Description */}
					<p className="text-sm lg:text-base text-colorFive/95 font-sans leading-relaxed mb-6 lg:mb-7 font-medium">
						{project.longDescription}
					</p>

					{/* Key Features */}
					{project.keyFeatures && project.keyFeatures.length > 0 && (
						<div className="mb-6 lg:mb-7">
							<ul className="space-y-2.5 lg:space-y-3">
								{project.keyFeatures.map((feature, idx) => (
									<motion.li
										key={idx}
										initial={{
											opacity: 0,
											x: isImageLeft ? -20 : 20,
										}}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay:
												index * 0.12 + 0.6 + idx * 0.1,
										}}
										className={`text-sm lg:text-base text-colorFive/90 font-sans flex items-start ${
											isImageLeft
												? ""
												: "lg:flex-row-reverse lg:justify-end"
										}`}
									>
										<span
											className={`text-transparent bg-gradient-to-r from-colorOne to-colorSix bg-clip-text mr-3 mt-0.5 font-bold text-lg ${
												isImageLeft
													? ""
													: "lg:ml-3 lg:mr-0"
											}`}
										>
											•
										</span>
										<span className="font-medium">
											{feature}
										</span>
									</motion.li>
								))}
							</ul>
						</div>
					)}

					{/* Tech Stack */}
					{project.languages && project.languages.length > 0 && (
						<div
							className={`flex flex-wrap gap-2 lg:gap-2.5 ${
								isImageLeft ? "justify-start" : "lg:justify-end"
							}`}
						>
							{project.languages.map((lang, idx) => (
								<motion.span
									key={idx}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: index * 0.12 + 0.7 + idx * 0.05,
										ease: "easeOut",
									}}
									whileHover={{ scale: 1.05, y: -2 }}
									className="px-3 py-1.5 text-xs font-semibold text-colorFive/90 bg-colorTwo/50 border border-colorOne/30 rounded-lg font-monoTwo hover:bg-colorTwo/70 hover:border-colorOne/60 hover:text-colorOne shadow-neo-outset hover:shadow-neo-inset transition-all duration-300 cursor-default"
								>
									{lang}
								</motion.span>
							))}
						</div>
					)}
				</motion.div>

				{/* Links */}
				<motion.div
					className={`flex items-center gap-4 lg:gap-5 mt-5 lg:mt-6 justify-center ${
						isImageLeft ? "lg:justify-start" : "lg:justify-end"
					}`}
					initial={{ opacity: 0, y: 30, scale: 0.9 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.7,
						delay: index * 0.12 + 0.8,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					{project.github && (
						<motion.a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View ${project.title} on GitHub`}
							className="relative p-4 rounded-full bg-colorTwo text-colorFive hover:text-colorOne transition-all duration-300 shadow-neo-outset hover:shadow-neo-inset group/link"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							onClick={(e) => e.stopPropagation()}
						>
							<FontAwesomeIcon
								className="text-xl lg:text-2xl relative z-10"
								icon={faGithub}
							/>
						</motion.a>
					)}
					{!project.link.includes("Coming Soon") && (
						<motion.a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Visit ${project.title} website`}
							className="relative p-4 rounded-full bg-colorTwo text-colorFive hover:text-colorOne transition-all duration-300 shadow-neo-outset hover:shadow-neo-inset group/link"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							onClick={(e) => e.stopPropagation()}
						>
							<FontAwesomeIcon
								className="text-xl lg:text-2xl relative z-10"
								icon={faArrowUpRightFromSquare}
							/>
						</motion.a>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default PortfolioCard;
