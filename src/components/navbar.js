const Navbar =({ menuOpen, setMenuOpen }) => {
	return (
		<div className="w-full h-16 bg-colorThree fixed top-0 z-50">
			<div className="flex justify-between items-center">
				<div className="flex items-center justify-center">
					<a
						href="#intro"
						className="hidden md:flex font-sans text-lg font-semibold text-[#2cc9ff] ml-6 tracking-tight hover:text-colorFour mt-2"
					>
						Donna Smith
					</a>
					<a
						href="#intro"
						className="block md:hidden font-sans text-lg font-semibold text-[#2cc9ff] ml-3 items-center justify-center hover:text-colorFour mt-2"
					>
						{"</DS>"}
					</a>
				</div>
				<div className="mr-4 mt-2 w-8 h-12 flex items-center">
					<div
						className="w-8 h-6 flex flex-col justify-between cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-1000 ease-in-out origin-center ${
								menuOpen
									? "transform rotate-45 translate-y-2.5"
									: ""
							}`}
						></span>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-1000 ease-in-out ${
								menuOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-1000 ease-in-out origin-center ${
								menuOpen
									? "transform -rotate-45 -translate-y-2.5"
									: ""
							}`}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
