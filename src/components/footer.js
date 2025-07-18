import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-row w-full justify-start items-center py-4 bg-gradient-to-b from-colorTwo to-colorThree border-t-2 gradient-background border-dotted border-colorFive">
			<p className="text-colorFive text-sm pl-4 z-10">
				© 2025{" "}
				<span className="font-bold hover:animate-wiggle">
					Donna Smith
				</span>{" "}
				Portfolio. All rights reserved.
			</p>
		</div>
	);
};
export default Footer;
