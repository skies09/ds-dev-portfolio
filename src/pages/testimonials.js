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
		<section id="testimonials" className="py-16 bg-colorThree">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-6 text-colorFive">
					Testimonials
				</h2>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.5, delay: index * 0.2 }}
							className="bg-colorFive rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
						>
							<FontAwesomeIcon
								icon={faQuoteLeft}
								className="text-colorTwo mb-2 text-2xl"
							/>
							<p className="text-colorThree font-serif text-lg italic">
								"{testimonial.quote}"
							</p>
							<FontAwesomeIcon
								icon={faQuoteRight}
								className="text-colorTwo text-2xl ml-auto block"
							/>
							<div className="flex items-center">
								<div className="flex text-colorOne mr-2">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<FontAwesomeIcon
												key={i}
												icon={faStar}
											/>
										)
									)}
								</div>
								<div>
									<h3 className="font-semibold text-colorThree font-display">
										{testimonial.name}
									</h3>
									<p className="text-sm text-colorFour font-serif">
										{testimonial.role}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
