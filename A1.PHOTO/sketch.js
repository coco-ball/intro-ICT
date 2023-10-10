function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(161, 138, 129);
  let cx = width / 2;
  let cy = height / 2;

  //나무패턴
  push();
  noLoop;
  for (let i = 0; i < 40; i++) {
    strokeWeight(1);
    stroke(129, 111, 104);
    line(40 * i, 0, 40 * i, cx + 60);

    stroke(129, 111, 104, random(0, 70));
    strokeWeight(random(0, 10));
    let a = random(10, 20);
    line(a * i, 0, a * i, cx + 60);
  }
  for (let i = 0; i < 10; i++) {
    noFill();
    stroke(129, 111, 104, random(30, 50));
    strokeWeight(3);
    ellipse(cx + 120, cy - 300, random(2 * i, 3 * i), random(5 * i, 20 * i));
    ellipse(cx + 180, cy - 250, random(2 * i, 3 * i), random(7 * i, 12 * i));
    ellipse(cx + 300, cy - 320, random(2 * i, 3 * i), random(7 * i, 20 * i));
    ellipse(cx - 240, cy - 300, random(2 * i, 3 * i), random(7 * i, 16 * i));
    ellipse(cx - 120, cy - 160, random(2 * i, 3 * i), random(7 * i, 12 * i));
  }
  pop();

  //바닥패턴
  fill(50, 40, 34);
  rect(0, cy - 60, 600, 500);
  drawBackgroundPattern();

  //grass
  strokeWeight(1);
  grass1(cx - 170, cy - 160, -30, 90);
  grass1(cx - 170, cy - 160, 70, 80);
  grass1(cx - 100, cy - 160, 30, 30);
  grass1(cx + 20, cy - 160, 50, 90);
  grass1(cx + 170, cy - 170, 0, 50);
  grass1(cx + 200, cy - 160, 60, 70);
  grass1(cx + 150, cy - 120, 30, 60);
  grass2(cx - 80, cy - 120, 10, 60);
  grass2(cx + 70, cy - 170, -20, 60);
  grass2(cx - 200, cy - 170, -20, 50);
  grass2(cx - 250, cy - 125, 20, 90);
  grass1(cx + 200, cy - 80, 60, 60);

  //frame & water
  noStroke();
  drawFrame();
  drawBackgroundSalt();
  drawWater();

  //grass
  grass1(cx - 320, cy - 70, 35, 90);
  // grass2(cx + 210, cy - 140, -15, 110);
  grass2(cx + 225, cy - 100, -20, 80);
  grass3(cx + 250, cy - 20, -30, 50);

  //gradient
  //중앙하단
  fill(0, 173, 184, 3);
  drawGradient(cx + 50, cy + 140, 320, 200);

  //좌측하단
  fill(0, 173, 184, 3);
  drawGradient(cx - 80, cy + 120, 320, 180);

  //우측하단
  fill(255, 255, 200, 3);
  drawGradient(cx + 80, cy + 80, 380, 160);

  //우측하단
  fill(255, 255, 200, 3);
  drawGradient(cx + 160, cy + 160, 260, 110);

  //우측하단
  fill(255, 255, 210, 3);
  drawGradient(cx + 200, cy + 190, 260, 100);

  //좌측상단
  fill(226, 255, 165, 3);
  drawGradient(cx - 140, cy + 20, 280, 140);

  //십자 프레임
  drawHorizontalFrame();

  //소금더미1
  drawSalt(cx - 220, cy - 10, 190, 50);
  drawSaltParticle(cx - 130, cy - 55, 2, 18);

  //소금더미2
  translate(cx + 15, cy - 20);
  w1 = 80;
  h1 = 15;
  a = 0.0;
  inc = TWO_PI / w1;
  b = 0.0;
  incb = TWO_PI / (2 * w1);
  for (let i = 0; i < w1; i++) {
    stroke(275 - i);
    line(i, h1 + sin(b) * 10.0, i, cos(a) * h1);
    a = a + inc;
    b = b + incb;
  }
  translate(-(cx + 15), -(cy - 20));
  drawSaltParticle(cx + 50, cy - 30, 2.8, 6);

  //소금더미3
  translate(cx + 10, cy + 23);
  w1 = 250;
  h1 = 50;
  a = 0.0;
  inc = TWO_PI / w1;
  b = 0.0;
  incb = TWO_PI / (1.5 * w1);
  for (let i = 0; i < w1; i++) {
    stroke(290 - i / 2);
    line(i, 20 + h1 + sin(b) * 15.0, i, cos(a) * (h1 + 5));
    a = a + inc;
    b = b + incb;
  }
  translate(-(cx + 10), -(cy + 23));
  drawSaltParticle(cx + 130, cy - 30, 2.5, 23);

  //소금더미4
  drawSalt(cx - 5, cy + 110, 190, 40);
  drawSaltParticle(cx + 80, cy + 70, 2.4, 16);

  //소금더미5
  drawSalt(cx + 95, cy + 130, 225, 55);
  drawSaltParticle(cx + 200, cy + 80, 2.6, 20);

  //grass
  strokeWeight(1);
  grass2(cx - 345, cy - 15, 70, 120);
  grass1(cx + 120, cy + 120, -20, 80);
  grass2(cx + 150, cy + 130, 30, 90);
  grass3(cx - 180, cy + 185, 40, 50);
  grass2(cx - 210, cy + 140, -25, 90);
  grass2(cx + 260, cy + 140, -20, 20);

  //십자 프레임
  drawVerticalFrame();
}

//x,y는 위치, rx는 가로폭, ry는 세로폭
function drawGradient(x, y, rx, ry) {
  // let hc = 100 / 140;
  for (let i = ry; i > 0; i = i - 2) {
    ellipse(x, y, rx - (rx / ry) * i, ry - i);
  }
}

//프레임 그리는 함수
function drawFrame() {
  let cx = width / 2;
  let cy = height / 2;
  push();
  colorMode(HSB);
  for (let i = 0; i < 270; i++) {
    let g = (100 - 80) / 270;
    let xi = 150 / 270;
    stroke(42, 5, 100 - g * i);
    line(cx - 220 - xi * i, cy - 20 + i, cx + 220 + xi * i, cy - 20 + i);
  }
  pop();
}

//물 그리는 함수
function drawWater() {
  let cx = width / 2;
  let cy = height / 2;
  push();
  colorMode(HSB);
  strokeWeight(0.8);
  for (let i = 0; i < 240; i++) {
    let g = (100 - 30) / 240;
    let xi = 140 / 240;
    stroke(196, 199, 100 - g * i);
    line(cx - 210 - xi * i, cy - 10 + i, cx + 210 + xi * i, cy - 10 + i);
  }
  pop();
}

//십자 프레임 가로
function drawHorizontalFrame() {
  let cx = width / 2;
  let cy = height / 2;
  push();
  colorMode(HSB);
  for (let i = 0; i < 14; i++) {
    let g = (100 - 90) / 14;
    let xi = 10 / 14;
    stroke(42, 5, 100 - g * i);
    line(cx - 265 - xi * i, cy + 80 + i, cx + 265 + xi * i, cy + 80 + i);
  }

  for (let i = 0; i < 12; i++) {
    let g = (80 - 20) / 12;
    stroke(42, 5, 80 - g * i);
    line(0, cy + 250 + i, 600, cy + 250 + i);
  }
  pop();
}

//십자 프레임 세로
function drawVerticalFrame() {
  let cx = width / 2;
  let cy = height / 2;
  push();
  colorMode(HSB);
  for (let i = 0; i < 260; i++) {
    let g = (110 - 80) / 260;
    let xi = 8 / 260;
    stroke(42, 5, 110 - g * i);
    line(cx - 5 - xi * i, cy - 20 + i, cx + 5 + xi * i, cy - 20 + i);
  }
}

//소금 더미 그리는 함수
function drawSalt(x, y, w, h) {
  translate(x, y);
  let a = 0.0;
  let inc = TWO_PI / w;
  let b = 0.0;
  let incb = TWO_PI / (2 * w);
  for (let i = 0; i < w; i++) {
    stroke(270 - i / 3);
    line(i, h + sin(b) * 15.0, i, cos(a) * h);
    a = a + inc;
    b = b + incb;
  }
  translate(-x, -y);
}

//풀 한 가닥 그리는 함수
function drawGrass(w, x, y, h, s, b, l) {
  push();
  colorMode(HSB);
  noFill();
  for (let j = 0; j < w; j++) {
    stroke(h, s + 5 * j, b - 5 * j);
    bezier(x + j, y, 40 + j, 20, 40 + j, l, 40 + j, l);
  }
  pop();
}

//풀 더미 그리는 함수1
function grass1(x, y, gx, gy) {
  translate(x, y);
  drawGrass(4, gx / 2, gy + 30, 90, 20, 60, 150);
  drawGrass(2, gx - 10, gy, 90, 20, 60, 150);
  drawGrass(2, gx, gy / 3, 80, 20, 80, 150);
  drawGrass(5, gx + 55, gy / 3, 95, 30, 80, 150);
  drawGrass(4, gx + 75, gy + 10, 95, 30, 55, 150);
  drawGrass(2, gx + 40, gy + 30, 90, 20, 80, 150);
  translate(-x, -y);
}

//풀 더미 그리는 함수2
function grass2(x, y, gx, gy) {
  translate(x, y);
  drawGrass(4, gx / 2, gy + 30, 70, 20, 50, 150);
  drawGrass(1, gx - 10, gy, 90, 20, 40, 150);
  drawGrass(2, gx * 3, gy + 10, 10, 20, 35, 150);
  drawGrass(5, gx + 35, gy / 3, 85, 30, 60, 150);
  drawGrass(3, gx + 75, gy + 10, 95, 30, 65, 150);
  drawGrass(2, gx + 40, gy / 2, 80, 40, 35, 150);
  translate(-x, -y);
}

//풀 더미 그리는 함수3
function grass3(x, y, gx, gy) {
  translate(x, y);
  drawGrass(4, gx / 2, gy + 30, 90, 20, 60, 90);
  drawGrass(2, gx - 10, gy, 90, 20, 60, 90);
  drawGrass(2, gx, gy / 3, 80, 20, 80, 90);
  drawGrass(5, gx + 55, gy / 3, 95, 30, 80, 90);
  drawGrass(4, gx + 75, gy + 10, 95, 30, 55, 90);
  drawGrass(2, gx + 40, gy + 30, 90, 20, 80, 90);
  translate(-x, -y);
}

//바닥패턴 그리는 함수
function drawBackgroundPattern() {
  let cx = width / 2;
  let cy = height / 2;
  translate(cx - 300, cy - 60);
  for (let j = 0; j < 80; j++) {
    for (let i = 0; i < 200; i++) {
      push();
      translate(0, 6 * j);
      strokeWeight(0.3);
      fill(random(40, 80));
      stroke(random(20, 150));
      ellipse(i * random(3, 4), random(-0.5, 1), random(8, 12), random(1.5, 3));
      ellipse(i * random(3, 4), random(2.5, 4), random(8, 12), random(1.5, 3));
      noLoop();
      pop();
    }
  }
  translate(-(cx - 300), -(cy - 60));
}

//물 바닥 소금 무늬 그리는 함수
function drawBackgroundSalt() {
  let cx = width / 2;
  let cy = height / 2;
  translate(cx - 190, cy - 10);
  for (let j = 0; j < 40; j++) {
    for (let i = 0; i < 105 + j * 1.8; i++) {
      push();
      translate(-j * 3 * 1.4, 6 * j);
      fill(255);
      stroke(random(220, 250));
      strokeWeight(1);
      ellipse(
        i * random(3, 4),
        random(-0.5, 1),
        random(6, 12),
        random(1.5, 2.5)
      );
      ellipse(
        i * random(3, 4),
        random(2.5, 4),
        random(6, 12),
        random(1.5, 2.5)
      );
      noLoop();
      pop();
    }
  }
  translate(-(cx - 190), -(cy - 10));
}

//소금 결정 그리는 함수
function drawSaltParticle(x, y, w, h) {
  translate(x, y);
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w * j + 5; i++) {
      push();
      translate(-j * w * 1.6, 6 * j);
      stroke(random(220, 250));
      strokeWeight(0.2);
      ellipse(
        i * random(3, 4.2),
        random(-0.5, 1),
        random(6, 10),
        random(1.5, 2)
      );
      ellipse(
        i * random(3, 4.2),
        random(2.5, 4),
        random(6, 10),
        random(1.5, 2)
      );
      noLoop();
      pop();
    }
  }
  translate(-x, -y);
}
