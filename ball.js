class Ball{
    constructor(x, y, col){
        this.s = createVector(x, y);
        this.color = col;
        this.v = createVector(0, 0);
        this.a = createVector(0, 0);
        this.m = 1;
        this.d = 20;
        this.q = 3;
        this.electrified = false;
    }
    addF = (funcy) => {
        this.a.add(funcy(this.m, this.q, this.v));
    }
    epoch(){
        if(abs(this.s.x-paddle1.s.x)<paddle1.w/2 && abs(this.s.y-paddle1.s.y)<(this.d/2 + paddle1.h/2)){
            this.v.y  = -this.v.y;
            let foo = this.v.mag();
            this.v.add(p5.Vector.mult(paddle1.v, 0.1));
            this.v.limit(9);
            this.s.y = paddle1.s.y-paddle1.h-1;
        }
        if(abs(this.s.x-paddle2.s.x)<paddle2.w/2 && abs(this.s.y-paddle2.s.y)<(this.d/2 + paddle2.h/2)){
            this.v.y  = -this.v.y;
            let foo = this.v.mag();
            this.v.add(p5.Vector.mult(paddle2.v, 0.1));
            this.v.limit(9);
            this.s.y = paddle2.s.y+paddle2.h+1;
        }
        this.v.add(this.a).limit(9);
        this.s.add(this.v);
        this.s.x = max(10, this.s.x);
        this.a = createVector(0, 0);
        fill(this.color);
        circle(this.s.x, this.s.y, this.d);
        if(lvlcnt>1){
            circle()
        }
        noStroke();
    }
    ready(param){
        this.s.x = 87.5+15;this.s.y = 0;
        this.v = createVector(0, 0);
        this.a = createVector(0, 0);
    }
    go(){
        this.v = createVector(0.2, -3);
    }
    checkOOB(){
        if(this.s.x<50 || this.s.x>width || this.s.y>height/2 || this.s.y < -height/2){
            this.ready();
            paddle1.ready();
            paddle2.ready();
            return true;
        }
    }
}
/*
function slide(begin, end, framemax, frame){
  return begin + (end-begin) * (min((frameCount-frame),framemax)/framemax);
}
*/