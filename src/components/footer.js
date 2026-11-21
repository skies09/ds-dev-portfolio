const Footer = () => {
	return (
		<footer className="flex flex-row w-full justify-start items-center py-4 border-t-2 gradient-background-footer border-dotted border-colorFive">
			<p className="text-colorFive text-sm pl-4 z-10">
				© {new Date().getFullYear()}{" "}
				<span className="font-bold">Donna Smith</span> Portfolio. All
				rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
