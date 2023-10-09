function setup() {
  let w = 600;
  let h = 800;
  createCanvas(w, h);
}

function draw() {
  background(172, 94, 43);
  noStroke();
  drawWater();
  let cx = width / 2;
  let cy = height / 2;

  //gradient
  fill(0, 173, 184, 3);
  drawGradient(cx + 50, cy + 140, 320, 200);

  fill(0, 173, 184, 3);
  drawGradient(cx + 140, cy + 40, 240, 100);

  fill(226, 255, 165, 3);
  drawGradient(cx + 120, cy + 110, 280, 140);

  fill(226, 255, 165, 3);
  drawGradient(cx - 140, cy + 20, 280, 140);

  drawFrame();

  drawSalt(cx - 220, cy - 10, 180, 55);

  drawSalt(cx + 20, cy, 250, 80);

  function drawSalt(x, y, w, h) {
    translate(x, y);
    let a = 0.0;
    let inc = TWO_PI / w;
    let b = 0.0;
    let incb = TWO_PI / (2 * w);
    for (let i = 0; i < w; i++) {
      stroke(280 - i / 3);
      line(i, h + sin(b) * 15.0, i, cos(a) * h);
      a = a + inc;
      b = b + incb;
    }
    translate(-x, -y);
  }

  // for (let i = 0; i < 150; i++) {
  //   line(200 + i, 50, 200 + i, 50 + sin(b) * 10.0);
  //   b = b + incb;
  // }
}

//x,y는 위치, rx는 가로폭, ry는 세로폭
function drawGradient(x, y, rx, ry) {
  // let hc = 100 / 140;
  for (let i = ry; i > 0; --i) {
    ellipse(x, y, rx - (rx / ry) * i, ry - i);
  }
}

function drawWater() {
  let cx = width / 2;
  let cy = height / 2;
  //물 배경
  push();
  colorMode(HSB);
  //프레임
  for (let i = 0; i < 270; i++) {
    let g = (100 - 80) / 270;
    let xi = 150 / 270;
    stroke(42, 5, 100 - g * i);
    line(cx - 220 - xi * i, cy - 20 + i, cx + 220 + xi * i, cy - 20 + i);
  }

  //물
  for (let i = 0; i < 240; i++) {
    let g = (100 - 30) / 240;
    let xi = 140 / 240;
    stroke(196, 199, 100 - g * i);
    line(cx - 210 - xi * i, cy - 10 + i, cx + 210 + xi * i, cy - 10 + i);
  }
  pop();
}

function drawFrame() {
  let cx = width / 2;
  let cy = height / 2;
  //십자 프레임
  push();
  colorMode(HSB);
  for (let i = 0; i < 260; i++) {
    let g = (100 - 80) / 260;
    let xi = 8 / 260;
    stroke(42, 5, 100 - g * i);
    line(cx - 5 - xi * i, cy - 20 + i, cx + 5 + xi * i, cy - 20 + i);
  }

  for (let i = 0; i < 14; i++) {
    let g = (100 - 90) / 14;
    let xi = 10 / 14;
    stroke(42, 5, 100 - g * i);
    line(cx - 265 - xi * i, cy + 80 + i, cx + 265 + xi * i, cy + 80 + i);
  }
  pop();
}
