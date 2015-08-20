var c = document.querySelector("#c");
var ctx = c.getContext("2d");

var image = new Image();
image.onload = function () {
	// body...
	console.log("loading image.");
	ctx.drawImage(image, 0, 0, c.width, c.height);
}

image.src = "/images/fry.jpg";