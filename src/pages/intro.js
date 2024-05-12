import ReactTypingEffect from "react-typing-effect";
import Button from "../components/button";

export default function Intro() {
	const typingString = [
		"I'm a Javascript developer ",
		"I'm a Python developer ",
		"I'm a full stack web developer ",
	];

	const handleClick = () => {
		console.log("CLICK");
	};

	return (
		<div className="h-screen bg-colorThree mt-8">
			<div className="relative flex flex-col justify-center items-start ml-4 pt-56 w-full ">
				<p className="text-colorFive text-2xl md:text-5xl font-mono">
					Hey, I'm{" "}
					<span className="font-mono text-3xl md:text-6xl m-1 text-colorOne">
						Donna Smith
					</span>
				</p>
				<div className="my-4">
					<ReactTypingEffect
						className="text-lg md:text-3xl font-monoTwo text-colorFive"
						text={typingString}
						speed={60}
						eraseSpeed={50}
						eraseDelay={1500}
					/>
				</div>
				<div className="mb-6 border-t border-dotted border-colorFive w-4/5 md:w-3/5 lg:w-1/2">
					<div className="my-6 flex flex-row">
					<div className="mx-1">
						<Button
							text="Message Me"
							className={'px-4 py-2 text-colorFive border-2 border-colorFive rounded-3xl'}
							active={true}
							action={handleClick}
						/>
						</div>
						<div className="mx-4">
						<Button
						text="Portfolio"
						className={'px-4 py-2 bg-colorFour text-colorFive border-2 border-colorFive rounded-3xl'}
						active={true}
						action={handleClick}
					/>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
}
