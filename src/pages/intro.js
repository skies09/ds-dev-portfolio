import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import Button from "../components/button";

export default function Intro() {
	const typingString = [
		"I'm a Javascript developer ",
		"I'm a Python developer ",
		"I'm a full stack web developer ",
	];

	return (
		<div
			className="w-screen overflow-hidden h-[90vh] md:h-screen bg-colorThree mt-8"
			id="intro"
		>
			<motion.div
				className="relative flex flex-col justify-center items-start ml-4 lg:ml-12  pt-56 w-full z-30"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<motion.p
					className="text-colorFive text-2xl md:text-5xl font-mono"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					Hey, I'm{" "}
					<span className="font-mono text-3xl md:text-6xl m-1 text-colorOne">
						Donna Smith
					</span>
				</motion.p>
				<div className="my-4">
					<ReactTypingEffect
						className="text-lg md:text-3xl font-monoTwo text-colorFive"
						text={typingString}
						speed={60}
						eraseSpeed={50}
						eraseDelay={1500}
					/>
				</div>
				<div className="w-4/5 md:w-3/5 lg:w-1/3">
					<motion.div
						className="mb-6 border-t border-dotted border-colorFive"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 2 }}
						style={{ height: "1px" }}
					>
						<div className="my-6 flex flex-row">
							<div className="mx-1">
								<Button
									text="Portfolio"
									className={
										"px-4 py-2 text-colorFive border border-colorFive rounded-xl tracking-wider"
									}
									active={true}
									action={"portfolio"}
								/>
							</div>
							<div className="mx-4">
								<Button
									text="Contact"
									className={
										"px-4 py-2 bg-colorFour text-colorFive border border-colorFour rounded-xl tracking-wider"
									}
									active={true}
									action={"contact"}
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
			<div className="items-end justify-end w-full h-auto hidden md:flex -mt-20">
				<img
					className="w-3/4 h-auto -skew-y-6 opacity-25"
					src="../../assets/Images/codeImage.png"
					alt="Project"
				/>
			</div>
		</div>
	);
}
