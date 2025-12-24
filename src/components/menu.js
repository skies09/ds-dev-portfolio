import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faComments,
	faEnvelope,
	faGears,
	faHouse,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const mainControls = useAnimation();
	useEffect(() => {
		if (menuOpen) {
			mainControls.start("visible");
		}
	}, [menuOpen, mainControls]);

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "100%" },
	};

	const menuItems = [
		{ icon: faHouse, text: "Home", href: "#intro" },
		{ icon: faUser, text: "About", href: "#about" },
		{ icon: faGears, text: "Skills", href: "#skills" },
		{ icon: faBriefcase, text: "Portfolio", href: "#portfolio" },
		{ icon: faComments, text: "Testimonials", href: "#testimonials" },
		{ icon: faEnvelope, text: "Contact", href: "#contact" },
	];

	return (
		<motion.div
			animate={menuOpen ? "open" : "closed"}
			variants={variants}
			initial="closed"
			transition={{ duration: 1, ease: "easeInOut" }}
			className="w-1/2 md:w-1/5 h-screen bg-colorTwo/40 backdrop-blur-sm fixed top-0 -right-0 flex flex-col items-center justify-center z-40 shadow-neo-outset"
		>
			<div className="flex flex-col items-center justify-center gap-6">
				<div
					className="flex flex-col gap-4"
					style={{ width: "fit-content" }}
				>
					{menuItems.map((item, index) => (
						<a
							key={index}
							href={item.href}
							onClick={() => setMenuOpen(false)}
							className="group flex items-center gap-1 lg:gap-4 p-3 rounded-xl transition-all duration-300 hover:shadow-neo-inset"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div
								style={{
									width: "2rem",
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
								}}
							>
								<FontAwesomeIcon
									icon={item.icon}
									size="lg"
									className={`transition-colors duration-300 ${
										hoveredIndex === index
											? "text-colorOne"
											: "text-colorFive"
									}`}
								/>
							</div>
							<span
								className={`font-display font-medium transition-colors duration-300 text-xl whitespace-nowrap ${
									hoveredIndex === index
										? "text-colorOne"
										: "text-colorFive"
								}`}
							>
								{item.text}
							</span>
						</a>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Menu;
