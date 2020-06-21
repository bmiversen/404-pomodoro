var audio = new Audio('bimkorgen.mp3');
window.onload = (e) => 
{
    let workbtn = document.getElementById("btn-work");
    let shbrkbtn = document.getElementById("btn-shortbreak");
    let lngbrkbtn = document.getElementById("btn-longbreak");
    let counter = document.getElementById("view-timer");
    workbtn.onclick = () => {countDown(counter, 25*60)};
    shbrkbtn.onclick = () => {countDown(counter, 5*60)};
    lngbrkbtn.onclick = () => {countDown(counter, 15*60)};
    
}

function minSec(seconds) {
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;
    return [min, sec];
}

var timer;
function countDown(counter, seconds) {
    let timeLeft = seconds;
    audio.play();
    clearInterval(timer);
    timer = setInterval(
        function() {
            if (timeLeft <= 0) {
                clearInterval(timer);
            }
            let [min, sec] = minSec(seconds);
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            // counter.textContent = "HELLO!";
            counter.textContent = min + ":" + sec;
            timeLeft--;
            seconds = timeLeft;
        },
        1000
    )
}

