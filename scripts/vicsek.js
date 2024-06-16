let simulation;
let widgets;
function setup() {
  let canvasDiv = document.getElementById("animation-both");
  let w = canvasDiv.offsetWidth;
  let h = canvasDiv.offsetHeight;
  let can = createCanvas(int(w), int(w / 1.8));
  can.parent("animation-canvas");
  can.style("border-radius", "10pt");

  simulation = new Simulation(300, 10, 0);
  widgets = new Widgets();
}

function draw() {
  background("#16161a");
  simulation.show();
  simulation.updateAngles();
  simulation.updatePositions();

  widgets.update();
}

