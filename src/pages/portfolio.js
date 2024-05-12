import { useEffect, useRef } from "react";
import {
	delay,
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";

export default function Portfolio() {
	const containerRef = useRef(null);

	const isInView = useInView(containerRef, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView, mainControls]);

	const gridContainerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const gridSquareVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	// map the divs

	return (
		<div
			className="flex flex-col gap-10 overflow-x-hidden h-screen"
			ref={containerRef}
			id="portfolio"
		>
			<motion.section
				variants={gridContainerVariants}
				initial="hidden"
				whileInView="show"
				className="grid grid-cols-3 p-10 gap-10 bg-colorFive h-screen"
			>
				<motion.div
					variants={gridSquareVariants}
					className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
				>
					K9 Collection
				</motion.div>

				<motion.div
					variants={gridSquareVariants}
					className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
				>
					Neo Project
				</motion.div>

				<motion.div
					variants={gridSquareVariants}
					className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
				>
					Diary App
				</motion.div>
			</motion.section>
		</div>
	);
}
