import Intro from "./pages/intro";
import About from "./pages/about";

import Contact from "./pages/contact";

export default function App() {
	return (
		<div className="relative w-full h-screen snap-mandatory snap-y">
			<Intro />
			<About />
			<Contact />
		</div>
	);
}
