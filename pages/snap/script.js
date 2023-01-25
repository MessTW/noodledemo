// translate mouse movement into 3D rotation
window.addEventListener("mousemove", (e) => {
	w = window.innerWidth;
	h = window.innerHeight;

	const rotx = 7 - e.pageY * (14 / h);
	const roty = -8 + e.pageX * (16 / w);

	document.getElementById(
		"card"
	).style.transform = `rotateY(${roty}deg) rotateX(${rotx}deg)`;
});

// translate touch movement into 3D rotation
window.addEventListener("touchmove", (e) => {
	w = window.innerWidth;
	h = window.innerHeight;

	const rotx = 7 - e.changedTouches[0].pageY * (14 / h);
	const roty = -10 + e.changedTouches[0].pageX * (20 / w);

	document.getElementById(
		"card"
	).style.transform = `rotateY(${roty}deg) rotateX(${rotx}deg)`;
});
