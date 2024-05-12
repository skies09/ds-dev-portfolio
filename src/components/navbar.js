export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<div className="w-full h-12 bg-colorFive text-colorOne fixed top-0 z-30">
			<div className="flex justify-between items-center">
				<div className="flex items-center justify-center">
					<a
						href="#intro"
						className="hidden md:flex font-sans text-lg font-semibold text-colorOne ml-2"
					>
						Donna Smith
					</a>
					<a
						href="#intro"
						className="block md:hidden font-sans text-lg font-semibold text-colorOne ml-2 items-center justify-center"
					>
						{"</DS>"}
					</a>
				</div>
				<div className="mr-3 w-8 h-12 flex items-center">
					<div
						className={`w-full flex flex-col items-center justify-between ${
							menuOpen ? "relative -top-1" : ""
						} `}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`w-3/4 h-1 bg-colorOne rounded-3xl my-1 transition  ${
								menuOpen
									? "-rotate-45 relative top-4 ease-out duration-2000"
									: "ease-linear duration-500"
							}`}
						></span>
						<span
							className={`w-3/4 h-1 bg-colorOne rounded-3xl my-1 transition duration-100 ${
								menuOpen ? "opacity-0" : "opacity-100"
							}`}
						></span>
						<span
							className={`w-3/4 h-1 bg-colorOne rounded-3xl my-1 transition  ${
								menuOpen
									? "rotate-45 relative -top-2 ease-out duration-2000"
									: "ease-linear duration-500"
							}`}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
}
