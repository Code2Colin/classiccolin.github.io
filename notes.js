const pianotes =[["A",[150,220,290]],
                ["B",[140,210,280]],
                ["C",[130,200,270]],
                ["D",[120,190,260]],
                ["E",[110,180,250]],
                ["F",[100,170,240,310]],
                ["G",[90,160,230,300]]];
let fClef;
let gClef;
let speed=.333;
let a;
let b;

function preload(){
    fClef = loadImage('216px-FClef.png');
    gClef = loadImage('GClef.png');
}

function setup() {
    createCanvas(300,320); //(X,Y)
    background(230);
    randomNote();
    frameRate(speed);
}

function draw() {
    background(230);
    randomNote();
}

function mousePressed() {
    // speed= (speed + .5 ) %  3;
    // frameRate(speed);
    strokeWeight(2);
    textSize(60);
    fill("black");  
    text(" " + a[0], 110, 70);
    // textSize(3);
    // text("Speed "+speed,0,0);
}

function randomNote() {
    a = random(pianotes);
    b = random(a[1]);
    // strokeWeight(2);
    // textSize(60);
    // fill("black");  
    // text(" " + a[0], 110, 70);

    ellipse(150,b,28,18);
    fill(230);
    ellipse(150,b,18);
    if(b==200) {
        line(120,b,180,b);
    }

    for( let i = 0; i<5; i++) {
        line(10,100+20*i,290,100+20*i);
        line(10,220+20*i,290,220+20*i);
    }
    image(gClef,15,85,50,120);
    image(fClef,15,220,60,70);
    fill(20);
    textSize(10);
    text(" "+1/speed+" secs",10,315);
}
