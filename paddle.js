class Paddle{
    constructor(x, y, col){
        this.color = col;
        this.v = createVector(0, 0);
        this.a = createVector(0, 0);
        this.s = createVector(x, y);
        this.w = 75;
        this.h = 20;
        this.q = 3;
        this.electrified = false;
    }
    addF = (funcy) => {
        this.a.add(funcy(this.m, this.q, this.v));
    }
    epoch(){
        if(this.a.x === 0 && this.v.x != 0)this.a.x = Math.sign(0-this.v.x) * 0.25;
        // if(this.color != 'yellow')console.log(this.a.x);
        this.v.add(this.a);
        this.v.y = 0;
        this.v.limit(5);
        this.s.add(this.v);
        this.s.x = min(max(87.5, this.s.x), width-75);
        rectMode(CENTER);
        stroke(0);strokeWeight(5);
        fill(this.color);
        push();
        translate(this.s.x, this.s.y);
        rect(0, 0, this.w, this.h);
        fill(0);
        pop();
        this.a = createVector(0, 0);
    }
}