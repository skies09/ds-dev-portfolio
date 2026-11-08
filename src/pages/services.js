import { motion } from "framer-motion";
import { IconCode, IconGears, IconWrench } from "../components/icons";
import Button from "../components/button";
import SectionHeader from "../components/sectionHeader";

const services = [
	{
		icon: IconCode,
		title: "New Websites & Web Apps",
		description:
			"Launch a professional online presence that builds trust and converts visitors. From landing pages to full web applications — mobile-first, fast, and tailored to your brand.",
		outcome: "Ideal for: new businesses, rebrands, product launches",
		cta: "Start Your Project",
	},
	{
		icon: IconGears,
		title: "Features & Integrations",
		description:
			"Already have a site? I'll add what you need — online stores, booking systems, user accounts, payment processing, API integrations, and custom functionality.",
		outcome: "Ideal for: growing businesses ready to scale",
		cta: "Upgrade My Site",
	},
	{
		icon: IconWrench,
		title: "Fixes & Performance",
		description:
			"Broken features, slow load times, or a site that doesn't work on mobile? I'll diagnose the problem quickly and get your platform running smoothly again.",
		outcome: "Ideal for: sites that need urgent attention",
		cta: "Get It Fixed",
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
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 100, damping: 15 },
	},
};

const Services = () => {
	return (
		<section
			className="relative w-screen overflow-hidden h-auto bg-colorThree py-12 lg:py-16 section-wash"
			id="services"
		>
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="What I offer"
					title="Services"
					subtitle="Whether you're starting from scratch or improving what you have, I deliver results that move your business forward."
				/>

				<motion.div
					className="flex flex-col lg:flex-row gap-6 lg:gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{services.map((service) => {
						const ServiceIcon = service.icon;
						return (
							<motion.div
								key={service.title}
								variants={cardVariants}
								className="relative flex-1 bg-colorTwo rounded-2xl p-6 lg:p-8 border border-colorOne/30 hover:border-colorOne/50 transition-colors flex flex-col overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-colorOne/60 before:to-transparent"
							>
								<div className="flex items-center gap-4 mb-4">
									<div className="w-14 h-14 rounded-full bg-colorOne/15 flex items-center justify-center border border-colorOne/30 shrink-0">
										<ServiceIcon className="w-7 h-7 text-colorOne" />
									</div>
									<h3 className="text-xl lg:text-2xl font-bold text-colorFive font-display">
										{service.title}
									</h3>
								</div>

								<p className="text-colorFive/90 font-sans text-sm lg:text-base leading-relaxed mb-4 flex-grow">
									{service.description}
								</p>

								<p className="text-colorOne/80 font-monoTwo text-xs lg:text-sm mb-6">
									{service.outcome}
								</p>

								<Button
									text={service.cta}
									active={true}
									action="contact"
									variant="secondary"
									className="!min-w-0 w-full text-sm"
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
