let value = 0 ;
let back = 200 ;
let c;


function setup(){
    // createCanvas(400,400) ;
    // let canvas = createCanvas(200,200) ;
    let canvas = createCanvas(200,200) ;
    canvas.parent('canvasforHTML');
    
    // let img = createImage(200,200) ;
    // image(img,0,0) ;
    background(back) ;
}


function draw(){
    // background(100) ;
    if (mouseIsPressed === true) {
        strokeWeight(10) ;
    } else {
        strokeWeight(0) ;
    }
    // point(mouseX,mouseY) ;
    line(mouseX,mouseY,pmouseX,pmouseY) ;
    // mousePressed() ;
}

// function mousePressed() {
//     c = get() ;
//     image(c, width/2, height/2) ;
// }

