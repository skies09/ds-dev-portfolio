import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCode,
	faPuzzlePiece,
	faWrench,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
	const containerRef = useRef(null);
	const mainControls = useAnimation();

	const isInView = useInView(containerRef, { once: true });

	const services = [
		{
			icon: faCode,
			title: "Build Websites and Apps",
			description:
				"From concept to deployment, I create modern, responsive websites and applications that are easy to use and built to last. I work closely with you from initial idea to final launch to turn your vision into a polished digital product—whether it’s a simple static landing page or a complex web application.",
		},
		{
			icon: faPuzzlePiece,
			title: "Add Features & Functionality",
			description:
				"Need more from your current website or app? I can extend your platform with custom features such as online stores, user accounts, payments, API integrations, or anything else you need. Whether it’s a simple improvement or a brand-new idea, I’ll make sure it’s built cleanly and integrates perfectly with your existing system.",
		},
		{
			icon: faWrench,
			title: "Fix Website & App Issues",
			description:
				"If your website or app isn’t performing at its full potential, I’ll quickly identify the issues—whether it’s broken features, poor performance, or suboptimal functionality. From debugging to optimization, I’ll enhance your platform to run as smoothly and efficiently as possible.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 60, scale: 0.8 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15,
				bounce: 0.5,
			},
		},
	};

	useEffect(() => {
		if (isInView) {
			mainControls.start("show");
		}
	}, [isInView, mainControls]);

	return (
		<div
			className="w-screen overflow-hidden h-auto bg-colorThree"
			ref={containerRef}
			id="services"
		>
			<div className="container max-w-6xl mx-auto px-4 pt-4 pb-12 lg:pb-16 lg:pt-0">
				<motion.h2
					className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-colorFive font-display"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					Services
				</motion.h2>

				<motion.div
					className="flex flex-col lg:flex-row gap-6 lg:gap-8"
					variants={containerVariants}
					initial="hidden"
					animate={mainControls}
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							className="relative flex-1 bg-colorTwo rounded-2xl p-6 lg:p-10 shadow-2xl border-2 border-colorOne/50 overflow-hidden"
							style={{
								boxShadow:
									"0 25px 70px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 168, 232, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)",
							}}
						>
							{/* Background gradient */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/10 via-transparent to-colorFour/10 pointer-events-none" />

							<div className="relative z-10 flex flex-col items-center text-center">
								{/* Icon */}
								<motion.div
									initial={{ scale: 0, rotate: -180 }}
									whileInView={{ scale: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{
										type: "spring",
										stiffness: 150,
										damping: 12,
										delay: index * 0.2 + 0.3,
									}}
									className="mb-6"
								>
									<div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-colorOne/20 to-colorFour/20 flex items-center justify-center border-2 border-colorOne/50 shadow-shadow-colorOne">
										<FontAwesomeIcon
											icon={service.icon}
											className="text-4xl lg:text-5xl text-colorOne"
											style={{
												filter: "drop-shadow(0 0 10px rgba(0, 168, 232, 0.8))",
											}}
										/>
									</div>
								</motion.div>

								{/* Title */}
								<h3 className="text-xl lg:text-2xl font-bold text-colorFive mb-4 lg:mb-6 font-display">
									{service.title}
								</h3>

								{/* Description */}
								<p className="text-colorFive/95 font-sans text-sm lg:text-base leading-relaxed font-medium">
									{service.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Services;
