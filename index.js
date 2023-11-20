const containerYes = document.querySelector(".containerYes");

const btnSi = document.getElementById("btnSi").addEventListener("click", () => {
	containerYes.style.display = "flex";
	containerYes.style.transition = "all .5s easy";
});

const btnClose = document.querySelector(".btnClose").addEventListener("click", () => {
	containerYes.style.display = "none";
	containerYes.style.transition = "all 5s easy";
})

containerYes.addEventListener("click", (e) => {
	if (e.target.className === "containerYes") {
		containerYes.style.display = "none";
	}
});

const btnNo = document.getElementById("btnNo").addEventListener("mouseover", () => {

	const btnNoClas = document.querySelector(".btnNo");

	// Right
	const right = Math.floor(Math.random() * 410) + 400;
	// Top
	const top = Math.floor(Math.random() * 480) + 130;

	btnNoClas.style.position = "absolute";
	btnNoClas.style.right = right + "px";
	btnNoClas.style.top = top + "px";

});

const btnNoClas = document.querySelector(".btnNo").addEventListener("click", () => {
	
	const btnNoClas = document.getElementById("btnNo");

	// Right
	const right = Math.floor(Math.random() * 410) + 400;
	// Top
	const top = Math.floor(Math.random() * 480) + 130;

	btnNoClas.style.position = "absolute";
	btnNoClas.style.right = right + "px";
	btnNoClas.style.top = top + "px";
});