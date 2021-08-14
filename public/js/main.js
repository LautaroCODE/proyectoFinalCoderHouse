const $button = document.querySelector(".button");
const $body = document.querySelector("body");

$button.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("dark");
});
