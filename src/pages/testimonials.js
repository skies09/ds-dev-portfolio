import React from "react";
import { IconQuote, IconStar } from "../components/icons";
import { motion } from "framer-motion";
import SectionHeader from "../components/sectionHeader";
import { testimonials } from "../portfolioData";

const Testimonials = () => {
	return (
		<section id="testimonials" className="relative lg:pb-12 bg-colorThree section-wash-alt">
			<div className="container max-w-6xl mx-auto px-4">
				<SectionHeader
					eyebrow="Social proof"
					title="What Clients Say"
					subtitle="Real feedback from people I've worked with."
					className="mb-8 lg:mb-10"
				/>

				<div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.7,
								delay: index * 0.15,
								ease: [0.16, 1, 0.3, 1],
							}}
							viewport={{ once: true, margin: "-50px" }}
							whileHover={{ y: -5, scale: 1.01 }}
							className="relative bg-colorTwo rounded-2xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-colorOne/30 hover:border-colorOne/50 group overflow-hidden"
							style={{
								boxShadow:
									"0 25px 70px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(240, 248, 255, 0.1)",
							}}
						>
							{/* Background decorative quote */}
							<div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
								<IconQuote className="text-colorOne w-24 h-24 lg:w-28 lg:h-28" />
							</div>

							<div className="relative z-10">
								{/* Rating Stars */}
								<div className="flex gap-1.5 mb-6">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<motion.div
												key={i}
												initial={{
													opacity: 0,
													scale: 0,
													rotate: -180,
												}}
												whileInView={{
													opacity: 1,
													scale: 1,
													rotate: 0,
												}}
												viewport={{ once: true }}
												transition={{
													duration: 0.5,
													delay:
														index * 0.15 +
														0.2 +
														i * 0.1,
													ease: "easeOut",
												}}
											>
												<IconStar className="text-colorOne w-5 h-5 lg:w-6 lg:h-6" />
											</motion.div>
										),
									)}
								</div>

								{/* Quote Icon */}

								{/* Quote Text */}
								<p className="text-colorFive/95 font-sans text-base lg:text-lg leading-relaxed mb-8 font-medium">
									{testimonial.quote}
								</p>

								{/* Author Section */}
								<div className="flex items-center justify-between pt-6 border-t border-colorFive/20">
									<div>
										<h3 className="font-bold text-colorFive text-lg lg:text-xl font-monoTwo mb-1">
											{testimonial.name}
										</h3>
										<p className="text-sm lg:text-base text-colorOne/80 font-monoTwo uppercase tracking-wider">
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>

							{/* Hover gradient overlay */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 via-transparent to-colorAccent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
