let value = 0 ;
let back = 200 ;


function setup(){
    // createCanvas(400,400) ;
    let canvas = createCanvas(400,400) ;
    canvas.parent('canvasforHTML');
    background(back) ;
}


function draw(){
    // background(100) ;
    if (mouseIsPressed === true) {
        strokeWeight(10) ;
    } else {
        strokeWeight(0) ;
    }
    point(mouseX,mouseY) ;
    
}



