import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioCard({ project }) {
	const [viewProject, setViewProject] = useState(false);

	return (
		<AnimatePresence>
			{viewProject ? (
				<motion.div
					initial={{ opacity: 0, scale: 1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 1 }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
					onClick={() => setViewProject(false)}
				>
					<motion.div
						className="flex flex-col justify-center bg-colorTwo px-4 py-2 text-colorFive border border-colorFive rounded-xl w-5/6 md:w-1/2 lg:w-1/2"
						onClick={(e) => e.stopPropagation()}
					>
						<p className="text-2xl text-colorFive font-bold flex justify-center text-center font-sans py-2 tracking-widest">
							{project.title}
						</p>
						<div className="flex justify-center items-center">
							<img
								className="w-4/6 h-auto border border-colorFive rounded-xl"
								src={`../../assets/Images/${project.img}`}
								alt="Project"
							/>
						</div>
						<p className="text-2xl md:text-md text-colorFive font-bold flex justify-center text-center font-monoTwo pt-4">
							{project.link}
						</p>
						<p className="ml-3 text-lg md:text-sm text-colorFive font-bold flex justify-start text-start font-serif tracking-wide py-2">
							{project.longDescription}
						</p>

						{project.keyFeatures &&
							project.keyFeatures.length > 0 && (
								<div className="ml-3">
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
							<div className="ml-3 pt-2 flex flex-row justify-start items-start">
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

						<motion.button
							whileTap={{ scale: 0.9 }}
							whileHover={{
								scale: 1.1,
								backgroundColor: "#003459",
								color: "#F9F9F9",
								border: "solid #007EA7 2px",
							}}
							transition={{
								bounceDamping: 10,
								bounceStiffness: 600,
							}}
							className={
								"w-1/3 mx-auto flex justify-center items-center mb-2 px-4 py-2 bg-colorTwo text-colorOne border border-colorFive rounded-xl tracking-wider font-mono"
							}
							onClick={() => setViewProject(false)}
						>
							Close
						</motion.button>
					</motion.div>
				</motion.div>
			) : (
				<motion.div className="flex flex-col justify-center items-center bg-colorTwo px-4 py-2 text-colorFive border border-colorFive rounded-xl w-5/6 md:w-1/2 lg:w-72 shadow-shadow-colorTwo">
					<p className="text-2xl text-colorFive font-bold flex justify-center text-center font-sans py-2 tracking-widest">
						{project.title}
					</p>

					<img
						className="w-5/6 lg:w-3/4 h-auto border border-colorFive rounded-xl"
						src={`../../assets/Images/${project.img}`}
						alt="Project"
					/>

					<p className="text-sm md:text-md text-colorFive font-bold flex justify-center text-center font-monoTwo pt-4">
						{project.link}
					</p>
					<p className="text-sm md:text-sm text-colorFive font-bold flex justify-center text-center font-display tracking-wide py-4">
						{project.shortDescription}
					</p>

					<motion.button
						whileTap={{ scale: 0.9 }}
						whileHover={{
							scale: 1.1,
							backgroundColor: "#003459",
							color: "#F9F9F9",
							border: "solid #007EA7 2px",
						}}
						transition={{ bounceDamping: 10, bounceStiffness: 600 }}
						className={
							"mb-2 px-4 py-2 bg-colorTwo text-colorOne border border-colorFive rounded-xl tracking-wider font-monoTwo"
						}
						onClick={() => setViewProject(true)}
					>
						View
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
