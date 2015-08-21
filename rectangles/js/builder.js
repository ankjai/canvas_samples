var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 50, 50);
ctx.fillStyle = "red"; // wont work as ctx is creating strokeRect
ctx.strokeRect(50, 50, 100, 100);
ctx.fillStyle = "red"; // wont work as ctx is creating strokeRect

$("#c").css("background-color", "yellow");

// drawing through pen
ctx.moveTo(150,150);
ctx.lineTo(200,200); // not yet finished, chk tutorial
ctx.fill();