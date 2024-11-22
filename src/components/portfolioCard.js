import React, { useState } from "react";
import { motion } from "framer-motion";

const PortfolioCard = ({ project, index }) => {
	const [viewProject, setViewProject] = useState(false);
	const url = project.link.replace(/^https?:\/\//, "www.");

	// Determine the image position based on index (even: left, odd: right)
	const isOdd = index % 2 !== 0;

	return (
		<>
			<motion.div
				className={`flex justify-between items-center bg-colorThree px-4 py-3 border border-[#75dbff] rounded-xl w-full h-68 shadow-shadow-colorTwo mt-6`}
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
					className={`${
						isOdd ? "md:flex-row-reverse" : "md:flex-row"
					} flex-col w-full h-full text-center flex items-center justify-center backface-hidden ${
						viewProject ? "rotate-y-180 hidden" : ""
					}`}
					style={{ backfaceVisibility: "hidden" }}
				>
					{/* Image Section */}
					<div className="w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden py-1">
						<img
							className="w-full h-full object-cover border border-[#75dbff] rounded-xl"
							src={`../../assets/Images/${project.img}`}
							alt={project.title}
						/>
					</div>

					{/* Information Section */}
					<div className="w-full md:w-1/2 h-full flex flex-col justify-between px-4">
						{/* Title Section */}
						<div className="h-12 flex items-center justify-center my-2">
							<p className="text-2xl text-[#0cdcff] font-bold text-center font-sans tracking-widest overflow-hidden">
								{project.title}
							</p>
						</div>

						{/* Description Section */}
						<div className="h-12 flex items-center justify-center">
							<p className="text-sm md:text-sm text-colorFive font-bold text-center font-display tracking-wide overflow-hidden">
								{project.shortDescription}
							</p>
						</div>

						{/* Link Section */}
						<div className="h-12 flex items-center justify-center">
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
									{project.link}
								</p>
							)}
						</div>
					</div>
				</div>
				{/* Back of card */}
				<div
					className={`${
						isOdd ? "md:flex-row" : "md:flex-row-reverse"
					} flex-col w-full h-full text-center flex items-center justify-center backface-hidden ${
						viewProject ? "" : "hidden"
					}`}
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					{/* Image Section */}
					<div className="w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden py-1">
						<img
							className="w-full h-full object-cover border border-[#75dbff] rounded-xl"
							src={`../../assets/Images/${project.img}`}
							alt={project.title}
						/>
					</div>

					{/* Information Section */}
					<div className="w-full md:w-1/2 h-full flex flex-col justify-between px-4">
						{/* Title Section */}
						<div className="ml-0 md:ml-3 h-12 flex items-center justify-center md:justify-start my-2">
							<p className="text-2xl text-[#0cdcff] font-bold text-center font-sans tracking-widest overflow-hidden">
								{project.title}
							</p>
						</div>

						{/* Description Section */}
						<div className="h-12 flex items-center justify-center md:justify-start">
							<p className="ml-0 md:ml-3 text-sm md:text-sm text-colorFive font-bold flex justify-start text-start font-display tracking-wide py-2">
								{project.longDescription}
							</p>
						</div>
						{project.keyFeatures &&
							project.keyFeatures.length > 0 && (
								<div className="ml-0 md:ml-3 py-2">
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
						{project.languages && project.languages.length > 0 && (
							<div className="ml-0 md:ml-3 py-2 flex flex-row justify-center md:justify-start items-start">
								{project.languages.map((l, index) => (
									<div
										key={index}
										className="mb-2 px-3 py-1  border-2 border-colorOne rounded-xl tracking-wider font-monoTwo mr-3 drop-shadow-xl"
									>
										<p className="text-xs text-colorOne font-medium flex justify-center font-racing">
											{l}
										</p>
									</div>
								))}
							</div>
						)}

						{/* Link Section */}
						<div className="ml-0 md:ml-3 h-12 flex items-center justify-start">
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
									{project.link}
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
