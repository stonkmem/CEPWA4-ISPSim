class Paddle{
    constructor(x, y, col){
        this.color = col;
        this.v = createVector(0, 0);
        this.a = createVector(0, 0);
        this.s = createVector(x, y);
        this.q = 3;
    }
    addF = (funcy) => {
        this.a.add(funcy(this.m, this.q, this.v));
    }
    epoch(){
        // this.v.add(this.a).limit(10);
        if(this.a.x === 0)this.a.x = Math.sign(0-this.v) * 1;
        this.v.x=0;
        this.v.add(this.a);
        this.v.limit(5);
        this.s.add(this.v);
        this.s.x = min(max(87.5, this.s.x), width-75);
        rectMode(CENTER);
        stroke(0);strokeWeight(5);
        fill(this.color);
        push();
        translate(this.s.x, this.s.y);
        rect(0, 0, 75, 20);
        fill(0);
        pop();
        this.a = createVector(0, 0);
    }
}