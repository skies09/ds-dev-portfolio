import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faQuoteLeft,
	faQuoteRight,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { testimonials } from "../portfolioData";

const Testimonials = () => {
	return (
		<section id="testimonials" className="lg:pb-12 bg-colorThree">
			<div className="container max-w-6xl mx-auto px-4">
				<motion.h2
					className="text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-10 text-colorFive font-display"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					Testimonials
				</motion.h2>

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
								<FontAwesomeIcon
									icon={faQuoteRight}
									className="text-colorOne text-7xl lg:text-8xl"
								/>
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
												<FontAwesomeIcon
													icon={faStar}
													className="text-colorOne text-lg lg:text-xl"
													style={{
														filter: "drop-shadow(0 0 6px rgba(0, 168, 232, 0.8))",
													}}
												/>
											</motion.div>
										)
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
										<h3 className="font-bold text-colorFive text-lg lg:text-xl font-display mb-1">
											{testimonial.name}
										</h3>
										<p className="text-sm lg:text-base text-colorOne/80 font-sans uppercase tracking-wider">
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>

							{/* Hover gradient overlay */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 via-transparent to-colorSix/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
