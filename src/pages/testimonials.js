import { IconQuote, IconStar } from "../components/icons";
import { motion } from "framer-motion";
import SectionHeader from "../components/sectionHeader";
import { testimonials } from "../portfolioData";

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="relative py-16 lg:py-24 bg-colorThree section-wash-alt"
		>
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="Client love"
					title="Don't take my word for it"
					subtitle="Here's what people say after we shipped together."
					className="mb-8 lg:mb-10"
				/>

				<div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
					{testimonials.map((testimonial, index) => (
						<motion.blockquote
							key={testimonial.name}
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.7,
								delay: index * 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{ y: -5, scale: 1.01 }}
							className="relative bg-colorTwo rounded-2xl p-8 lg:p-10 transition-all duration-300 border border-colorFive/10 hover:border-colorOne/25 group overflow-hidden m-0"
						>
							<div
								className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
								aria-hidden="true"
							>
								<IconQuote className="text-colorOne w-24 h-24 lg:w-28 lg:h-28" />
							</div>

							<div className="relative z-10">
								<div
									className="flex gap-1.5 mb-6"
									aria-label={`${testimonial.rating} out of 5 stars`}
								>
									{Array.from({ length: testimonial.rating }).map(
										(_, i) => (
											<IconStar
												key={i}
												className="text-colorOne w-5 h-5 lg:w-6 lg:h-6"
											/>
										),
									)}
								</div>

								<p className="text-colorFive font-sans text-lg lg:text-xl leading-relaxed mb-8 italic">
									{testimonial.quote}
								</p>

								<footer className="flex items-center justify-between pt-6 border-t border-colorFive/20">
									<div>
										<cite className="not-italic font-extrabold text-colorFive text-lg lg:text-xl font-display tracking-tight block mb-0.5">
											{testimonial.name}
										</cite>
										<p className="text-xs lg:text-sm text-colorOne/80 font-mono uppercase tracking-wider">
											{testimonial.role}
										</p>
									</div>
								</footer>
							</div>

							<div
								className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 via-transparent to-colorAccent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
								aria-hidden="true"
							/>
						</motion.blockquote>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
