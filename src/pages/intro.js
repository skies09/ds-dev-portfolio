import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { IconBriefcase, IconRocket } from "../components/icons";
import Button from "../components/button";
import ShinyText from "../components/ShinyText/shinyText";

const trustStats = [
	{ value: "5+", label: "Projects delivered" },
	{ value: "100%", label: "Client satisfaction" },
	{ value: "2–4 wks", label: "Typical turnaround" },
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
				className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(420px,72vw)] h-[min(420px,72vw)] lg:w-[min(380px,36vw)] lg:h-[min(380px,36vw)] rounded-full hero-bg-orb hero-glow-animate pointer-events-none"
				aria-hidden="true"
			/>
			<div
				className="absolute top-[18%] left-[12%] w-48 h-48 rounded-full bg-colorOne/[0.04] blur-3xl pointer-events-none"
				aria-hidden="true"
			/>
			<div
				className="absolute bottom-[15%] right-[10%] w-56 h-56 rounded-full bg-colorFour/[0.06] blur-3xl pointer-events-none"
				aria-hidden="true"
			/>

			<span
				className="hero-float absolute top-[22%] left-[8%] lg:left-[14%] text-4xl lg:text-6xl hidden sm:block"
				aria-hidden="true"
			>
				{"{"}
			</span>
			<span
				className="hero-float hero-float-delay absolute top-[28%] right-[8%] lg:right-[14%] text-4xl lg:text-6xl hidden sm:block"
				aria-hidden="true"
			>
				{"}"}
			</span>
			<div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-32 lg:py-24 flex flex-col items-center text-center">
				<motion.div
					className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-colorOne/25 bg-colorTwo/40 backdrop-blur-sm"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="status-dot" aria-hidden="true" />
					<span className="text-colorAccent text-xs md:text-sm font-monoTwo tracking-wide">
						Available for hire · UK-based
					</span>
				</motion.div>

				<motion.h1
					className="leading-none"
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
				>
					<ShinyText
						text="Donna Smith"
						disabled={false}
						speed={4.5}
						className="font-brand font-bold text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em]"
					/>
				</motion.h1>

				<motion.p
					className="text-colorFive/80 text-base md:text-lg lg:text-xl font-sans mt-5 lg:mt-6 max-w-2xl leading-relaxed"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					I help small businesses and startups with new websites, new
					features on existing sites, and fixes when something isn't working
					right.
				</motion.p>

				<motion.div
					className="mt-8 lg:mt-10 w-full flex justify-center items-center text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<span className="font-monoTwo text-colorOne/40 mr-2 hidden sm:inline">
						{"›"}
					</span>
					<ReactTypingEffect
						className="hero-typing text-base md:text-lg font-monoTwo text-colorOne/80"
						text={typingString}
						speed={60}
						eraseSpeed={50}
						eraseDelay={1500}
					/>
				</motion.div>

				<motion.div
					className="w-16 h-px bg-gradient-to-r from-transparent via-colorOne/50 to-transparent my-4 lg:my-5"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
				/>

				<motion.div
					className="flex flex-row flex-wrap justify-center gap-3 lg:gap-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.45 }}
				>
					<Button
						text="Start Your Project"
						active={true}
						action="contact"
						variant="primary"
						icon={IconRocket}
						className="text-sm lg:text-base"
					/>
					<Button
						text="See My Work"
						active={true}
						action="portfolio"
						variant="secondary"
						icon={IconBriefcase}
						className="text-sm lg:text-base"
					/>
				</motion.div>

				<motion.div
					className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-center gap-8 lg:gap-16 mt-10 lg:mt-14 pt-8 pb-8 border-t border-b border-colorOne/10 w-full"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.55 }}
				>
					{trustStats.map((stat, index) => (
						<div key={stat.label} className="text-center shrink-0 relative">
							{index > 0 && (
								<span
									className="hidden sm:block absolute -left-8 lg:-left-10 top-1/2 -translate-y-1/2 w-px h-8 bg-colorOne/15"
									aria-hidden="true"
								/>
							)}
							<p className="text-2xl md:text-3xl font-display font-bold text-colorOne">
								{stat.value}
							</p>
							<p className="text-xs md:text-sm text-colorFive/50 font-monoTwo mt-1">
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
