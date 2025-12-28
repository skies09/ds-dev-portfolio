import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
	text,
	className = "",
	active = true,
	action,
	variant = "primary",
	icon,
}) => {
	const handleClick = (page) => {
		window.location.href = "#" + page;
	};

	const baseClasses =
		"relative py-2 lg:py-4 pl-6 lg:pl-8 pr-12 rounded-full font-display font-semibold tracking-wide transition-all duration-300 overflow-visible flex items-center justify-center w-auto lg:min-w-[180px]";

	if (!active) {
		return null;
	}

	if (variant === "primary") {
		return (
			<motion.button
				whileHover={{ scale: 1.03, y: -2 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={`${baseClasses} bg-colorTwo/80 backdrop-blur-sm text-colorFive border-2 border-colorFour/40 hover:border-colorFour/70 ${className}`}
				onClick={() => handleClick(action)}
				style={{
					boxShadow:
						"0 4px 15px rgba(0, 23, 31, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.05)",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.boxShadow =
						"0 6px 20px rgba(0, 23, 31, 0.4), inset 0 1px 0 rgba(240, 248, 255, 0.1)";
					e.currentTarget.style.backgroundColor =
						"rgba(0, 52, 89, 0.9)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.boxShadow =
						"0 4px 15px rgba(0, 23, 31, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.05)";
					e.currentTarget.style.backgroundColor =
						"rgba(0, 52, 89, 0.8)";
				}}
			>
				<span className="relative z-10">{text}</span>
				{icon && (
					<div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-colorFour/60 flex items-center justify-center border-2 border-colorOne/40">
						<FontAwesomeIcon
							icon={icon}
							className="relative z-10 text-sm lg:text-lg"
						/>
					</div>
				)}
			</motion.button>
		);
	}

	if (variant === "secondary") {
		return (
			<motion.button
				whileHover={{ scale: 1.03, y: -2 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={`${baseClasses} bg-gradient-to-br from-colorTwo via-colorFour to-colorTwo text-colorFive ${className}`}
				onClick={() => handleClick(action)}
				style={{
					boxShadow:
						"0 4px 15px rgba(0, 52, 89, 0.4), 0 2px 8px rgba(0, 122, 167, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.boxShadow =
						"0 6px 20px rgba(0, 52, 89, 0.5), 0 4px 12px rgba(0, 122, 167, 0.4), inset 0 1px 0 rgba(240, 248, 255, 0.15)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.boxShadow =
						"0 4px 15px rgba(0, 52, 89, 0.4), 0 2px 8px rgba(0, 122, 167, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)";
				}}
			>
				<span className="relative z-10">{text}</span>
				{icon && (
					<div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-[3.5rem] lg:h-[3.5rem] rounded-full bg-colorTwo/60 flex items-center justify-center border-2 border-colorOne/40">
						<FontAwesomeIcon
							icon={icon}
							className="relative z-10 text-sm lg:text-lg"
						/>
					</div>
				)}
			</motion.button>
		);
	}

	return null;
};

export default Button;
