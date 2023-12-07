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
var noteA;
var noteB;
var noteC;
var noteD;
var noteE;
var noteF;
var noteG;
var score = 0;
var wrong = 0;



function preload(){
    fClef = loadImage('216px-FClef.png');
    gClef = loadImage('GClef.png');
}

function setup() {
    
    var canvas = createCanvas(300,320); //(X,Y)
    canvas.parent("myCanvas")
    background(230);
    randomNote();
    frameRate(speed);
 
    
    noteA = createButton("A");
    noteA.mousePressed(checkNote,"A");
    noteA.parent("myCanvas");
    noteB = createButton("B");
    noteB.mousePressed(checkNote,"B");
    noteB.parent("myCanvas");
    noteC = createButton("C");
    noteC.mousePressed(checkNote,"C");
    noteC.parent("myCanvas");
    noteD = createButton("D");
    noteD.mousePressed(checkNote,"D");
    noteD.parent("myCanvas");
    noteE = createButton("E");
    noteE.mousePressed(checkNote,"E");
    noteE.parent("myCanvas");
    noteF = createButton("F");
    noteF.mousePressed(checkNote,"F");
    noteF.parent("myCanvas");
    noteG = createButton("G");
    noteG.mousePressed(checkNote,"G");
    noteG.parent("myCanvas");

    selectall


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

function checkNote(guess) {
    if (this.elt.innerText == a[0] ) {
        score++;
        console.log(score);
        select('#score').elt.innerText = score
    } else {
        wrong++;
        console.log(wrong);
        select('#wrong').elt.innerText = wrong
    }
    // console.log(this.elt.innerText);
    // console.log(a[0]);
    // console.log(score);
}

function randomNote() {
    a = random(pianotes);
    b = random(a[1]);
    strokeWeight(2);
    textSize(60);
    fill("black");  
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
