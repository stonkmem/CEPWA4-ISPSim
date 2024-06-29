class Ball{
    constructor(x, y, col){
        this.s = createVector(x, y);
        this.color = col;
        this.v = createVector(0, 0);
        this.a = createVector(0, 0);
        this.m = 1;
        this.q = 3;
    }
    addF(funcy){
        this.a.add(funcy(this.m, this.q, this.v));
    }
    epoch(){
        this.v.add(this.a);
        this.s.add(this.v);
        this.s.x = max(10, this.s.x);
        this.fill(this.color);
        circle(this.s.x, this.s.y, 20);
    }
}
// class Camera{
//     constructor(target){
//         this.target = target;
//         this.pos = createVector(width/2, this.target.s.y);
//     }
//     update(){
//         // this.pos.x += (this.target.s.x-this.pos.x)/5
//         this.pos.y += (this.target.s.y-this.pos.y)/5
//     }
// }
/*
function slide(begin, end, framemax, frame){
  return begin + (end-begin) * (min((frameCount-frame),framemax)/framemax);
}
*/