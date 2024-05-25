import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function PortfolioModal({ project, onClose }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 1 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
			onClick={onClose}
		>
			<motion.div
				className="flex flex-col justify-center bg-colorTwo px-4 py-2 text-colorFive border border-colorFive rounded-xl w-5/6 md:w-1/2 xl:w-1/3 relative shadow-shadow-colorTwo"
				onClick={(e) => e.stopPropagation()}
			>
				<p className="text-2xl text-colorFive font-bold flex justify-center text-center font-sans py-3 tracking-widest">
					{project.title}
				</p>
				<div className="flex justify-center items-center">
					<img
						className="w-11/12 md:w-4/6 h-auto border border-colorFive rounded-xl"
						src={`../../assets/Images/${project.img}`}
						alt="Project"
					/>
				</div>
				<p className="text-sm md:text-md text-colorFive font-bold flex justify-center text-center font-monoTwo py-2">
					{project.link}
				</p>
				<p className="ml-3 text-sm md:text-sm text-colorFive font-bold flex justify-start text-start font-serif tracking-wide py-2">
					{project.longDescription}
				</p>

				{project.keyFeatures && project.keyFeatures.length > 0 && (
					<div className="ml-3 py-2">
						<p className="text-sm text-colorFour font-bold flex justify-start font-sans">
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
					<div className="ml-3 py-2 flex flex-row justify-start items-start">
						{project.languages.map((l, index) => (
							<div
								key={index}
								className="mb-2 px-4 py-2 bg-colorThree text-colorFive border border-colorThree rounded-xl tracking-wider font-monoTwo mr-3"
							>
								<p className="text-sm text-colorFive font-bold flex justify-center font-sans">
									{l}
								</p>
							</div>
						))}
					</div>
				)}

				<div
					className="absolute top-0 right-0 cursor-pointer"
					onClick={onClose}
				>
					<FontAwesomeIcon
						icon={faClose}
						size="xl"
						className="text-colorFive hover:text-colorOne m-4"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
