let interval = document.getElementById("interval").value;
let numberOfSets = document.getElementById("numberOfSets").value;
var beep = document.getElementById("myaudio");

// resetClock
function resetClock(){
    window.location.reload();
}

function update(curr,inter) {
    document.getElementById("timer2").innerHTML= curr
    let current = Number(document.getElementById("timer2").innerHTML);
        if (current % 60 == 0){
            beep.play();
        } else if ((current - inter) % 60 == 0){
            beep.play();
        } else {}
    }
// startClock
function startClock() {
    // if (document.getElementById("interval20").checked) {
    //     interval = 20
    // } else if (document.getElementById("interval40").checked) {
    //     interval = 40
    // } else if (document.getElementById("interval60").checked) {
    //     interval = 60
    // } else {interval=2};
    interval = document.getElementById("interval").value;
    numberOfSets = document.getElementById("numberOfSets").value;

    for(let secs=0; secs<=numberOfSets*60;secs++){
        setTimeout(()=>update(secs,interval),secs*1000);
    }
}