import { motion } from "framer-motion";
import { IconCode, IconGears, IconWrench } from "../components/icons";
import Button from "../components/button";
import SectionHeader from "../components/sectionHeader";

const services = [
	{
		icon: IconCode,
		title: "New Websites & Web Apps",
		description:
			"Launch a site that builds trust in seconds and turns visitors into enquiries. Mobile-first, fast, and built around your brand — not a generic template.",
		outcome: "Best for launches, rebrands & new products",
		cta: "Quote my new site",
	},
	{
		icon: IconGears,
		title: "Features & Integrations",
		description:
			"Already have a site? Add the pieces that grow revenue — bookings, payments, accounts, shops, and custom tools that save you hours every week.",
		outcome: "Best for businesses ready to scale",
		cta: "Upgrade my site",
	},
	{
		icon: IconWrench,
		title: "Fixes & Performance",
		description:
			"Something broken, slow, or awkward on mobile? I'll find the issue fast and get you back online — so you stop losing customers to friction.",
		outcome: "Best when you need it sorted soon",
		cta: "Get it fixed",
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
			className="relative w-screen overflow-hidden h-auto bg-colorThree py-16 lg:py-24 section-wash"
			id="services"
		>
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="How I can help"
					title="Pick what you need"
					subtitle="Tell me where you are — new build, upgrade, or repair — and I'll give you a clear plan and a free quote."
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
								className="relative flex-1 bg-colorTwo rounded-2xl p-6 lg:p-8 border border-colorFive/10 hover:border-colorOne/30 transition-colors flex flex-col overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-colorOne/50 before:to-transparent"
							>
								<div className="flex items-center gap-4 mb-4">
									<div className="w-14 h-14 rounded-full bg-colorOne/15 flex items-center justify-center border border-colorOne/30 shrink-0">
										<ServiceIcon className="w-7 h-7 text-colorOne" />
									</div>
									<h3 className="text-xl lg:text-2xl font-extrabold text-colorFive font-display tracking-tight">
										{service.title}
									</h3>
								</div>

								<p className="text-colorFive/90 font-sans text-base leading-relaxed mb-4 flex-grow">
									{service.description}
								</p>

								<p className="text-colorOne font-sans text-sm mb-6">
									{service.outcome}
								</p>

								<Button
									text={service.cta}
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
