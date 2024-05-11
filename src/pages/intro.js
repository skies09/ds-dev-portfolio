import Button from "../components/button";

export default function Intro() {

    const handleClick = () => {
		console.log('CLICK')
	};

	return (
		<div className="h-screen bg-colorThree">
			<h1 className="text-3xl font-bold underline flex justify-center text-center">
				DS DEV PORTFOLIO
			</h1>
            <Button
            text="Message Me"
            active={true}
            action={handleClick}
        />
		</div>
	);
}
