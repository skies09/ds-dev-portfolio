import { motion } from "framer-motion";

const Button = ({ text, className = "", active = true, action, variant = "primary" }) => {
	const handleClick = (page) => {
		window.location.href = "#" + page;
	};

	const baseClasses = "relative px-12 py-4 rounded-xl font-display font-semibold tracking-wide transition-all duration-300 overflow-hidden";

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
					boxShadow: "0 4px 15px rgba(0, 23, 31, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.05)",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 23, 31, 0.4), inset 0 1px 0 rgba(240, 248, 255, 0.1)";
					e.currentTarget.style.backgroundColor = "rgba(0, 52, 89, 0.9)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 23, 31, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.05)";
					e.currentTarget.style.backgroundColor = "rgba(0, 52, 89, 0.8)";
				}}
			>
				<span className="relative z-10">{text}</span>
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
					boxShadow: "0 4px 15px rgba(0, 52, 89, 0.4), 0 2px 8px rgba(0, 122, 167, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 52, 89, 0.5), 0 4px 12px rgba(0, 122, 167, 0.4), inset 0 1px 0 rgba(240, 248, 255, 0.15)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 52, 89, 0.4), 0 2px 8px rgba(0, 122, 167, 0.3), inset 0 1px 0 rgba(240, 248, 255, 0.1)";
				}}
			>
				<span className="relative z-10">{text}</span>
			</motion.button>
		);
	}

	return null;
};

export default Button;