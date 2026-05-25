import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
	text,
	className = "",
	active = true,
	action,
	variant = "primary",
	icon,
	type = "button",
	disabled = false,
	onClick,
}) => {
	const handleClick = (page) => {
		const element = document.getElementById(page);
		if (element) {
			const navbarHeight = 64; // Height of fixed navbar (h-16 = 64px)
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - navbarHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		} else {
			// Fallback to hash navigation if element not found
			window.location.href = "#" + page;
		}
	};

	const baseClasses =
		"relative py-3 lg:py-4 px-5 lg:px-7 rounded-2xl font-display font-semibold tracking-wide transition-all duration-300 overflow-visible inline-flex items-center justify-center gap-2 lg:gap-2.5 w-auto lg:min-w-[180px]";

	const handleButtonClick = action
		? () => handleClick(action)
		: onClick;

	if (!active) {
		return null;
	}

	if (variant === "primary") {
		return (
			<motion.button
				type={type}
				disabled={disabled}
				whileHover={{ scale: 1.03, y: -2 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={`${baseClasses} bg-colorTwo/80 backdrop-blur-sm text-colorFive  hover:border-colorFour/70 ${className}`}
				onClick={handleButtonClick}
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
					<FontAwesomeIcon
						icon={icon}
						className="relative z-10 shrink-0 text-sm lg:text-base"
					/>
				)}
			</motion.button>
		);
	}

	if (variant === "secondary") {
		return (
			<motion.button
				type={type}
				disabled={disabled}
				whileHover={{ scale: 1.03, y: -2 }}
				whileTap={{ scale: 0.97 }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={`${baseClasses}  text-colorFive border-2 border-colorFour/40 ${className}`}
				onClick={handleButtonClick}
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
					<FontAwesomeIcon
						icon={icon}
						className="relative z-10 shrink-0 text-sm lg:text-base"
					/>
				)}
			</motion.button>
		);
	}

	return null;
};

export default Button;
