import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../components/portfolioCard";
import SectionHeader from "../components/sectionHeader";
import { portfolioData } from "../portfolioData";

const tabs = ["website", "app"];

const gridContainerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const Portfolio = () => {
	const [activeTab, setActiveTab] = useState("website");

	return (
		<section className="relative bg-colorThree pt-12 lg:pt-16 pb-4" id="portfolio">
			<div className="max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="Selected work"
					title="Portfolio"
					subtitle="Real projects for real businesses — see the results."
					className="mb-2"
				/>
			</div>
			<div
				className="flex flex-row gap-4 lg:gap-5 mt-12 w-11/12 mx-auto justify-center items-center"
				role="tablist"
				aria-label="Portfolio categories"
			>
				{tabs.map((tab) => {
					const isActive = activeTab === tab;
					return (
						<motion.button
							key={tab}
							type="button"
							role="tab"
							aria-selected={isActive}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.97 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className={`w-11/12 lg:w-auto px-6 lg:px-12 py-4 rounded-2xl font-display font-semibold tracking-wide transition-all duration-300 overflow-hidden flex items-center justify-center border-2 ${
								isActive
									? "bg-colorTwo/80 backdrop-blur-sm text-colorFive border-colorFour/70 shadow-tab-active"
									: "text-colorFive border-colorFour/40 bg-transparent hover:border-colorFour/60"
							}`}
							onClick={() => setActiveTab(tab)}
						>
							<span className="relative z-10">
								{tab === "website" ? "Websites" : "App Projects"}
							</span>
						</motion.button>
					);
				})}
			</div>
			<div className="w-screen overflow-hidden flex flex-col gap-10 overflow-x-hidden lg:h-auto pb-4 bg-colorThree">
				<motion.div
					key={activeTab}
					role="tabpanel"
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
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
