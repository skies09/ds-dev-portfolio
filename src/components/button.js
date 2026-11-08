import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

const Button = ({
	text,
	className = "",
	active = true,
	action,
	variant = "primary",
	icon: Icon,
	type = "button",
	disabled = false,
	onClick,
}) => {
	const baseClasses =
		"group relative py-3 lg:py-3.5 px-5 lg:px-7 rounded-2xl font-display font-semibold tracking-wide transition-all duration-300 inline-flex items-center justify-center gap-2 lg:gap-2.5 w-auto lg:min-w-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-colorOne/45 focus-visible:ring-offset-2 focus-visible:ring-offset-colorThree disabled:opacity-50 disabled:pointer-events-none";

	const variants = {
		primary:
			"text-colorFive border border-colorFour/60 bg-colorFour hover:bg-[#1A9ABF] hover:border-colorOne/50 shadow-[0_6px_18px_rgba(6,16,28,0.45)] hover:shadow-[0_8px_22px_rgba(19,135,168,0.28)]",
		secondary:
			"text-colorFive border border-colorFive/25 bg-colorTwo/70 hover:border-colorOne/45 hover:bg-colorTwo shadow-[0_4px_14px_rgba(6,16,28,0.3)]",
	};

	const handleButtonClick = action
		? () => scrollToSection(action)
		: onClick;

	if (!active) {
		return null;
	}

	return (
		<motion.button
			type={type}
			disabled={disabled}
			whileHover={disabled ? undefined : { y: -2 }}
			whileTap={disabled ? undefined : { scale: 0.98 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
			className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
			onClick={handleButtonClick}
		>
			<span className="relative z-10">{text}</span>
			{Icon && (
				<Icon className="relative z-10 shrink-0 text-sm lg:text-base transition-transform duration-300 group-hover:translate-x-0.5" />
			)}
		</motion.button>
	);
};

export default Button;
