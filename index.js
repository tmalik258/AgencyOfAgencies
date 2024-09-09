const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
const slider = document.querySelector(".service-slider");

prevBtn.addEventListener("click", () => {
	slider.scrollBy({
		left: -slider.offsetWidth,
		behavior: "smooth",
	});
});

nextBtn.addEventListener("click", () => {
	slider.scrollBy({
		left: slider.offsetWidth,
		behavior: "smooth",
	});
});
