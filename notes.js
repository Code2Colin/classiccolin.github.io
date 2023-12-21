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
let currentNote;
let notePosition; 
var score = 0;
var wrong = 0;


function preload(){
    fClef = loadImage('216px-FClef.png');
    gClef = loadImage('GClef.png');
}

function setup() {
    var canvas = createCanvas(300,320); //(X,Y)
    canvas.parent("myCanvas");
    background(230);
    randomNote();
    frameRate(speed);

    for (var i = 0; i < pianotes.length; i++){
        var note = createButton(pianotes[i][0]);
        note.mousePressed(checkNote, pianotes[i][0]);
        note.parent("myCanvas");
    }


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
    text(" " + currentNote[0], 110, 70);
    // textSize(3);
    // text("Speed "+speed,0,0);
}

function checkNote(guess) {
    if (this.elt.innerText == currentNote[0] ) {
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
    currentNote = random(pianotes);
    notePosition = random(currentNote[1]);
    strokeWeight(2);
    textSize(60);
    fill("black");  
    // text(" " + currentNote[0], 110, 70);

    ellipse(150,notePosition,28,18);
    fill(230);
    ellipse(150,notePosition,18);
    if(notePosition==200) {
        line(120,notePosition,180,notePosition);
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
