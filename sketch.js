let lvlcnt = 1, cancerModing = false, score=-5, h, w, paddle1, paddle2, ball, lvl0 = new lvlz0(), lvl1 = new lvlo1(), border;
function setup() {
    createCanvas(windowWidth, windowHeight);console.log(width, height);
    h = height;
    w = width;
    ball = new Ball(0, 0, 'white');
    bg = color(75, 75, 75);
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
    }
    paddle1.epoch();
    paddle2.epoch();
    if(lvlcnt === 0){
      lvl0.load();
    }
    debug();
    pop();
    textAlign(RIGHT, TOP);textFont("Comic Sans", 20);
    text(frameCount, width, 0);
    text(lvlcnt, width, 30);
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