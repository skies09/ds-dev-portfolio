import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PortfolioCard from "../components/portfolioCard";
import { portfolioData } from "../portfolioData";

const  Portfolio =() => {
	const containerRef = useRef(null);

	const isInView = useInView(containerRef, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	const gridContainerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const gridSquareVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<div
			className="w-screen overflow-hidden flex flex-col gap-10 overflow-x-hidden lg:h-auto py-12 bg-colorThree"
			ref={containerRef}
			id="portfolio"
		>
			<motion.section
				variants={gridContainerVariants}
				initial="hidden"
				whileInView="show"
				className="flex flex-wrap justify-evenly p-4 py-6 h-full overflow-hidden"
			>
				{portfolioData.map((project, index) => (
					<motion.div
						variants={gridSquareVariants}
						className="justify-center flex items-center p-4 w-full lg:w-5/6 h-full"
					>
						<PortfolioCard project={project} index={index} />
					</motion.div>
				))}
			</motion.section>
		</div>
	);
}

export default Portfolio;
