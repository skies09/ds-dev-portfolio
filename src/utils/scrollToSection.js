const NAVBAR_HEIGHT = 64;

export const scrollToSection = (sectionId) => {
	if (!sectionId || sectionId === "intro") {
		window.scrollTo({ top: 0, behavior: "smooth" });
		return;
	}

	const element = document.getElementById(sectionId);
	if (!element) {
		window.location.href = `#${sectionId}`;
		return;
	}

	const offsetPosition =
		element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth",
	});
};
