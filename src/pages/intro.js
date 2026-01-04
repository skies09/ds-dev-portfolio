import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import { faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button";
import ShinyText from "../components/ShinyText/shinyText";

const Intro = () => {
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
				className="relative flex flex-col justify-center items-start ml-4 lg:ml-12  pt-56 lg:pt-40 w-full z-30"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<motion.p
					className="text-colorFive text-2xl md:text-4xl font-mono"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					Hey, I'm{" "}
					<ShinyText
						text="Donna Smith"
						disabled={false}
						speed={3}
						className="font-display font-bold text-3xl md:text-5xl m-1 text-[#2cc9ff]"
					/>
				</motion.p>
				<motion.p
					className="text-colorFive text-sm md:text-lg font-mono my-2 lg:my-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					Need a website or app? Something broken?{" "}
					<span className="hidden lg:inline">Vibe-coded chaos?</span>
					<br></br>If it's supposed to work and doesn't—contact me.
				</motion.p>
				<div className="my-4">
					<ReactTypingEffect
						className="text-lg md:text-2xl font-monoTwo text-colorFive"
						text={typingString}
						speed={60}
						eraseSpeed={50}
						eraseDelay={1500}
					/>
				</div>

				<div className="w-4/5 md:w-3/5 lg:w-auto">
					<motion.div
						className="mb-6 border-t border-dotted border-colorFive"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 2 }}
						style={{ height: "1px" }}
					></motion.div>

					<div className="my-6 flex flex-row gap-2 lg:gap-4">
						<Button
							text="Contact"
							active={true}
							action={"contact"}
							variant="secondary"
							icon={faEnvelope}
							className="text-sm lg:text-base py-1.5 lg:py-4 pl-6 lg:pl-4 pr-12"
						/>
						<Button
							text="Portfolio"
							active={true}
							action={"portfolio"}
							variant="secondary"
							icon={faBriefcase}
							className="text-sm lg:text-base py-1.5 lg:py-4 pl-6 lg:pl-4 pr-12"
						/>
					</div>
				</div>
			</motion.div>
			<div className="items-end justify-end w-full h-auto hidden lg:flex mt-0 lg:-mt-40 2xl:-mt-80 ml-16">
				<img
					className="w-3/4 h-auto -skew-y-6 opacity-25"
					src="../../assets/Images/codeImage.png"
					alt="Project"
				/>
			</div>
		</div>
	);
};
export default Intro;
