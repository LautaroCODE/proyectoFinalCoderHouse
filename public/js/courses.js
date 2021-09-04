const $button = document.querySelector(".button");
const $button1 = document.querySelector(".button1");
const $button2 = document.querySelector(".button2");
const $button3 = document.querySelector(".button3");
const $body = document.querySelector("body");
const $titulo = document.querySelector(".titulo");

$button.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("success");
});
$button1.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("dark1");
	$titulo.classList.toggle("tituloWhite");
});
$button2.addEventListener("click", function (infoEvento) {
	$body.classList.toggle("lightgoldenrodyellow");
	$titulo.classList.toggle("text-dark");
});
