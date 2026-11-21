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
		title: "Free discovery call",
		description:
			"Tell me what you need — a new site, an upgrade, or a fix. We align on goals, timeline, and budget before anything is billed.",
	},
	{
		icon: IconClipboard,
		step: "02",
		title: "Clear fixed quote",
		description:
			"You get a simple plan and a fixed price. No surprise extras — you know exactly what you're paying for before work starts.",
	},
	{
		icon: IconBuild,
		step: "03",
		title: "Build with check-ins",
		description:
			"I build while you stay in the loop. Regular updates mean you can steer early, not scramble at the end.",
	},
	{
		icon: IconHandshake,
		step: "04",
		title: "Launch & support",
		description:
			"Clean handover, tested and ready. Need tweaks or more features later? I'm here so your site keeps earning for you.",
	},
];

const Process = () => {
	return (
		<section id="process" className="relative bg-colorThree py-16 lg:py-24 section-wash-alt">
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="Simple from day one"
					title="How booking works"
					subtitle="No jargon, no surprises — a free call, a fixed quote, then we build."
					className="mb-4"
				/>
				<p className="text-center text-colorOne font-sans text-sm mb-10 lg:mb-14">
					New sites · Upgrades · Fixes & performance
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
							className="relative bg-colorTwo rounded-2xl p-6 border border-colorFive/10 hover:border-colorOne/25 transition-colors"
						>
							<span className="text-colorOne/40 font-display font-bold text-4xl absolute top-4 right-4">
								{step.step}
							</span>
							<div className="w-12 h-12 rounded-full bg-colorOne/15 flex items-center justify-center mb-4 border border-colorOne/30">
								<StepIcon className="w-5 h-5 text-colorOne" />
							</div>
							<h3 className="text-lg lg:text-xl font-extrabold text-colorFive font-display tracking-tight mb-2">
								{step.title}
							</h3>
							<p className="text-base text-colorFive/90 font-sans leading-relaxed">
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
						text="Book a Free Discovery Call"
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
