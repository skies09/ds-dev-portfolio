import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChat } from "./icons";
import Button from "./button";

const FloatingCTA = () => {
	const [visible, setVisible] = useState(false);
	const [onContact, setOnContact] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 400);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const contactEl = document.getElementById("contact");
		if (!contactEl) return;

		const observer = new IntersectionObserver(
			([entry]) => setOnContact(entry.isIntersecting),
			{ threshold: 0.15 },
		);

		observer.observe(contactEl);
		return () => observer.disconnect();
	}, []);

	return (
		<AnimatePresence>
			{visible && !onContact && (
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.9 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 20, scale: 0.9 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-6 right-6 z-50 hidden md:block"
				>
					<Button
						text="Get a Quote"
						active={true}
						action="contact"
						variant="primary"
						icon={IconChat}
						className="text-sm !min-w-0"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default FloatingCTA;
