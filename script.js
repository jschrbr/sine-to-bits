var unit = 50,
  canvas,
  context,
  canvas2,
  context2,
  height,
  width,
  xAxis,
  yAxis,
  draw;

function init() {
  canvas = document.getElementById("canvas");

  canvas.width = 600;
  canvas.height = 600;

  context = canvas.getContext("2d");
  context.font = "18px sans-serif";
  context.strokeStyle = "#000";
  context.lineJoin = "round";

  height = canvas.height;
  width = canvas.width;

  xAxis = Math.floor(height / 2);
  yAxis = Math.floor(width / 4);

  context.save();
  draw();
}

draw = function() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.strokeStyle = "#00f";
  context.fillStyle = "#fff";
  context.lineWidth = 2;
  context.beginPath();
  drawCircle();
  drawSine(draw.t);
  context.stroke();
  context.restore();
  draw.seconds = draw.seconds - 0.007;
  draw.t = draw.seconds * Math.PI;
  setTimeout(draw, 35);
};
draw.seconds = 0;

function drawSine(t) {
  var x = t;
  var y = Math.sin(x + Math.PI);
  context.moveTo(unit * y + yAxis, unit * y + xAxis);
  console.log(y);
  for (i = yAxis; i <= width; i += 10) {
    x = t + (-yAxis + i) / unit;
    y = Math.sin(x);
    context.lineTo(i + unit, unit * y + xAxis);
  }
}

function drawCircle() {
  context.moveTo(yAxis + unit, xAxis);
  context.arc(yAxis, xAxis, unit, 0, 2 * Math.PI, false);
}
