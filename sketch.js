let lvlcnt = 0, cancerModing = false, score=-5, h, w, paddle1, paddle2, ball, lvl0 = new lvlz0();
function setup() {
    createCanvas(windowWidth, windowHeight);
    h = height;
    w = width;
    ball = new Ball(0, 0, 'white');
    paddle1 = new Paddle(-height/4, 0, 'blue');
    paddle2 = new Paddle(height/4, 0, 'yellow');
}
  
function draw() {
  // noLoop();
  push();
  background(255);
  fill(255);
  circle(width/2, frameCount/5, 50)
  pop();
}

function slide(begin, end, framemax, frame){
  return begin + (end-begin) * (min((frameCount-frame),framemax)/framemax);
}