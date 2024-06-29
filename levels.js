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
            scale(1, -1);
            textAlign(CENTER, CENTER);textFont('Arial', 100);stroke(255);fill(255);
            text("Physically Plausible Pong", 0, 0);
            textAlign(CENTER, CENTER);textFont('Courier New', 25);fill(255);noStroke();
            text("A and D for bottom paddle, ⬅️ and ➡️ arrow keys for top paddle.", 0, 100)
            text("Navigate the increasingly deranged physical scenarios, and get your ball to the target (🎯)", 0, 125)
            if(frameCount-this.loaded>100 && keyIsPressed){
                this.enter = false;
                this.loaded = frameCount;
            }
        }
        else{
            translate(width/2, tanhslide(0, h, 100, this.loaded));
            rect(0, 0, w/2, h/2);
            scale(1, -1 * (1-(frameCount-this.loaded)/25));
            textAlign(CENTER, CENTER);textFont('Arial', 100);stroke(255);fill(255);
            text("Physically Plausible Pong", 0, 0);
            textAlign(CENTER, CENTER);textFont('Courier New', 25);fill(255);noStroke();
            text("A and D for bottom paddle, ⬅️ and ➡️ arrow keys for top paddle.", 0, 100)
            text("Navigate the increasingly deranged physical scenarios, and get your ball to the target (🎯)", 0, 125)
            textAlign(CENTER, CENTER);textFont('Comic Sans', 100);
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
        if(enter){
            noStroke();
            rotate((frameCount-this.loaded)/TWO_PI);
            text("Standard");
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