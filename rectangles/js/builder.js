var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillRect(0, 0, 50, 50);
ctx.strokeRect(50, 50, 100, 100);

$("#c").css("background-color", "yellow");
