import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PortfolioCard from "../components/portfolioCard";
import { portfolioData } from "../portfolioData";

export default function Portfolio() {
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
				className="flex flex-wrap justify-evenly p-4 py-12 h-full overflow-hidden"
			>
				{portfolioData.map((project) => (
					<motion.div
						variants={gridSquareVariants}
						className="justify-center flex items-center p-4 max-h-full max-w-full"
					>
						<PortfolioCard project={project} />
					</motion.div>
				))}
			</motion.section>
		</div>
	);
}
