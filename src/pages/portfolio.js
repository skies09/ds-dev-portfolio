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
						whileHover={{ scale: activeTab === tab ? 1.03 : 1.03, y: -2 }}
						whileTap={{ scale: 0.97 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className={`px-12 py-4 rounded-full font-display font-semibold tracking-wide transition-all duration-300 overflow-hidden ${
							activeTab === tab
								? "bg-gradient-to-br from-colorTwo via-colorFour to-colorTwo text-colorFive"
								: "bg-colorTwo/80 backdrop-blur-sm text-colorFive border-2 border-colorFour/40 hover:border-colorFour/70"
						}`}
						onClick={() => setActiveTab(tab)}
						style={
							activeTab === tab
								? {
										boxShadow: "0 4px 15px rgba(0, 52, 89, 0.4), 0 2px 8px rgba(0, 122, 167, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)",
									}
								: {
										boxShadow: "0 4px 15px rgba(0, 23, 31, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.05)",
									}
						}
						onMouseEnter={(e) => {
							if (activeTab === tab) {
								e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 52, 89, 0.5), 0 4px 12px rgba(0, 122, 167, 0.4), inset 0 1px 0 rgba(240, 248, 255, 0.15)";
							} else {
								e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 23, 31, 0.4), inset 0 1px 0 rgba(240, 248, 255, 0.1)";
								e.currentTarget.style.backgroundColor = "rgba(0, 52, 89, 0.9)";
							}
						}}
						onMouseLeave={(e) => {
							if (activeTab === tab) {
								e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 52, 89, 0.4), 0 2px 8px rgba(0, 122, 167, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)";
							} else {
								e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 23, 31, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.05)";
								e.currentTarget.style.backgroundColor = "rgba(0, 52, 89, 0.8)";
							}
						}}
					>
						<span className="relative z-10">{tab === "website" ? "Websites" : "App Projects"}</span>
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
