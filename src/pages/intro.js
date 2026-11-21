import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { IconBriefcase, IconRocket } from "../components/icons";
import Button from "../components/button";
import ShinyText from "../components/ShinyText/shinyText";

const trustStats = [
	{ value: "Free", label: "Quote & discovery call" },
	{ value: "48 hrs", label: "Typical reply time" },
	{ value: "2–4 wks", label: "Most projects live" },
];

const Intro = () => {
	const typingString = [
		"New websites & web apps ",
		"Features & integrations ",
		"Bug fixes & performance ",
	];

	return (
		<section
			className="relative w-screen overflow-hidden min-h-[90vh] lg:min-h-screen hero-bg-base mt-8 flex items-center justify-center"
			id="intro"
		>
			<div
				className="absolute inset-0 hero-bg-grid pointer-events-none"
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0 hero-bg-ring pointer-events-none"
				aria-hidden="true"
			/>
			<div
				className="absolute top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(360px,70vw)] h-[min(360px,70vw)] lg:w-[min(320px,30vw)] lg:h-[min(320px,30vw)] rounded-full hero-bg-orb hero-glow-animate pointer-events-none"
				aria-hidden="true"
			/>

			<span
				className="hero-float absolute top-[24%] left-[10%] lg:left-[16%] text-5xl lg:text-7xl hidden md:block"
				aria-hidden="true"
			>
				{"{"}
			</span>
			<span
				className="hero-float hero-float-delay absolute top-[30%] right-[10%] lg:right-[16%] text-5xl lg:text-7xl hidden md:block"
				aria-hidden="true"
			>
				{"}"}
			</span>

			<div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-28 lg:py-32 flex flex-col items-center text-center">
				<motion.div
					className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-full border border-colorFive/10 bg-colorTwo/50"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55 }}
				>
					<span className="status-dot" aria-hidden="true" />
					<span className="text-colorFive/90 text-sm font-sans font-medium tracking-wide">
						Open for new projects · Free quotes
					</span>
				</motion.div>

				<motion.h1
					className="leading-none"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
				>
					<ShinyText
						text="Donna Smith"
						disabled={false}
						speed={5}
						className="font-brand font-extrabold text-5xl md:text-6xl lg:text-hero-lg tracking-[-0.045em]"
					/>
				</motion.h1>

				<motion.p
					className="text-colorFive text-lg md:text-xl font-sans font-medium mt-6 lg:mt-7 max-w-xl leading-relaxed"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.18 }}
				>
					Fast, professional websites that help small businesses get noticed
					— and turn visitors into customers.
				</motion.p>

				<motion.div
					className="mt-8 lg:mt-10 w-full flex justify-center items-center text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.55, delay: 0.28 }}
				>
					<span
						className="font-mono text-colorOne/50 mr-2 text-lg md:text-xl"
						aria-hidden="true"
					>
						{"›"}
					</span>
					<ReactTypingEffect
						className="hero-typing text-lg md:text-xl font-display font-semibold text-colorOne tracking-tight"
						text={typingString}
						speed={60}
						eraseSpeed={50}
						eraseDelay={1500}
					/>
				</motion.div>

				<motion.div
					className="flex flex-row flex-wrap justify-center gap-3 lg:gap-4 mt-10 lg:mt-12"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.38 }}
				>
					<Button
						text="Get a Free Quote"
						action="contact"
						variant="primary"
						icon={IconRocket}
						className="text-sm lg:text-base"
					/>
					<Button
						text="See Recent Work"
						action="portfolio"
						variant="secondary"
						icon={IconBriefcase}
						className="text-sm lg:text-base"
					/>
				</motion.div>

				<motion.p
					className="mt-4 text-sm text-colorFive/70 font-sans"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.45, delay: 0.42 }}
				>
					No obligation · Clear fixed pricing · Reply within 48 hours
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-center gap-8 lg:gap-14 mt-14 lg:mt-16 pt-8 border-t border-colorFive/10 w-full max-w-2xl"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, delay: 0.48 }}
				>
					{trustStats.map((stat) => (
						<div key={stat.label} className="text-center shrink-0">
							<p className="text-2xl md:text-3xl font-display font-extrabold text-colorFive tracking-tight">
								{stat.value}
							</p>
							<p className="text-sm text-colorFive/80 font-sans font-medium mt-1.5">
								{stat.label}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Intro;
