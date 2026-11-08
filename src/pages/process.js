import { motion } from "framer-motion";
import {
	IconBuild,
	IconChat,
	IconClipboard,
	IconHandshake,
} from "../components/icons";
import Button from "../components/button";
import SectionHeader from "../components/sectionHeader";

const steps = [
	{
		icon: IconChat,
		step: "01",
		title: "Discovery Call",
		description:
			"We talk through what you need — a new website, extra features on an existing site, or a fix for something that's broken. I'll clarify your goals, timeline, and budget so we're aligned from the start.",
	},
	{
		icon: IconClipboard,
		step: "02",
		title: "Scope & Plan",
		description:
			"I outline exactly what I'll do and how long it'll take. That might mean wireframes for a new site, a technical spec for new features, or a diagnosis for a bug — so you always know what you're getting before work begins.",
	},
	{
		icon: IconBuild,
		step: "03",
		title: "Build & Deliver",
		description:
			"I get to work with regular check-ins along the way. You see progress, can give feedback, and stay in the loop — whether I'm building from scratch, integrating a feature, or resolving an issue.",
	},
	{
		icon: IconHandshake,
		step: "04",
		title: "Handover & Support",
		description:
			"Everything is tested and handed over cleanly, with no loose ends. Need changes or more work down the line? I'm here for ongoing support — whatever your site needs next.",
	},
];

const Process = () => {
	return (
		<section id="process" className="relative bg-colorThree py-12 lg:py-16 section-wash-alt">
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="The flow"
					title="How We'll Work Together"
					subtitle="Whether you're starting from scratch, adding to what you have, or fixing something that's gone wrong — clear communication, no surprises."
					className="mb-4"
				/>
				<p className="text-center text-colorOne/80 font-monoTwo text-xs lg:text-sm mb-10 lg:mb-14 tracking-wide">
					New websites · New features · Bug fixes & performance
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((step, index) => {
						const StepIcon = step.icon;
						return (
						<motion.div
							key={step.step}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="relative bg-colorTwo/60 rounded-2xl p-6 border border-colorOne/20 hover:border-colorOne/40 transition-colors"
						>
							<span className="text-colorOne/40 font-display font-bold text-4xl absolute top-4 right-4">
								{step.step}
							</span>
							<div className="w-12 h-12 rounded-full bg-colorOne/15 flex items-center justify-center mb-4 border border-colorOne/30">
								<StepIcon className="w-5 h-5 text-colorOne" />
							</div>
							<h3 className="text-lg font-bold text-colorFive font-display mb-2">
								{step.title}
							</h3>
							<p className="text-sm text-colorFive/80 font-sans leading-relaxed">
								{step.description}
							</p>
						</motion.div>
						);
					})}
				</div>

				<motion.div
					className="text-center mt-10"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<Button
						text="Get in Touch"
						active={true}
						action="contact"
						variant="primary"
						className="text-sm lg:text-base"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Process;
