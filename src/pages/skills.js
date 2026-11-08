import { motion } from "framer-motion";
import SectionHeader from "../components/sectionHeader";
import { skills } from "../portfolioData";

const containerVariants = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.05,
		},
	},
};

const skillVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
	return (
		<section
			className="relative w-screen overflow-hidden h-auto bg-colorThree py-8 lg:py-12 section-wash-alt"
			id="skills"
		>
			<div className="max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="Stack"
					title="Skills & Technologies"
					subtitle="Modern tools chosen for speed, reliability, and long-term maintainability."
					className="mb-8"
				/>

				<motion.div
					className="flex flex-wrap justify-center gap-3 lg:gap-4"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{Object.entries(skills).map(([skillName, iconName]) => (
						<motion.span
							key={skillName}
							className="px-4 py-2 bg-colorTwo/80 font-monoTwo text-sm lg:text-base font-semibold rounded-2xl text-colorFive border border-colorOne/20 hover:border-colorOne/50 hover:bg-colorTwo hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(61,214,245,0.14)] transition duration-200 flex flex-row items-center gap-2"
							variants={skillVariants}
						>
							<img
								src={`https://skillicons.dev/icons?i=${iconName}&theme=dark`}
								alt=""
								className="w-5 h-5 lg:w-6 lg:h-6"
								loading="lazy"
							/>
							{skillName}
						</motion.span>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
