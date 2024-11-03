// The following code will only run iff the DOM is completely loaded
// window.addEventListener("DOMContentLoaded", (event) => {
// 	const open = document.getElementById("popup-button");
// 	const popup_container = document.getElementById("quiz-container");

// 	console.log(open);

// 	open.addEventListener("click", () => {
// 		popup_container.classList.add("show");
// 		console.log("It worked");
// 	});
// });

const open = document.getElementById("popup-button");
const popup_container = document.getElementById("quiz-container");

open.addEventListener("click", () => {
	popup_container.classList.add("show");
	console.log("It worked");
});
