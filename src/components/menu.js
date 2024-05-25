import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faEnvelope,
	faHouse,
	faUser,
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
			transition={{ duration: 1, ease: "easeInOut" }}
			className="w-1/2 md:w-1/5 h-screen bg-colorTwo fixed top-0 -right-4 z-20 flex flex-col items-center justify-center"
		>
			<ul className="flex items-start justify-center flex-col">
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a href="#intro">
						<FontAwesomeIcon
							icon={faHouse}
							size="xl"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="ml-3 text-colorFive text-lg hover:text-colorOne">
							Home
						</span>
					</a>
				</li>
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a href="#about">
						<FontAwesomeIcon
							icon={faUser}
							size="xl"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="ml-4 text-colorFive text-lg hover:text-colorOne">
							About
						</span>
					</a>
				</li>
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">
						<FontAwesomeIcon
							icon={faBriefcase}
							size="xl"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="ml-3 text-colorFive text-lg hover:text-colorOne">
							Portfolio
						</span>
					</a>
				</li>

				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a href="#contact">
						<FontAwesomeIcon
							icon={faEnvelope}
							size="xl"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="ml-3 text-colorFive text-lg hover:text-colorOne">
							Contact
						</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
}
