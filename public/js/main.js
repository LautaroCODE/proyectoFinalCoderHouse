const $button = document.querySelector(".button");
const $body = document.querySelector("body");

$button.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("dark");
});

var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});
