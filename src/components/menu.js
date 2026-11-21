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
import Button from "./button";
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
		if (!menuOpen) return undefined;

		document.body.style.overflow = "hidden";
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
						className="fixed top-16 inset-x-0 bottom-0 z-[55] bg-colorThree/70 backdrop-blur-sm cursor-default border-none p-0 lg:hidden"
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
						transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
						className="fixed top-16 right-0 z-[60] w-[min(88vw,20rem)] h-[calc(100dvh-4rem)] bg-colorTwo border-l border-colorFive/10 flex flex-col lg:hidden shadow-[-12px_0_40px_rgba(0,0,0,0.35)]"
					>
						<nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
							<ul className="flex flex-col gap-1">
								{menuItems.map((item, index) => {
									const ItemIcon = item.icon;

									return (
										<motion.li
											key={item.href}
											initial={{ opacity: 0, x: 12 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.25,
												delay: 0.04 + index * 0.03,
												ease: "easeOut",
											}}
										>
											<a
												href={item.href}
												onClick={(e) =>
													handleMenuClick(e, item.href)
												}
												className="group flex items-center gap-3 min-h-[48px] px-3 rounded-xl text-colorFive hover:bg-colorOne/10 active:bg-colorOne/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-colorOne/50"
											>
												<span className="w-8 h-8 rounded-lg bg-colorThree/80 border border-colorFive/10 inline-flex items-center justify-center shrink-0 group-hover:border-colorOne/30 transition-colors">
													<ItemIcon className="w-3.5 h-3.5 text-colorOne" />
												</span>
												<span className="font-sans font-medium text-base">
													{item.text}
												</span>
											</a>
										</motion.li>
									);
								})}
							</ul>
						</nav>

						<div className="px-4 py-4 border-t border-colorFive/10 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
							<Button
								text="Get a Free Quote"
								variant="primary"
								className="!min-w-0 w-full text-sm"
								onClick={() => {
									setMenuOpen(false);
									requestAnimationFrame(() =>
										scrollToSection("contact"),
									);
								}}
							/>
						</div>
					</motion.aside>
				</>
			)}
		</AnimatePresence>
	);
};

export default Menu;
