function setup() {

    createCanvas(120,120);

    const notes =["A","B","C","D","E","F","G"];

}

function draw() {

    background(220);

    //const notes =["A","B","C","D","E","F","G"];

    let a = random(notes);

    textSize(16);

    text(a,50,50);
    

}

