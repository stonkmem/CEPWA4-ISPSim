class Ball{
    constructor(x, y, col){
        this.hb = new Sprite();
        this.hb.position = createVector(x, y);
        this.hb.r = 10;
        this.hb.color = col;
        this.v = createVector(0, 0);
        this.a = createVector(0, 0);
        this.m = 1;
        this.q = 3;
    }
    addF = (funcy) => {
        this.a.add(funcy(this.m, this.q, this.v));
    }
    epoch(){
        this.v.add(this.a);
        this.hb.position.add(this.v);
        circle(this.hb.position.x, this.hb.position.y, 20);
        this.hb.visible=true;
    }
}