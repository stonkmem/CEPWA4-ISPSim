class lvlz0{
    constructor(){
        this.loaded = 0;
    }
    load(enter=true){
        let colalph = color(0, 0, 0);
        colalph.setAlpha(100);
        fill(colalph);
        rectMode(RADIUS);
        if(enter){
            translate(0, sigslide(-h, 0, 100, this.loaded));
            rect(0, 0, w/2, h/2);
            textAlign(CENTER, CENTER);textFont('Comic Sans', 100);
            text("Physically Plausible Ping Pong");
            translate(0, -sigslide(-h, 0, 100, this.loaded));
        }
        else{
            
        }
    }

}
class lvlo1{
    constructor(){
        this.loaded = 0;
    }
    load(){
        
    }
}

function sigslide(begin, end, framemax, frame){
    console.log(sigmoid(min((frameCount-frame),framemax)/framemax));
    return begin + (end-begin) * sigmoid(min((frameCount-frame),framemax)/framemax);
}

const sigmoid = (x) => {
    return Math.tanh(3 * (x-0.5))/2 + 0.5;
};