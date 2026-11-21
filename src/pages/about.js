import { motion } from "framer-motion";
import { IconCheck } from "../components/icons";
import Button from "../components/button";
import SectionHeader from "../components/sectionHeader";
import { skillsData } from "../portfolioData";

const highlights = [
	"Clear communication — no jargon, no surprises",
	"Mobile-first designs that work on every device",
	"Clean, maintainable code you can grow with",
	"Fast turnaround without cutting corners",
];

const aboutTextVariants = {
	hidden: { opacity: 0, x: -50 },
	show: { opacity: 1, x: 0 },
};

const containerVariants = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.15,
		},
	},
};

const About = () => {
	return (
		<section
			className="relative w-screen overflow-hidden h-auto bg-colorThree py-16 lg:py-24 section-wash"
			id="about"
		>
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="Why work with me"
					title="Built for business owners, not tech jargon"
					subtitle="Clear communication, honest pricing, and websites designed to bring in customers."
				/>

				<div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
					<motion.div
						className="w-2/3 lg:w-1/3 flex justify-center items-center"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<img
							className="shadow-shadow-colorOne w-full max-w-xs h-auto border border-colorOne/25 rounded-full"
							src="/assets/Images/profilePic.png"
							alt="Donna Smith — Full-stack web developer"
						/>
					</motion.div>

					<motion.div
						className="w-full lg:w-2/3 flex flex-col gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
					>
						<motion.p
							variants={aboutTextVariants}
							className="text-colorFive text-lg lg:text-xl font-sans font-medium leading-[1.75]"
						>
							You don't need more tech talk — you need a site that works.
							I build and fix websites for small businesses and startups
							so you can look professional online and spend less time
							wrestling with your tech.
						</motion.p>

						<motion.p
							variants={aboutTextVariants}
							className="text-colorFive/90 text-base lg:text-lg font-sans leading-[1.75]"
						>
							From brand-new launches to features on what you already
							have (or something that's broken), I keep things simple:
							clear communication, realistic timelines, and code you can
							grow with after launch.
						</motion.p>

						<motion.ul
							variants={containerVariants}
							className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
						>
							{highlights.map((item) => (
								<motion.li
									key={item}
									variants={aboutTextVariants}
									className="flex items-start gap-2 text-base text-colorFive font-sans"
								>
									<IconCheck className="text-colorOne mt-0.5 shrink-0 w-5 h-5" />
									{item}
								</motion.li>
							))}
						</motion.ul>

						<motion.div variants={aboutTextVariants}>
							<Button
								text="Book a Free Quote"
								action="contact"
								variant="primary"
								className="text-sm lg:text-base mt-2"
							/>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 mt-10 lg:mt-14 w-full"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{skillsData
						.filter((s) => s.section !== "Interests")
						.map((s) => (
							<div
								key={s.section}
								className="bg-colorTwo rounded-xl p-4 border border-colorFive/10 text-center w-full"
							>
								<p className="text-sm text-colorOne font-semibold font-sans mb-1">
									{s.section}
								</p>
								<p className="text-sm text-colorFive/90 font-sans leading-relaxed">
									{s.skills}
								</p>
							</div>
						))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
