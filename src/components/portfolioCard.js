import { motion } from "framer-motion";
import { IconExternal, IconGithub } from "./icons";

const IMAGE_SHADOW =
	"0 0 40px rgba(46, 230, 255, 0.35), 0 0 80px rgba(11, 79, 108, 0.25), 0 20px 60px rgba(0, 0, 0, 0.4)";

const ProjectImage = ({ project }) => (
	<>
		<div className="absolute inset-0 bg-gradient-to-br from-colorOne/20 via-transparent to-colorOne/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
		{project.imgMobile && (
			<img
				className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 lg:hidden"
				src={`/assets/Images/${project.imgMobile}`}
				alt={`Screenshot of ${project.title}`}
				loading="lazy"
			/>
		)}
		<img
			className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${
				project.imgMobile ? "hidden lg:block" : ""
			}`}
			src={`/assets/Images/${project.img}`}
			alt={`Screenshot of ${project.title}`}
			loading="lazy"
		/>
	</>
);

const PortfolioCard = ({ project, index }) => {
	const isImageLeft = index % 2 === 0;
	const ease = [0.16, 1, 0.3, 1];

	return (
		<article
			className={`w-full flex flex-col lg:flex-row gap-0 items-start lg:items-center mb-12 lg:mb-24 relative ${
				isImageLeft ? "" : "lg:flex-row-reverse"
			}`}
		>
			<motion.div
				className="w-full mb-6 lg:hidden text-center"
				initial={{ opacity: 0, y: -30, scale: 0.95 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.7, ease, delay: index * 0.1 }}
			>
				<h3 className="text-2xl lg:text-3xl font-extrabold text-colorFive font-display tracking-tight leading-tight">
					{project.title}
				</h3>
			</motion.div>

			<motion.div
				className={`w-full lg:w-3/5 flex justify-center relative z-20 lg:z-0 ${
					isImageLeft ? "lg:pr-0" : "lg:pl-0"
				}`}
				initial={{
					opacity: 0,
					x: isImageLeft ? -120 : 120,
					scale: 0.85,
				}}
				whileInView={{ opacity: 1, x: 0, scale: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 1, delay: index * 0.12, ease }}
			>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Visit ${project.title} website`}
					className="relative w-[85%] lg:w-full h-auto md:w-auto lg:h-96 rounded-2xl overflow-hidden group -mb-8 lg:mb-0 block"
					style={{ boxShadow: IMAGE_SHADOW }}
				>
					<ProjectImage project={project} />
				</a>
			</motion.div>

			<motion.div
				className={`w-full lg:w-2/5 flex flex-col justify-center lg:mt-0 ${
					isImageLeft ? "lg:pl-10" : "lg:pr-10 lg:items-end"
				}`}
				initial={{
					opacity: 0,
					x: isImageLeft ? 120 : -120,
					scale: 0.85,
				}}
				whileInView={{ opacity: 1, x: 0, scale: 1 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{
					duration: 1,
					delay: index * 0.12 + 0.25,
					ease,
				}}
			>
				<motion.div
					className={`hidden lg:block mb-6 ${
						isImageLeft ? "text-left" : "text-right"
					}`}
					initial={{ opacity: 0, y: -30, scale: 0.95 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.7,
						delay: index * 0.12 + 0.4,
						ease,
					}}
				>
					<h3 className="text-3xl lg:text-4xl font-extrabold text-colorFive font-display tracking-tight leading-tight bg-gradient-to-r from-colorFive via-colorOne to-colorAccent bg-clip-text text-transparent">
						{project.title}
					</h3>
				</motion.div>

				<motion.div
					className={`rounded-2xl pt-[3.5rem] pb-6 px-6 lg:pt-10 lg:pb-10 lg:px-10 text-left relative z-10 lg:z-20 border border-colorOne/20 bg-colorTwo/95 backdrop-blur-md shadow-2xl ${
						isImageLeft
							? "lg:text-left lg:-ml-14"
							: "lg:text-right lg:-mr-14"
					}`}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.8,
						delay: index * 0.12 + 0.5,
						ease,
					}}
				>
					<p className="text-base text-colorFive font-sans leading-relaxed mb-4 lg:mb-5">
						{project.longDescription}
					</p>

					{project.result && (
						<p className="text-sm text-colorOne font-mono mb-5 lg:mb-6 border-l-2 border-colorOne pl-3">
							{project.result}
						</p>
					)}

					{project.keyFeatures?.length > 0 && (
						<ul className="mb-6 lg:mb-7 space-y-2.5 lg:space-y-3">
							{project.keyFeatures.map((feature) => (
								<li
									key={feature}
									className={`text-sm lg:text-base text-colorFive/90 font-sans flex items-start ${
										isImageLeft
											? ""
											: "lg:flex-row-reverse lg:justify-end"
									}`}
								>
									<span
										className={`text-colorOne mr-3 mt-0.5 font-bold text-lg ${
											isImageLeft ? "" : "lg:ml-3 lg:mr-0"
										}`}
										aria-hidden="true"
									>
										•
									</span>
									<span className="font-medium">{feature}</span>
								</li>
							))}
						</ul>
					)}

					{project.languages?.length > 0 && (
						<div
							className={`flex flex-wrap gap-2 lg:gap-2.5 ${
								isImageLeft ? "justify-start" : "lg:justify-end"
							}`}
						>
							{project.languages.map((lang) => (
								<span
									key={lang}
									className="px-3 py-1.5 text-xs font-semibold text-colorFive/90 bg-colorTwo/50 border border-colorOne/20 rounded-lg font-mono"
								>
									{lang}
								</span>
							))}
						</div>
					)}
				</motion.div>

				<motion.div
					className={`flex items-center gap-4 lg:gap-5 mt-5 lg:mt-6 justify-center ${
						isImageLeft ? "lg:justify-start" : "lg:justify-end"
					}`}
					initial={{ opacity: 0, y: 30, scale: 0.9 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.7,
						delay: index * 0.12 + 0.8,
						ease,
					}}
				>
					{project.github && (
						<motion.a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View ${project.title} on GitHub`}
							className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-colorTwo/80 text-colorFive hover:text-colorOne border border-colorOne/20 hover:border-colorOne/50 transition-colors duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
						>
							<IconGithub className="w-5 h-5 lg:w-6 lg:h-6" />
						</motion.a>
					)}
					<motion.a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit ${project.title} website`}
						className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-colorTwo/80 text-colorFive hover:text-colorOne border border-colorOne/20 hover:border-colorOne/50 transition-colors duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						<IconExternal className="w-5 h-5 lg:w-6 lg:h-6" />
					</motion.a>
				</motion.div>
			</motion.div>
		</article>
	);
};

export default PortfolioCard;
