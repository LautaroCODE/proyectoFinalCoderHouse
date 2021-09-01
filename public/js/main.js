const $button = document.querySelector(".button");
const $button1 = document.querySelector(".button1");
const $button2 = document.querySelector(".button2");
const $body = document.querySelector("body");

$button.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("success");
});
$button1.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("dark");
});
$button2.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("lightgoldenrodyellow");
});
