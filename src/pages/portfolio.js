import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PortfolioCard from "../components/portfolioCard";
import { portfolioData } from "../portfolioData";

const Portfolio = () => {
	const [activeTab, setActiveTab] = useState("website");
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true });
	const mainControls = useAnimation();

	const tabs = ["website", "app"];

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
		<div className="bg-colorThree pt-4">
			<h2 className="text-3xl font-bold text-center text-colorFive -mb-4">
				Portfolio
			</h2>
			<div className="flex justify-center gap-2 lg:gap-6 mt-12">
				{tabs.map((tab) => (
					<button
						key={tab}
						className={`px-6 py-2 rounded-lg font-medium transition-all ${
							activeTab === tab
								? "bg-colorOne text-colorFive"
								: "text-colorFive hover:underline"
						}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab === "website" ? "Websites" : "App Projects"}
					</button>
				))}
			</div>
			<div
				className="w-screen overflow-hidden flex flex-col gap-10 overflow-x-hidden lg:h-auto pb-4 bg-colorThree"
				ref={containerRef}
				id="portfolio"
			>
				<motion.section
					key={activeTab}
					variants={gridContainerVariants}
					initial="hidden"
					whileInView="show"
					className="flex flex-wrap justify-center gap-6 p-4 py-6 w-11/12 mx-auto"
				>
					{portfolioData
						.filter((project) => project.category === activeTab)
						.map((project) => (
							<motion.div
								key={project.id}
								variants={gridSquareVariants}
								className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex justify-center items-center"
							>
								<PortfolioCard
									project={project}
									index={project.id}
								/>
							</motion.div>
						))}
				</motion.section>
			</div>
		</div>
	);
};

export default Portfolio;
