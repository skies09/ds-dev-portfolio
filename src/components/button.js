import { motion } from "framer-motion";

export default function Button({ text, className, active = true, action }) {
	return (
		<>
			{active && (
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{
						scale: 1.1,
						backgroundColor: "#003459",
						color: "#F9F9F9",
						border: "solid #007EA7 2px",
					}}
					transition={{ bounceDamping: 10, bounceStiffness: 600 }}
					className={className}
					onClick={action}
				>
					{text}
				</motion.button>
			)}
		</>
	);
}
