let head = [1, 1, 1.50]
let tail = [0, 0, 0];
let scaling= 5;

function setup() {
    let canvas = createCanvas(600,600,WEBGL);
    canvas.parent("myCanvas");
    frameRate(300);
    // console.log(deltaTime);
    background(175);
}

function draw() {
    
    tail = lorenz(head)
    for (let i =0; i<head.length;i++){
        tail[i] = head[i] + tail[i]*1/100;
    }
    line(head[0]*scaling,head[1]*scaling,head[2]*scaling,tail[0]*scaling,tail[1]*scaling,tail[2]*scaling)
    head= tail
    // print(head)
    camera()
}

function lorenz(xyz, s=10,r=21,b=8/3){
    let x = xyz[0]
    let y = xyz[1]
    let z = xyz[2]
    
    let x_dot = s*(y -x);
    let y_dot = r*x -y - x*z;
    let z_dot = x*y -b*z
    
    return [x_dot, y_dot, z_dot]
}