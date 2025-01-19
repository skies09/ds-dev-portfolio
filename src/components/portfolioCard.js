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
				className={`flex justify-between items-center bg-colorThree ${
					viewProject ? "px-4 py-3" : ""
				} border border-[#75dbff] rounded-xl w-full h-68 shadow-shadow-colorTwo mt-6`}
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
					className={`relative w-full rounded-xl max-h-[11rem] overflow-hidden group ${
						viewProject ? "rotate-y-180 hidden" : ""
					}`}
					style={{ backfaceVisibility: "hidden" }}
				>
					<img
						className="w-full h-auto object-contain"
						src={`../../assets/Images/${project.img}`}
						alt={project.title}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
					<div className="absolute inset-0 flex mt-2 items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100">
						<div className="bg-colorFive backdrop-blur-sm border border-colorThree px-4 py-2 rounded-md m-4 sm:m-0">
							<h3 className="text-md lg:text-2xl text-colorThree font-bold tracking-widest shadow-lg font-roboto">
								{project.title}
							</h3>
						</div>
					</div>

					{/* Links Section */}
					<div className="absolute bottom-4 right-4 flex gap-4">
						{project.github && (
							<a
								id="github"
								href={project.github}
								className="bg-colorThree hover:bg-gray-700 text-white py-1 px-2 lg:px-4 lg:py-2 rounded-lg transition-colors flex items-center gap-2"
							>
								<FontAwesomeIcon
									className="text-colorOne text-lg"
									icon={faGithub}
								/>
							</a>
						)}
						{!project.link.includes("Coming Soon") && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-colorThree hover:bg-blue-500 text-white py-1 px-2 lg:px-4 lg:py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
							>
								<FontAwesomeIcon
									className="text-colorOne text-lg"
									icon={faArrowUpRightFromSquare}
								/>
								<span className="text-colorOne font-">
									Demo
								</span>
							</a>
						)}
					</div>
				</div>
				{/* Back of card */}
				<div
					className={`flex-col w-full h-full text-center flex items-center justify-center backface-hidden min-h-[20rem] ${
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
									<p className="text-sm text-colorOne font-bold flex justify-start font-racing">
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
										<p className="text-xs text-colorOne font-medium flex justify-center font-racing">
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
