import { useEffect, useRef } from "react";
import {
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";

import Button from "../components/button";

export default function About() {
	const containerRef = useRef(null);
    const mainControls = useAnimation()
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	});

	const leftValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

	const rightValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
	const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        if (isInView) {
          mainControls.start("visible")
        }
      }, [isInView])
    
	return (
		<div className="w-screen overflow-hidden h-screen bg-colorTwo" ref={containerRef} id='about'>
			<h1 className="text-3xl font-bold underline flex justify-center text-center">
				About
			</h1>
			<div className="mt-20 flex flex-row justify-center items-center w-4/5 mx-auto">
				<motion.div
					className="bg-colorFour w-1/2 flex justify-center items-center h-96"
					style={{ translateX: leftValue }}
				>
					About Text section
				</motion.div>
				<motion.div
					className="bg-colorFour w-1/2 flex justify-center items-center h-96"
					style={{ translateX: rightValue }}
				>
					About Image section
				</motion.div>
			</div>
		</div>
	);
}
