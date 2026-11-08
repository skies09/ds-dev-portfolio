import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	IconBriefcase,
	IconChat,
	IconGears,
	IconHome,
	IconMail,
	IconProcess,
	IconQuestion,
	IconTools,
	IconUser,
} from "./icons";
import { scrollToSection } from "../utils/scrollToSection";

const menuItems = [
	{ icon: IconHome, text: "Home", href: "#intro" },
	{ icon: IconUser, text: "About", href: "#about" },
	{ icon: IconGears, text: "Skills", href: "#skills" },
	{ icon: IconTools, text: "Services", href: "#services" },
	{ icon: IconProcess, text: "Process", href: "#process" },
	{ icon: IconBriefcase, text: "Portfolio", href: "#portfolio" },
	{ icon: IconChat, text: "Testimonials", href: "#testimonials" },
	{ icon: IconQuestion, text: "FAQ", href: "#faq" },
	{ icon: IconMail, text: "Contact", href: "#contact" },
];

const Menu = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	useEffect(() => {
		if (!menuOpen) return;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [menuOpen, setMenuOpen]);

	const handleMenuClick = (e, href) => {
		e.preventDefault();
		e.stopPropagation();
		setMenuOpen(false);
		requestAnimationFrame(() => {
			scrollToSection(href.replace("#", ""));
		});
	};

	return (
		<AnimatePresence>
			{menuOpen && (
				<>
					<motion.button
						type="button"
						aria-label="Close menu"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-[55] bg-black/50 cursor-default border-none p-0 lg:hidden"
						onClick={() => setMenuOpen(false)}
					/>

					<motion.aside
						id="mobile-menu"
						role="dialog"
						aria-modal="true"
						aria-label="Site navigation"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="fixed top-16 right-0 z-[60] w-[min(85vw,20rem)] h-[calc(100dvh-4rem)] bg-colorTwo border-l border-colorOne/20 shadow-neo-outset flex flex-col lg:hidden"
					>
						<nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-2">
							<ul className="flex flex-col">
								{menuItems.map((item) => {
									const ItemIcon = item.icon;

									return (
										<li
											key={item.href}
											className="border-b border-colorOne/10 last:border-b-0"
										>
											<a
												href={item.href}
												onClick={(e) =>
													handleMenuClick(e, item.href)
												}
												className="relative flex items-center gap-3 py-3 px-3 mx-1 rounded-xl transition-all duration-200 hover:bg-colorOne/15 hover:shadow-neo-inset hover:[&_svg]:text-colorOne hover:[&_span]:text-colorOne active:bg-colorOne/20 active:[&_svg]:text-colorOne active:[&_span]:text-colorOne active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-colorOne/50"
											>
												<ItemIcon className="w-4 h-4 shrink-0 text-colorFive/70 transition-colors duration-200 pointer-events-none" />
												<span className="font-monoTwo font-medium text-sm text-colorFive/90 transition-colors duration-200 pointer-events-none">
													{item.text}
												</span>
											</a>
										</li>
									);
								})}
							</ul>
						</nav>
					</motion.aside>
				</>
			)}
		</AnimatePresence>
	);
};

export default Menu;
