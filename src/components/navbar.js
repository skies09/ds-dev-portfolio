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
		<header className="w-full h-16 bg-colorThree/95 backdrop-blur-sm border-b border-dotted border-colorFive/30 fixed top-0 z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 lg:px-6">
				<div className="flex items-center">
					<a
						href="#intro"
						onClick={(e) => handleNavClick(e, "#intro")}
						className="font-monoTwo text-lg font-semibold text-colorOne tracking-tight hover:text-colorFour transition-colors"
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
							className="text-colorFive/80 hover:text-colorOne font-monoTwo text-sm transition-colors"
						>
							{link.label}
						</a>
					))}
					<Button
						text="Get a Quote"
						active={true}
						action="contact"
						variant="primary"
						className="!py-2 !px-5 !min-w-0 text-sm"
					/>
				</nav>

				<div className="lg:hidden w-8 h-12 flex items-center">
					<button
						type="button"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						className="w-8 h-6 flex flex-col justify-between cursor-pointer bg-transparent border-none p-0"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-300 ease-in-out origin-center ${
								menuOpen
									? "transform rotate-45 translate-y-2.5"
									: ""
							}`}
						/>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-300 ease-in-out ${
								menuOpen
									? "opacity-0 scale-y-0 h-0"
									: "opacity-100 scale-y-100 h-1"
							}`}
						/>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-300 ease-in-out origin-center ${
								menuOpen
									? "transform -rotate-45 -translate-y-2.5"
									: ""
							}`}
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
