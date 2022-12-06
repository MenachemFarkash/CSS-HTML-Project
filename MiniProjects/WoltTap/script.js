let timeLeft = 3500;
let taps = 0;
let playing = false;
let tapsRecord = 0;

function firstTap() {
    if (playing == false) {
        timeHandler();
        playing = true;
    }
}

function tapsHandler() {
    if (playing == true && timeLeft > 0) {
        taps++;
        document.getElementById('tapCounter').innerHTML = 'Taps: ' + taps;
    }
}

function timeHandler() {
    if (timeLeft > -1000) {
        timeLeft = timeLeft - 10;
        if (timeLeft >= 0) {
            document.getElementById('tapContainer').innerHTML = timeLeft;
        }
        let t = setTimeout(function () {
            timeHandler();
        }, 10);
    } else resetHandler();
}

function resetHandler() {
    if (taps >= tapsRecord) {
        tapsRecord = taps;
        document.getElementById('tapsRecord').innerHTML = 'Record: ' + tapsRecord;
    }
    playing = false;
    taps = 0;
    timeLeft = 3500;
    document.getElementById('tapContainer').innerHTML = timeLeft;
}
