import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

import Intro from "./pages/intro";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
				<Intro />
				<About />
				<Contact />
			</div>
		</>
	);
}
