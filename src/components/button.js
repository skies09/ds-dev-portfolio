import { motion } from "framer-motion";

const Button = ({ text, className = "", active = true, action, variant = "primary" }) => {
	const handleClick = (page) => {
		window.location.href = "#" + page;
	};

	const baseClasses = "relative px-8 py-3.5 rounded-xl font-display font-semibold tracking-wider transition-all duration-300 overflow-hidden";
	
	const variantClasses = {
		primary: "bg-colorTwo text-colorFive border-2 border-colorOne/40 hover:border-colorOne/70 hover:bg-colorTwo/90 shadow-neo-outset hover:shadow-neo-inset",
		secondary: "bg-colorTwo text-colorFive border-2 border-colorOne/40 hover:border-colorOne/70 hover:bg-colorTwo/90 shadow-neo-outset hover:shadow-neo-inset",
		neon: "bg-colorTwo text-colorOne border-2 border-colorOne/50 hover:border-colorOne/80 hover:bg-colorTwo/80 shadow-neo-outset hover:shadow-neo-inset relative",
	};

	if (variant === "neon" && active) {
		return (
			<motion.button
				whileHover={{ scale: 1.05, y: -2 }}
				whileTap={{ scale: 0.98 }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={`${baseClasses} bg-colorTwo text-colorOne border-2 border-colorOne/50 hover:border-colorOne/80 hover:bg-colorTwo/80 shadow-neo-outset hover:shadow-neo-inset relative ${className}`}
				onClick={() => handleClick(action)}
				style={{
					boxShadow: "8px 8px 16px rgba(0, 23, 31, 0.8), -8px -8px 16px rgba(0, 82, 135, 0.3), 0 0 20px rgba(0, 168, 232, 0.2), 0 0 10px rgba(138, 0, 196, 0.15)",
				}}
			>
				{/* Subtle animated glow */}
				<span
					className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
					style={{
						background: "linear-gradient(90deg, transparent, rgba(0, 168, 232, 0.2), rgba(138, 0, 196, 0.2), transparent)",
						backgroundSize: "200% 100%",
						animation: "shimmer 4s linear infinite",
						pointerEvents: "none",
						borderRadius: "inherit",
					}}
				/>
				<span className="relative z-10">{text}</span>
			</motion.button>
		);
	}

	return (
		<>
			{active && (
				<motion.button
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.98 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className={`${baseClasses} ${variantClasses[variant]} ${className}`}
					onClick={() => handleClick(action)}
				>
					<span className="relative z-10">{text}</span>
				</motion.button>
			)}
		</>
	);
};

export default Button;