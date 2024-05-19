import React from "react";
import { motion } from "framer-motion";
import Button from "./button";

export default function PortfolioCard({ project }) {
	
	return (
		<motion.div 
		className="flex flex-col justify-center items-center bg-colorFour px-4 py-2 text-colorFive border border-colorFive rounded-xl w-5/6 md:w-1/2 lg:w-72">
			<p className="text-xl lg:text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo py-2">
				{project.title}
			</p>

			<img
				className="w-5/6 lg:w-3/4 h-auto border border-colorFive rounded-xl"
				src={`../../assets/Images/${project.img}`}
				alt="Project"
			/>

			<p className="text-xs md:text-md text-colorFive font-bold flex justify-center text-center font-monoTwo pt-4">
				{project.link}
			</p>
			<p className="text-xs md:text-sm text-colorFive font-bold flex justify-center text-center font-monoTwo py-4">
				{project.shortDescription}
			</p>
			<Button
				text="View"
				className={
					"mb-2 px-4 py-2 bg-colorTwo text-colorOne border border-colorFive rounded-xl tracking-wider font-monoTwo"
				}
				active={true}
				action={"modal"}
			/>
		</motion.div>
	);
}
