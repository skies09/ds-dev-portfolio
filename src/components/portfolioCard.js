import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PortfolioCard = ({ project, index }) => {
	const [viewProject, setViewProject] = useState(false);
	const url = project.linkText.replace(/^https?:\/\//, "www.");

	return (
		<>
			<motion.div
				className={`flex justify-between items-center ${
					viewProject ? "px-4 py-3" : ""
				} rounded-2xl w-full h-68 shadow-shadow-colorTwo mt-6`}
				whileHover={{ scale: 1.05 }}
				onClick={() => {
					if (viewProject) {
						setViewProject(false);
					} else {
						setViewProject(true);
					}
				}}
				initial={{ rotateY: 0 }}
				animate={{ rotateY: viewProject ? 180 : 0 }}
				transition={{ duration: 0.8 }}
				style={{ transformStyle: "preserve-3d" }}
			>
				{/* Front of card */}
				<div
					className={`relative w-full rounded-2xl overflow-hidden group ${
						viewProject ? "rotate-y-180 hidden" : ""
					}`}
					style={{ backfaceVisibility: "hidden" }}
				>
					<img
						className="w-full h-56 object-cover"
						src={`../../assets/Images/${project.img}`}
						alt={project.title}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
					<div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100">
						<div
							className="bg-colorFive backdrop-blur-sm w-full py-2 flex items-center px-4"
							onClick={(e) => e.stopPropagation()}
						>
							<h3 className="text-md lg:text-xl text-colorThree font-bold tracking-wide font-roboto flex-2">
								{project.title}
							</h3>

							{/* Links Section  */}
							<div className="flex-1 flex justify-end gap-4">
								{project.github && (
									<a
										id="github"
										href={project.github}
										className="py-1 px-2 lg:px-4 lg:py-2 rounded-lg transition-colors flex items-center gap-2"
									>
										<FontAwesomeIcon
											className="text-colorFour text-xl hover:text-colorThree"
											icon={faGithub}
										/>
									</a>
								)}
								{!project.link.includes("Coming Soon") && (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="py-1 px-2 lg:px-4 lg:py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
									>
										<FontAwesomeIcon
											className="text-colorFour text-xl hover:text-colorThree"
											icon={faArrowUpRightFromSquare}
										/>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
				{/* Back of card */}
				<div
					className={`flex-col w-full h-56 text-center flex items-center justify-center backface-hidden ${
						viewProject ? "" : "hidden"
					}`}
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					{/* Information Section */}
					<div className="w-full h-full flex flex-col justify-between px-4">
						{/* Title Section */}
						<div className="ml-0 md:ml-3 h-full flex items-center justify-center md:justify-start my-2">
							<p className="text-2xl text-[#0cdcff] font-bold text-left font-sans tracking-widest overflow-hidden">
								{project.title}
							</p>
						</div>

						{/* Description Section */}
						<div className="h-full flex items-center justify-center md:justify-start">
							<p className="ml-0 md:ml-3 text-sm md:text-sm text-colorFive font-bold flex justify-start text-start font-display tracking-wide py-2">
								{project.longDescription}
							</p>
						</div>

						{/* Key Features Section */}
						{project.keyFeatures &&
							project.keyFeatures.length > 0 && (
								<div className="ml-0 md:ml-3 py-2 h-full">
									<p className="text-sm text-colorOne font-bold flex justify-start font-serif">
										Key features:
									</p>
									{project.keyFeatures.map((k, index) => (
										<div
											key={index}
											className="flex flex-col justify-center items-start pb-2"
										>
											<p className="text-sm text-colorFive font-bold flex justify-center font-sans">
												{k}
											</p>
										</div>
									))}
								</div>
							)}

						{/* Languages Section */}
						{project.languages && project.languages.length > 0 && (
							<div className="ml-0 md:ml-3 py-2 h-full flex flex-row justify-center md:justify-start items-start">
								{project.languages.map((l, index) => (
									<div
										key={index}
										className="mb-2 px-3 py-1 border-2 border-colorOne rounded-xl tracking-wider font-monoTwo mr-3 drop-shadow-xl"
									>
										<p className="text-xs text-colorOne flex justify-center font-serif font-semibold">
											{l}
										</p>
									</div>
								))}
							</div>
						)}

						{/* Link Section */}
						<div className="ml-0 md:ml-3 h-full flex items-center justify-start">
							{!project.link.includes("Coming Soon") ? (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm md:text-md text-[#75dbff] font-bold text-center font-monoTwo overflow-hidden"
								>
									{url}
								</a>
							) : (
								<p className="text-sm md:text-md text-[#75dbff] font-bold text-center font-monoTwo overflow-hidden">
									{project.linkText}
								</p>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default PortfolioCard;
