import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioModal from "./modal";

export default function PortfolioCard({ project }) {
	const [viewProject, setViewProject] = useState(false);
	const url = project.link.replace(/^https?:\/\//, "www.");

	return (
		<>
			<motion.div
				className="flex flex-col justify-between items-center bg-colorThree px-4 py-3 border border-[#75dbff] rounded-xl w-72 h-96 shadow-shadow-colorTwo"
				whileHover={{ scale: 1.1 }}
				onClick={() => setViewProject(true)}
			>
				{/* Title Section */}
				<div className="h-12 flex items-center justify-center my-2">
					<p className="text-2xl text-[#0cdcff] font-bold text-center font-sans tracking-widest overflow-hidden">
						{project.title}
					</p>
				</div>

				{/* Image Section */}
				<div className="w-full h-1/2 flex items-center justify-center overflow-hidden py-1">
					<img
						className="w-full h-full object-cover border border-[#75dbff] rounded-xl"
						src={`../../assets/Images/${project.img}`}
						alt="Project"
					/>
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

				{/* Description Section */}
				<div className="h-12 flex items-center justify-center">
					<p className="text-sm md:text-sm text-colorFive font-bold text-center font-display tracking-wide overflow-hidden">
						{project.shortDescription}
					</p>
				</div>
			</motion.div>

			{viewProject && (
				<PortfolioModal
					project={project}
					onClose={() => setViewProject(false)}
				/>
			)}
		</>
	);
}
