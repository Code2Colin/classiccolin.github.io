const pianotes =["A","B","C","D","E","F","G"];

function setup() {

    createP("Note randomizer for practicing");
    createCanvas(300,300);
    frameRate(1/2);

}

function mousePressed(){
   createP(random(pianotes)); 
}

function draw() {

    background(220);

    //const notes =["A","B","C","D","E","F","G"];

    let a = random(pianotes);
    strokeWeight(12);

    textSize(64);

    text(a, 130, 160);
    //createP(a);

}

