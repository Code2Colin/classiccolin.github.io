// let value = 0 ;
// let back = 200 ;
// let c;

getData();

async function getData() {
    const myRequest = new Request('https://raw.githubusercontent.com/classiccolin/classiccolin.github.io/main/ZonAnnTs+dSST.csv');
    const response = await fetch(myRequest);
    const data = await response.text();
    console.log(data);

    const rows = data.split("\n").slice(1);
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[0];
        const temp = row[1];
        xlabels.push(year);
        ylables.push(temp);
        console.log(year);
        console.log(temp);
    });
}
const xlabels = [];
const ylabels = [];
const ctx = document.getElementById('mychart').getContext('2d');
const myChart = new CharacterData(ctx, {
    type:'line',
    data:{
        labels: xlabels,
        datasets: [
            {
                data:ylabels
            }
        ]
    }
}
)
// papa.parse('test.csv')



// function setup(){
//     // createCanvas(400,400) ;
//     // let canvas = createCanvas(200,200) ;
//     let canvas = createCanvas(200,200) ;
//     canvas.parent('canvasforHTML');
    
//     // let img = createImage(200,200) ;
//     // image(img,0,0) ;
//     background(back) ;
// }


// function draw(){
//     // background(100) ;
//     if (mouseIsPressed === true) {
//         strokeWeight(10) ;
//     } else {
//         strokeWeight(0) ;
//     }
//     // point(mouseX,mouseY) ;
//     line(mouseX,mouseY,pmouseX,pmouseY) ;
//     // mousePressed() ;
// }

// // function mousePressed() {
// //     c = get() ;
// //     image(c, width/2, height/2) ;
// // }

