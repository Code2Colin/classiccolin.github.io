const pianotes =[["A",[150,220,290]],
                ["B",[140,210,280]],
                ["C",[130,200,270]],
                ["D",[120,190,260]],
                ["E",[110,180,250]],
                ["F",[100,170,240,310]],
                ["G",[90,160,230,300]]];
let fClef;
let gClef;

function preLoad(){
    fClef = loadImage('FClef.svg');
    gClef = loadImage('GClef.svg');
}

function setup() {
    createCanvas(300,320); //(X,Y)
    background(220);
    // randomNote();
    // frameRate(1/2);
    image(gClef,0,0);

}

function draw() {
    background(220);
    // randomNote();
    // image(gClef,30,100);

}

function randomNote() {
    let a = random(pianotes);
    let b = random(a[1]);
    strokeWeight(2);
    textSize(60);
    fill("black");  
    
    text(" " + a[0], 110, 70);
    // rotate(PI/4);
    ellipse(150,b,26,18);
    fill(220);
    ellipse(150,b,16);
    // rotate(-PI/4);
    for( let i = 0; i<5; i++) {
        line(10,100+20*i,290,100+20*i);
        line(10,220+20*i,290,220+20*i);
    }
    // image(gClef,30,100);
    // image(fClef,30,200);
}
