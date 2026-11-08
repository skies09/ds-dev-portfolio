import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "../components/icons";
import SectionHeader from "../components/sectionHeader";
import { faqs } from "../portfolioData";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<section id="faq" className="relative bg-colorThree py-12 lg:py-16 section-wash">
			<div className="container max-w-3xl mx-auto px-4">
				<SectionHeader
					eyebrow="FAQ"
					title="Frequently Asked Questions"
					subtitle="Common questions from clients — answered upfront so you can hire with confidence."
					className="mb-10"
				/>

				<div className="flex flex-col gap-3">
					{faqs.map((faq, index) => {
						const panelId = `faq-panel-${index}`;
						const buttonId = `faq-button-${index}`;
						const isOpen = openIndex === index;

						return (
							<motion.div
								key={faq.question}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								className="bg-colorTwo/60 rounded-xl border border-colorOne/20 overflow-hidden"
							>
								<button
									type="button"
									id={buttonId}
									className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
									onClick={() =>
										setOpenIndex(isOpen ? null : index)
									}
									aria-expanded={isOpen}
									aria-controls={panelId}
								>
									<span className="text-colorFive font-display font-semibold text-base lg:text-lg pr-4">
										{faq.question}
									</span>
									<IconChevronDown
										className={`text-colorOne shrink-0 w-5 h-5 transition-transform duration-300 ${
											isOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								<AnimatePresence>
									{isOpen && (
										<motion.div
											id={panelId}
											role="region"
											aria-labelledby={buttonId}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden"
										>
											<p className="px-5 pb-5 text-colorFive/80 font-sans text-sm lg:text-base leading-relaxed">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
