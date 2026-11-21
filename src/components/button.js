import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

const Button = ({
	text,
	className = "",
	action,
	variant = "primary",
	icon: Icon,
	type = "button",
	disabled = false,
	onClick,
}) => {
	const baseClasses =
		"group relative py-3 px-5 lg:px-7 rounded-xl font-sans font-semibold text-base tracking-normal transition-all duration-200 inline-flex items-center justify-center gap-2 w-auto lg:min-w-[168px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-colorOne/50 focus-visible:ring-offset-2 focus-visible:ring-offset-colorThree disabled:opacity-50 disabled:pointer-events-none";

	const variants = {
		primary:
			"text-colorThree bg-colorOne border border-colorOne hover:bg-colorAccent hover:border-colorAccent shadow-[0_8px_24px_rgba(46,230,255,0.22)] hover:shadow-[0_10px_28px_rgba(46,230,255,0.3)]",
		secondary:
			"text-colorFive border border-colorFive/20 bg-transparent hover:border-colorOne/40 hover:bg-colorOne/[0.06]",
	};

	const handleClick = (event) => {
		if (disabled) return;
		if (action) scrollToSection(action);
		onClick?.(event);
	};

	return (
		<motion.button
			type={type}
			disabled={disabled}
			whileHover={disabled ? undefined : { y: -2 }}
			whileTap={disabled ? undefined : { scale: 0.98 }}
			transition={{ duration: 0.18, ease: "easeOut" }}
			className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
			onClick={handleClick}
		>
			<span className="relative z-10">{text}</span>
			{Icon && (
				<Icon className="relative z-10 shrink-0 text-sm lg:text-base transition-transform duration-200 group-hover:translate-x-0.5" />
			)}
		</motion.button>
	);
};

export default Button;
