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
			className={`flex flex-col ${alignClass} mb-10 lg:mb-14 ${className}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
		>
			{eyebrow && (
				<p className="text-colorOne font-monoTwo text-xs lg:text-sm tracking-[0.22em] uppercase mb-3">
					<span className="text-colorOne/50 mr-1">{"//"}</span>
					{eyebrow}
				</p>
			)}
			<h2 className="text-3xl lg:text-4xl font-bold text-colorFive font-display leading-tight">
				{title}
			</h2>
			<div
				className={`mt-4 h-px w-16 bg-gradient-to-r from-colorOne via-colorAccent/80 to-transparent ${
					align === "center" ? "mx-auto" : ""
				}`}
				aria-hidden="true"
			/>
			{subtitle && (
				<p
					className={`mt-5 text-colorFive/70 font-sans text-sm lg:text-base max-w-2xl leading-relaxed ${
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
