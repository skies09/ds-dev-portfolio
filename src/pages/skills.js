import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { skills } from "../portfolioData";

const Skills = () => {
	const containerRef = useRef(null);
	const mainControls = useAnimation();

	const isInView = useInView(containerRef, { once: true });

	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 1,
				staggerChildren: 0.2,
			},
		},
	};

	// Variants for individual skill items
	const skillVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	};

	useEffect(() => {
		if (isInView) {
			mainControls.start("show");
		} else {
			mainControls.start("hidden");
		}
	}, [isInView, mainControls]);

	return (
		<div
			className="w-screen overflow-hidden h-auto bg-colorThree"
			ref={containerRef}
			id="skills"
		>
			<div className="lg:my-12 flex flex-col lg:flex-row-reverse justify-center items-center w-11/12 mx-auto">
				<motion.div
					className="w-11/12 lg:w-3/4 lg:mt-0 flex justify-center items-center h-auto"
					variants={containerVariants}
					initial="hidden"
					animate={mainControls}
				>
					<section id="skills" className="bg-white py-8">
						<div className="max-w-6xl mx-auto px-4">
							<h2 className="text-3xl font-bold text-center text-colorFive mb-8">
								Skills & Technologies
							</h2>
							<div className="flex flex-wrap justify-center gap-4">
								{skills.map((skill, index) => (
									<motion.span
										key={index}
										className="px-4 py-2 bg-colorFive rounded-lg text-gray-700 hover:bg-gray-200 transition duration-200"
										variants={skillVariants}
									>
										{skill}
									</motion.span>
								))}
							</div>
						</div>
					</section>
				</motion.div>
			</div>
		</div>
	);
};

export default Skills;
