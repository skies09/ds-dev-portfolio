const NAVBAR_HEIGHT = 64;

export const scrollToSection = (sectionId) => {
	if (!sectionId || sectionId === "intro") {
		window.scrollTo({ top: 0, behavior: "smooth" });
		return;
	}

	const element = document.getElementById(sectionId);
	if (!element) return;

	const offsetPosition =
		element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth",
	});
};
