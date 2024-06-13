let lvlcnt = 0, cancerModing = false, score=-5;
function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
function draw() {
  push();
  background(220);
  translate(width/2, height/2);
  circle(0, 0, height-5);
  if(lvlcnt===0){
    lvl0.load();
  }
  else if(lvlcnt===1){
    lvl1.load();
  }
  ball.epoch();
  paddle.epoch();
  pop();
}