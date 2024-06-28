let lvlcnt = 0, cancerModing = false, score=-5, h, w, paddle1, paddle2, ball, lvl0 = new lvlz0(), lvl1 = new lvlo1();
function setup() {
    createCanvas(windowWidth, windowHeight);
    h = height;
    w = width;
    ball = new Ball(0, 0, 'white');
    paddle1 = new Paddle(-height/4, 0, 'blue');
    paddle2 = new Paddle(height/4, 0, 'yellow');
    lvl0.loaded = 0;
}
  
function draw() {
  // noLoop();
  console.log(sigslide(-h/2, 0, 100, lvl0.loaded));
  push();
  background(0);
  translate(width/2, height/2);
  fill(255);
  circle(0, 0, height*7/8);
  if(lvlcnt===0){
    lvl0.load();
  }
  else if(lvlcnt===1){
    lvl1.load();
  }
  ball.epoch();
  paddle1.epoch();
  paddle2.epoch();
  pop();
}

function slide(begin, end, framemax, frame){
  return begin + (end-begin) * (min((frameCount-frame),framemax)/framemax);
}