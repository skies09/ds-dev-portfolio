import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { skillsData } from "../portfolioData";

export default function About() {
	const containerRef = useRef(null);
	const mainControls = useAnimation();

	const isInView = useInView(containerRef, { once: true });

	const aboutTextVariants = {
		hidden: { opacity: 0, x: -50 },
		show: { opacity: 1, x: 0 },
	};

	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.2,
			},
		},
	};

	useEffect(() => {
		if (isInView) {
			mainControls.start("show");
		} else {
			mainControls.start("hidden");
		}
	}, [isInView]);

	return (
		<div
			className="w-screen overflow-hidden h-auto bg-colorThree"
			ref={containerRef}
			id="about"
		>
			<div className="lg:my-12 flex flex-col lg:flex-row-reverse justify-center items-center w-11/12 mx-auto">
				<motion.div
					className="w-3/4 lg:w-1/2 flex justify-center items-center h-auto"
					initial={{ opacity: 0 }}
					animate={mainControls}
					variants={{
						hidden: { opacity: 0 },
						show: { opacity: 1 },
					}}
					transition={{ duration: 5, delay: 0.5 }}
				>
					<img
						className="shadow-shadow-colorOne w-4/6 mt-16 lg:mt-0 h-auto border-colorOne rounded-full"
						src={`../../assets/Images/profilePic.jpeg`}
						alt="Project"
					/>
				</motion.div>

				<motion.div
					className="w-11/12 lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center h-auto"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
				>
					<div className="flex flex-col">
						<div className="text-3xl text-[#2cc9ff] font-bold flex justify-start font-display pt-8 lg:pt-0 pb-4 underline">
							About:
						</div>
						{skillsData.map((s) => (
							<div className="flex flex-col justify-center items-start pb-6">
								<p className="text-md text-[#0096c4] font-bold flex justify-center font-sans">
									{s.section}
								</p>
								<motion.p
									variants={aboutTextVariants}
									className="pl-8 pt-2 text-sm lg:text-lg text-[#2cc9ff] font-bold flex justify-center font-monoTwo"
								>
									{s.skills}
								</motion.p>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
