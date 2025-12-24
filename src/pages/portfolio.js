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

	return (
		<div className="bg-colorThree pt-4">
			<h2 className="text-3xl font-bold text-center text-colorFive -mb-4">
				Portfolio
			</h2>
			<div className="flex justify-center gap-4 lg:gap-5 mt-12">
				{tabs.map((tab) => (
					<motion.button
						key={tab}
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.98 }}
						className={`px-8 py-3.5 rounded-xl font-display font-semibold tracking-wider transition-all duration-300 ${
							activeTab === tab
								? "bg-colorTwo text-colorFive border-2 border-colorOne/60 shadow-neo-outset"
								: "bg-colorTwo text-colorFive border-2 border-colorOne/30 hover:border-colorOne/60 hover:bg-colorTwo/90 shadow-neo-outset hover:shadow-neo-inset"
						}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab === "website" ? "Websites" : "App Projects"}
					</motion.button>
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
					viewport={{ once: true }}
					className="flex flex-col gap-6 p-4 py-6 mt-6 lg:mt-12 w-11/12 max-w-7xl mx-auto"
				>
					{portfolioData
						.filter((project) => project.category === activeTab)
						.map((project, idx) => (
							<PortfolioCard
								key={project.id}
								project={project}
								index={idx}
							/>
						))}
				</motion.section>
			</div>
		</div>
	);
};

export default Portfolio;
