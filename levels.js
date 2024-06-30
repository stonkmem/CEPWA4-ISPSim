class lvlz0{
    constructor(){
        this.loaded = 0;
        this.enter=true;
    }
    load(){
        push();
        console.log("LOADING");
        let colalph = color(0, 0, 0);
        colalph.setAlpha(225);
        fill(colalph);
        rectMode(RADIUS);
        if(this.enter){
            translate(width/2, tanhslide(h, 0, 100, this.loaded));
            rect(0, 0, w/2, h/2);
            push();
            scale(1, -1);
            textAlign(CENTER, CENTER);textFont('Arial', 100);stroke(255);fill(255);
            text("Physically Plausible Pong", 0, -87.5);
            textAlign(CENTER, CENTER);textFont('Courier New', 25);fill(255);noStroke();
            text("A and D for bottom paddle, ⬅️ and ➡️ arrow keys for top paddle.", 0, 12.5);
            text("Navigate the increasingly deranged physical scenarios, and get your ball to the target (🎯)", 0, 37.5);
            strokeWeight(2);stroke(255);fill(255);
            text("---PRESS ANY KEY TO CONTINUE THROUGH THE GAME---", 0, 87.5);
            pop();
            if(frameCount-this.loaded>100 && keyIsPressed){
                this.enter = false;
                this.loaded = frameCount;
            }
        }
        else{
            translate(width/2, tanhslide(0, h, 100, this.loaded));
            rect(0, 0, w/2, h/2);
            scale(1, -1 * (1-(frameCount-this.loaded)/2));
            textAlign(CENTER, CENTER);textFont('Arial', 100);stroke(255);fill(255);
            text("Physically Plausible Pong", 0, -87.5);
            textAlign(CENTER, CENTER);textFont('Courier New', 25);fill(255);noStroke();
            text("A and D for bottom paddle, ⬅️ and ➡️ arrow keys for top paddle.", 0, 12.5);
            text("Navigate the increasingly deranged physical scenarios, and get your ball to the target (🎯)", 0, 37.5);
            textAlign(CENTER, CENTER);textFont('Comic Sans MS', 100);
            if(frameCount - this.loaded >= 100){
                lvlcnt = 1;
            }
        }
        pop();
    }
}
class lvlo1{
    constructor(){
        this.loaded = 0;
        this.enter = true;
    }
    load(){
        push();
        if(this.enter){
            noStroke();
            textAlign(CENTER, CENTER);textFont("Arial", 70);
            push();
            fill(0, 0, 0, 125);
            applyMatrix(1, 0, 0, -1, width/2, 0);
            // rotate((frameCount-this.loaded)/(10*TWO_PI));
            text("Nothing funny yet...", 0, 0);
            pop();
            if(keyIsPressed === true){
                this.enter = false;
                this.loaded = frameCount
            }
        }
        else{
            noStroke();
            textAlign(CENTER, CENTER);textFont("Arial", 70);
            push();
            fill(0, 0, 0, 125);
            applyMatrix(1, 0, 0, -1, width/2, 0);
            // rotate((frameCount-this.loaded)/(10*TWO_PI));
            text("Nothing funny yet...", 0, -60);
            pop();
            control();
            timeClock(this.loaded);
        }
        pop();
    }
}

function tanhslide(begin, end, framemax, frame){
    return begin + (end-begin) * tanh(min((frameCount-frame),framemax)/framemax);
}

const tanh = (x) => {
    // return Math.tanh(3 * (x-0.5))/2 + 0.5;
    return ((Math.cos(PI*x - PI)/2) + 0.5);
};

function control(){
    if(keyIsDown(LEFT_ARROW)){paddle1.addF((...rest)=>{return createVector(-3, 0);});}
    if(keyIsDown(RIGHT_ARROW)){paddle1.addF((...rest)=>{return createVector(3, 0);});}
    if(keyIsDown(65)){paddle2.addF((...rest)=>{return createVector(-3, 0);});}
    if(keyIsDown(68)){paddle2.addF((...rest)=>{return createVector(3, 0);});}
}

function timeClock(kys){
    push();
    strokeWeight(5);stroke(0);fill(255, 0, 255);
    circle(width/2, -60, 60);
    translate(width/2, -60);
    strokeWeight(2);
    line(0, 0, 0, 30);
    strokeWeight(3)
    rotate((frameCount-kys)/60 * PI);
    line(0, 0, 0, 20);
    pop();
}