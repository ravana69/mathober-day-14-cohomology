// it is our gaps — holes

// that define the loops in which

// pass through our being

let n = 1;
let img1, img2;
let w;

function preload() {
  img1 = loadImage("https://assets.codepen.io/4559259/cohomology_1.jpg");
  img2 = loadImage("https://assets.codepen.io/4559259/star.png");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  background(200);
  normalMaterial();
}

function draw() {
  t1 = frameCount / 10;
  background(0);
  texture(img1);
  push();
  rotateZ(t1);
  sphere(500, 12, 24);
  pop();

  // pointLight(255,255,255,300,0,0)
  pointLight(255, 255, 255, -600, 600, -600);
  rotateX(-t1 * 2 + 45);
  rotateY(t1 / 4 + 45);
  rotateZ(t1 + 90);
  texture(img1);

  for (let i = 0; i < 1; i += 5) {
    bowditch(t1);
  }
}

function bowditch(t) {
  R1 = 100;
  R2 = 50;

  for (let v = 0; v < 360; v += 15) {
    for (let u = 0; u < 360; u += 15) {
      x = (R1 + R2 * cos(v + t1)) * cos(u);
      y = (R1 + R2 * cos(v + t1)) * sin(u);
      z = R2 * sin(v + t1);
      ambientLight(255, 255, 255);
      // ambientMaterial(0)

      s = 30; //10+30*sin((t+i/t))
      push();
      translate(x, y, z);
      if (v % 60 === 0) {
        sphere(10, 24, 24);
      } else {
        sphere(5, 24, 24);
      }

      pop();
    }
  }
  for (let i = 0; i < 180; i += 0.25) {
    push();
    translate((R1 + R2) * cos(i - t1 / 2), 0, R1 * sin(i + t1 / 2));
    // sphere(30,12,12)
    pop();
  }
  orbitControl();
}
