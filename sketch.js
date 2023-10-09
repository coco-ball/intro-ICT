function setup() {
  let w = 600;
  let h = 800;
  createCanvas(w, h);
}

function draw() {
  let cx = 300;
  let cy = 400;
  background(240);
  // console.log(mouseX, mouseY);
  noStroke();
  fill(0, 174, 228, 90);

  push();
  colorMode(HSB);
  for (let i = 0; i < 260; i++) {
    let g = (100 - 80) / 260;
    let xi = 150 / 260;
    stroke(42, 5, 100 - g * i);
    line(cx - 220 - xi * i, cy - 20 + i, cx + 220 + xi * i, cy - 20 + i);
  }

  for (let i = 0; i < 240; i++) {
    let g = (100 - 30) / 240;
    let xi = 140 / 240;
    stroke(196, 199, 100 - g * i);
    line(cx - 210 - xi * i, cy - 10 + i, cx + 210 + xi * i, cy - 10 + i);
  }
  pop();

  let r = 140;
  // colorMode(RGB);
  drawGradient(cx + 50, cy + 140, 280, 140);

  // drawGradient(cx - 180, cy + 120, 140, 100);
}

//x,y는 위치, rx는 가로폭, ry는 세로폭
function drawGradient(x, y, rx, ry) {
  // let hc = 100 / 140;
  for (let i = 0; i < ry; i++) {
    fill(0, 173, 184, 3);
    ellipse(x, y, (rx / ry) * i, i);
  }
}

// function drawGradient(x, y, r1, r2) {
//   for (let rx = r1; rx > 0; --rx) {
//     colorMode(RGB, 255);
//     fill(226, 255, 165, 3);
//     ellipse(x, y, rx, r2);
//     if (r2 > 0) {
//       --r2;
//     } else;
//   }
// }
