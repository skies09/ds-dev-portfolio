import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faEnvelope,
	faHouse,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
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
			className="w-1/2 md:w-1/5 h-screen bg-colorTwo fixed top-0 -right-4 flex flex-col items-center justify-center z-40"
		>
			<ul className="flex items-start justify-center flex-col">
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#intro"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faHouse}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-display font-medium ml-3 text-colorFive text-xl hover:text-colorOne">
							Home
						</span>
					</a>
				</li>
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#about"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faUser}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-display font-medium ml-4 text-colorFive text-xl hover:text-colorOne">
							About
						</span>
					</a>
				</li>
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#portfolio"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faBriefcase}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-display font-medium ml-3 text-colorFive text-xl hover:text-colorOne">
							Portfolio
						</span>
					</a>
				</li>

				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#contact"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-display font-medium ml-3 text-colorFive text-xl hover:text-colorOne">
							Contact
						</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
};

export default Menu;
