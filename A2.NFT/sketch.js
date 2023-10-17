let leafX = 0; //클로버 잎 하나의 X기준점(뾰족한 부분)
let leafY = 0; //클로버 잎 하나의 Y기준점(뾰족한 부분)
let arcW = 20; //클로버 잎 만들 때 필요한 arc의 너비
let arcX1 = leafX - arcW / 2; //왼쪽 arc의 X좌표
let arcX2 = leafX + arcW / 2; //오른쪽 arc의 X좌표
let triH = arcW; //클로버 잎 만들 떄 필요한 삼각형의 높이
let arcY = leafY - triH; //arc의 Y좌표

//클로버 색깔 H,S,B값 아래에서 랜덤으로 할당
let H = 0;
let S = 0;
let B = 0;

//네잎클로버 속성 변수들 선언
let fourCloverIdx1;
let fourCloverIdx2;
let fourCloverScale;
let fourCloverRotate;
let fourCloverX;
let fourCloverY;

//클로버 사이 간격을 결정하는 값
let gap = 38;

//정답을 알려주거나 클로버를 초기화하는 모드
let mode = 0;

function setup() {
  cnv = createCanvas(400, 400);
  //클릭할 시 정답을 알려주거나 클로버를 초기화하는 drawAllClovers 함수를 실행
  cnv.mouseClicked(drawAllClovers);
  colorMode(HSB);
}

function draw() {
  background(150, 20, 30);
  //랜딩 시 drawAllClovers 함수 실행
  drawAllClovers();
}

//모드를 바꿔주는 함수 :현재 모드에 따라 drawAllClovers함수에서 클릭 이벤트가 달라짐
function changeMode() {
  if (mode === 0) {
    mode = 1;
  } else if (mode === 1) {
    mode = 0;
  }
}

//하트모양 잎 하나를 그리는 함수
function drawLeaf() {
  noLoop();
  beginShape();
  stroke(80, 20, 100);
  arc(arcX1, arcY, arcW, arcW, PI, 0);
  arc(arcX2, arcY, arcW, arcW, PI, 0);
  triangle(
    arcX1 - arcW / 2 + 0.4,
    arcY,
    leafX,
    leafY,
    arcX2 + arcW / 2 - 0.4,
    arcY
  );
  stroke(H, S, B);
  line(arcX1 - arcW / 2 + 1, arcY, arcX2 + arcW / 2 - 1, arcY);
  endShape();
}

//랜덤 색의 세잎클로버 하나를 그리는 함수
function drawClover(x, y) {
  H = random(80, 140);
  S = random(20, 70);
  B = random(70, 90);
  fill(H, S, B);
  push();
  translate(x, y);
  drawLeaf();
  pop();
  push();
  translate(x, y);
  rotate(TWO_PI / 3);
  drawLeaf();
  pop();
  push();
  translate(x, y);
  rotate((TWO_PI / 3) * 2);
  drawLeaf();
  pop();
}

//랜덤 색의 네잎클로버 하나를 그리는 함수
function drawFourClover(x, y) {
  H = random(80, 140);
  S = random(20, 80);
  B = random(70, 90);
  fill(H, S, B);
  push();
  translate(x, y);
  drawLeaf();
  pop();
  push();
  translate(x, y);
  rotate(TWO_PI / 4);
  drawLeaf();
  pop();
  push();
  translate(x, y);
  rotate((TWO_PI / 4) * 2);
  drawLeaf();
  pop();
  push();
  translate(x, y);
  rotate((TWO_PI / 4) * 3);
  drawLeaf();
  pop();
}

//화면에 클로버를 모두 그리는 함수
function drawAllClovers() {
  //모드가 0일 때 : 화면에 클로버를 꽉 차게 그려줌
  if (mode === 0) {
    //해당 함수는 클릭 이벤트이므로 클릭할 떄마다 모드를 바꿔주어야 함
    changeMode();
    console.log(mode);

    //이전 그림 초기화
    background(150, 20, 30);

    //네잎클로버의 위치를 정해줄 인덱스 랜덤값으로 만들기
    fourCloverIdx1 = parseInt(random(1, 11));
    fourCloverIdx2 = parseInt(random(1, 11));
    //네잎클로버의 크기, 회전각도, 위치변화량를 정해두기
    fourCloverScale = random(0.5, 0.8);
    fourCloverRotate = random(0, PI / 2);
    fourCloverX = random(-10, 10);
    fourCloverY = random(-10, 10);

    //네잎클로버 위치를 알려주는 콘솔
    console.log(
      "Your Luck is Here : " +
        fourCloverIdx1 * gap +
        ", " +
        fourCloverIdx2 * gap
    );

    //정해진 하나의 인덱스(fourCloverIdx1, fourCloverIdx2)에는 네잎클로버가, 나머지에는 세잎클로버가 그려집니다.
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        if (i === fourCloverIdx1 && j === fourCloverIdx2) {
          push();
          translate(gap * i + fourCloverX, gap * j + fourCloverY);
          scale(fourCloverScale);
          rotate(fourCloverRotate);
          drawFourClover(0, 0);
          pop();
        } else {
          push();
          translate(gap * i + random(-10, 10), gap * j + random(-10, 10));
          scale(random(0.8, 1));
          rotate(random(0, PI / 2));
          drawClover(0, 0);
          pop();
        }
      }
    }
  } else if (mode === 1) {
    //모드가 1일 때 네잎클로버의 위치를 알려줌
    changeMode(); //클릭했으므로 모드가 바뀜
    console.log(mode);

    //네잎클로버가 잘 보이도록 dim처리
    fill(0, 0, 0, 0.6);
    rect(0, 0, 400, 400);

    //위에서 정해둔 네잎클로버 속성들을 기반으로 네잎클로버를 다시 그려줘서 위치를 알려줌
    push();
    translate(
      gap * fourCloverIdx1 + fourCloverX,
      gap * fourCloverIdx2 + fourCloverY
    );
    scale(fourCloverScale);
    rotate(fourCloverRotate);
    fill(100, 100, 100);
    drawFourClover(0, 0);
    pop();
  }
}
