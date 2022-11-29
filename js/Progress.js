let spans = document.querySelectorAll(".progress span");
let three = document.querySelector(".three");

window.onscroll = function () {
	if (scrollY >= three.offsetTop - 100) {
		spans.forEach((span) => {
			span.style.width = span.dataset.width;
		})
	}
}