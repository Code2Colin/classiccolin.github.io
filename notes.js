function setup() {

    createCanvas(300,300);

    const notes =["A","B","C","D","E","F","G"];

}

function draw() {

    background(220);

    //const notes =["A","B","C","D","E","F","G"];

    let a = random(notes);
    strokeWeight(12);

    textSize(64);

    text("Note" + a, 150, 150);
    

}

