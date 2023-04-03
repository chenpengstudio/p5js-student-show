let link1, link2, link3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  link1 = createA('project-4-1.html', 'Project 4.1: Still Life','_blank');
  link2 = createA('project-4-2.html', 'Project 4.2: Face Generator','_blank');
  link3 = createA('project-4-3.html', 'Project 4.3: Yearbook','_blank');
  link1.position(300,200);
  link2.position(340,300);
  link3.position(440,500);
  noCursor();
}

let d = 0;
function draw() {
  background(255);
  push();
  translate(mouseX, mouseY);
  rotate(d);
  fill(200, 210, 200);
  drawWindMill(0, 0, 20);
  pop();
  d += 0.05;
  eyes(400, 350, 200, 200);
}

function drawWindMill(x = 0, y = 0, r = 30, col = 189) {
  noStroke();
  circle(x, y, r / 3);
  arc(x - r, y, r * 2, r * 2, 0, PI);
  arc(x, y - r, r * 2, r * 2, HALF_PI, -HALF_PI);
  arc(x + r, y, r * 2, r * 2, PI, 0);
  arc(x, y + r, r * 2, r * 2, -HALF_PI, HALF_PI);
}

function eyes(x, y, w, h) {
  strokeWeight(2);
  
  stroke(0);
  fill(255);
  let xel = x - w / 6;
  let xer = x + w / 6;
  let ye = y - w / 12;
  let al = atan2(mouseY - ye, mouseX - xel);
  let ar = atan2(mouseY - ye, mouseX - xer);
  let xebl = cos(al) * w / 20 + xel;
  let yebl = sin(al) * w / 20 + ye;
  let xebr = cos(ar) * w / 20 + xer;
  let yebr = sin(ar) * w / 20 + ye;
  
  circle(xel, ye, w / 5);
  circle(xer, ye, w / 5);  
  
  fill(0);
  circle(xebl, yebl, w / 10);
  circle(xebr, yebr, w / 10);
}