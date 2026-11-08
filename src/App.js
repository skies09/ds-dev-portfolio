import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import FloatingCTA from "./components/floatingCTA";

import Intro from "./pages/intro";
import About from "./pages/about";
import Skills from "./pages/skills";
import Services from "./pages/services";
import Process from "./pages/process";
import Portfolio from "./pages/portfolio";
import Testimonials from "./pages/testimonials";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="relative">
			<div className="site-grain" aria-hidden="true" />
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<FloatingCTA />
			<main className="relative w-full -mt-8">
				<Intro />
				<About />
				<Skills />
				<Services />
				<Process />
				<Portfolio />
				<Testimonials />
				<FAQ />
				<Contact />
			</main>
		</div>
	);
}
