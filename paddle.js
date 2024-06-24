class Paddle{
    constructor(x, y, col){
        this.hb = new Sprite();
        this.hb.position = createVector(x, y);
        this.hb.h = 50; this.hb.w = 5;
        this.hb.color = col;
        this.v = createVector(0, 0);
        // this.a = createVector(0, 0);
    }
    addP = (funcy) => {
        this.v.add(funcy(this.m, this.q, this.v));
    }
    epoch(){
        // this.v.add(this.a).limit(10);
        this.hb.position.add(this.v).limit(25);
        
    }
}