let lvlcnt = 0, cancerModing = false, score=-5, h, w, paddle1, paddle2, ball, lvl0 = new lvlz0(), lvl1 = new lvlo1(), lvl2 = new lvlt2(), lvl3, lvl4, border, Timer=0, cestFinite=0;
function setup() {
    createCanvas(windowWidth, windowHeight);console.log(width, height);
    h = height;
    w = width;
    ball = new Ball(0, 0, 'white');
    bg = color(75, 75, 75);
    lvl3 = new lvlt3();
    lvl4 = new lvlf4();
    // border = [new Sprite(-width/16, height/2, width/8, height, 'kinematic'), new Sprite(width + width/16, height/2, width/8, height, 'kinematic')];
    paddle1 = new Paddle(87.5, height/3+60, color(13, 38, 190));
    paddle2 = new Paddle(87.5, -height/3-60, 'yellow');
    // border = [new Sprite(width/16), new Sprite(), new Sprite()]; // new Sprite(x,  y,  w,  h, collider)
}
  
function draw() {
    // noLoop();
    push();
    background(bg);
    fill(255);
    applyMatrix(1, 0, 0, -1, 0, height/2);
    if(lvlcnt === 3){
      lvl3.rot();
    }
    if(lvlcnt===4){
      lvl4.rot();
    }
    //Fade away baord fx
    rectMode(CORNERS);for(let i=0; i<5; i+=1){fill(255, 255, 255, 255-i*50);noStroke();rect(50 + i*5, height/3+50-i*3, width-50+i*5, -height/3-50-i*3, 5);}
    //Actual board
    stroke(0);strokeWeight(5);fill(255);
    rect(50, height/3+50, width-50, -height/3-50, 5);
    //Target section
    fill('red');
    rect(width-100, height/3+50, width-50, -height/3-50, 0, 5, 5, 0);
    textAlign(CENTER, CENTER);stroke(0);textSize(20);
    //
    scale(1, -1);
    let spacing = 40
    for(let i=0; i<height/3; i+=spacing){
      text('🎯', width-75, i);
    }
    for(let i=0; i>-(height/3); i-=spacing){
      text('🎯', width-75, i);
    }
    // circle(width-75, 0, 50);
    scale(1, -1);
    if(lvlcnt===1){
      lvl1.load();
      if(ball.checkOOB()){
        lvl1.enter = true;
      }
    }
    else if(lvlcnt === 2){
      lvl2.load();
      if(ball.checkOOB()){
        lvl2.enter = true;
        lvl2.loaded=frameCount
      }
    }
    else if(lvlcnt === 3){
      lvl3.load();
      if(ball.checkOOB()){
        lvl3.enter = true;
        lvl3.loaded=frameCount;
      }
    }
    else if(lvlcnt === 4){
      lvl4.load();
      if(ball.checkOOB()){
        lvl4.enter = true;
        lvl4.loaded=frameCount;
      }
    }
    paddle1.epoch();
    paddle2.epoch();
    ball.epoch();
    if(lvlcnt === 0){
      lvl0.load();
    }
    // debug();
    pop();
    textAlign(RIGHT, TOP);textFont("Comic Sans", 20);
    text(`Timer: ${frameCount-Timer/60} seconds`, width, 0);
    text(`Level: ${lvlcnt}`, width, 30);
}

function slide(begin, end, framemax, frame){
  return begin + (end-begin) * (min((frameCount-frame),framemax)/framemax);
}
function debug(){
  fill(255);
  stroke(0);strokeWeight(1);circle(0, 0, 50);rectMode(CENTER);rect(30, 0, 2*width, 2);rect(0, 30, 2, 25);
  // circle(width-75, 0, 50);
  return;
}