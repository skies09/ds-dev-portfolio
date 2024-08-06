import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioModal from "./modal";

export default function PortfolioCard({ project }) {
	const [viewProject, setViewProject] = useState(false);
	const url = project.link.replace(/^https?:\/\//, "www.");

	return (
		<>
			<motion.div
				className="flex flex-col justify-center items-center bg-colorThree px-4 py-2 border border-[#75dbff] rounded-xl w-5/6 md:w-1/2 lg:w-72 shadow-shadow-colorTwo h-full"
				whileHover={{ scale: 1.1 }}
				onClick={() => setViewProject(true)}
			>
				<p className="text-2xl text-[#0cdcff] font-bold flex justify-center text-center font-sans py-2 tracking-widest">
					{project.title}
				</p>
				<img
					className="w-5/6 lg:w-3/4 h-auto border border-[#75dbff] rounded-xl"
					src={`../../assets/Images/${project.img}`}
					alt="Project"
				/>
				{!project.link.includes("Coming Soon") && (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-sm md:text-md text-[#75dbff] font-bold flex justify-center text-center font-monoTwo pt-4">
							{url}
						</p>
					</a>
				)}
				{project.link.includes("Coming Soon") && (
					<p className="text-sm md:text-md text-[#75dbff] font-bold flex justify-center text-center font-monoTwo pt-4">
						{project.link}
					</p>
				)}
				<p className="text-sm md:text-sm text-colorFive font-bold flex justify-center text-center font-display tracking-wide py-4">
					{project.shortDescription}
				</p>
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
