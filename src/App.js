import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

import Intro from "./pages/intro";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Testimonials from "./pages/testimonials";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
				<Intro />
				<About />
				<Skills />
				<Services />
				<Portfolio />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}
