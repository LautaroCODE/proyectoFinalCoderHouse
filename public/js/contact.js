const $button = document.querySelector(".button");
const $button1 = document.querySelector(".button1");
const $button2 = document.querySelector(".button2");
const $body = document.querySelector("body");
const $aa = document.querySelector(".aa");
const $bb = document.querySelector(".bb");
$button.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("success");
});
$button1.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("dark");
	$aa.classList.toggle("tituloWhite");
	$bb.classList.toggle("tituloWhite");
});
$button2.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("lightgoldenrodyellow");
	$aa.classList.toggle("oscurito");
	$bb.classList.toggle("oscurito");
});
