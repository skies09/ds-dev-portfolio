import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faEnvelope,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

// <li onClick={()=>setMenuOpen(false)}>
// <a href="#skills"><FontAwesomeIcon icon={faGears} size="xs" /><span>Skills</span></a>
// </li>
// <li onClick={()=>setMenuOpen(false)}>
// <a href="#portfolio"><FontAwesomeIcon icon={faBriefcase} size="xs" /><span>Portfolio</span></a>
// </li>
export default function Menu({ menuOpen, setMenuOpen }) {
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

	return (
		<motion.div
			animate={menuOpen ? "open" : "closed"}
			variants={variants}
			initial="closed"
			transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
			className="w-1/3 md:w-1/5 h-screen bg-colorOne fixed top-0 -right-4 z-20 flex flex-col items-center justify-center"
		>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">
						<FontAwesomeIcon icon={faHouse} size="xs" />
						<span>Home</span>
					</a>
				</li>

				<li onClick={() => setMenuOpen(false)}>
					<a href="#contact">
						<FontAwesomeIcon icon={faEnvelope} size="xs" />
						<span>Contact</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
}
