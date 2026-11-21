import { motion } from "framer-motion";

const SectionHeader = ({
	eyebrow,
	title,
	subtitle,
	className = "",
	align = "center",
}) => {
	const alignClass =
		align === "left" ? "text-left items-start" : "text-center items-center";

	return (
		<motion.div
			className={`flex flex-col ${alignClass} mb-10 lg:mb-12 ${className}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
		>
			{eyebrow && (
				<p className="text-colorOne font-sans text-sm font-semibold tracking-[0.12em] uppercase mb-4">
					{eyebrow}
				</p>
			)}
			<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-colorFive font-display tracking-[-0.03em] leading-[1.1]">
				{title}
			</h2>
			<div
				className={`mt-5 h-px w-12 bg-colorOne/80 ${
					align === "center" ? "mx-auto" : ""
				}`}
				aria-hidden="true"
			/>
			{subtitle && (
				<p
					className={`mt-5 text-colorFive/90 font-sans text-lg max-w-xl leading-relaxed ${
						align === "center" ? "mx-auto" : ""
					}`}
				>
					{subtitle}
				</p>
			)}
		</motion.div>
	);
};

export default SectionHeader;
