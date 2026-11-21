import { IconCodeBranch } from "./icons";
import Button from "./button";
import { scrollToSection } from "../utils/scrollToSection";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "Portfolio", href: "#portfolio" },
	{ label: "Contact", href: "#contact" },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
	const handleNavClick = (e, href) => {
		e.preventDefault();
		scrollToSection(href.replace("#", ""));
	};

	return (
		<header className="w-full h-16 bg-colorThree/90 backdrop-blur-md border-b border-colorFive/10 fixed top-0 z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 lg:px-6">
				<div className="flex items-center">
					<a
						href="#intro"
						onClick={(e) => handleNavClick(e, "#intro")}
						className="font-mono text-base font-semibold text-colorOne tracking-tight hover:text-colorAccent transition-colors no-underline"
					>
						<span className="hidden md:inline">Donna Smith</span>
						<span className="md:hidden">{"</DS>"}</span>
					</a>
					<IconCodeBranch className="ml-2 text-sm text-colorOne" />
				</div>

				<nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={(e) => handleNavClick(e, link.href)}
							className="text-colorFive/85 hover:text-colorOne font-sans text-sm font-medium transition-colors"
						>
							{link.label}
						</a>
					))}
					<Button
						text="Free Quote"
						action="contact"
						variant="primary"
						className="!py-2 !px-5 !min-w-0 text-sm"
					/>
				</nav>

				<div className="lg:hidden flex items-center">
					<button
						type="button"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						className="w-11 h-11 inline-flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-transparent border-none p-0 rounded-xl hover:bg-colorOne/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-colorOne/50"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`block w-5 h-0.5 bg-colorOne rounded-full transition-all duration-300 ease-out origin-center ${
								menuOpen ? "translate-y-2 rotate-45" : ""
							}`}
						/>
						<span
							className={`block w-5 h-0.5 bg-colorOne rounded-full transition-all duration-300 ease-out ${
								menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
							}`}
						/>
						<span
							className={`block w-5 h-0.5 bg-colorOne rounded-full transition-all duration-300 ease-out origin-center ${
								menuOpen ? "-translate-y-2 -rotate-45" : ""
							}`}
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
