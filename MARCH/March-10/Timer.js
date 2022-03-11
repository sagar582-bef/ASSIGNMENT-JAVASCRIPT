let second;
let total = 300;

const showTimerSecond = function () {
    let m = Math.floor(total / 60);
    let s = Math.floor(total % 60);
    const op = document.getElementById("minute-text");
    op.innerText = `${m}m`;
    const op2 = document.getElementById("second_text");
    op2.innerText = `${s}s`;

    total = total - 1;
    if (m == 0 && s == 0) {
        clearInterval(second);
        document.getElementById("message").innerHTML = "Times up";
        document.getElementById("message").style.color = "green";
        document.getElementById("message").style.fontFamily = "cursive";
    }
}

const stopTimer = function () {

    clearInterval(second);
    document.getElementById("message").innerText = "You pause the timer";
    document.getElementById("message").style.color = "red";
    document.getElementById("message").style.fontFamily = "cursive";
}

const startTimer = function () {
    second = setInterval(showTimerSecond, 1000);
}

const start_btn = document.getElementById("btn");
start_btn.addEventListener('click', startTimer);
const stop_btn = document.getElementById("stop");
stop_btn.addEventListener('click', stopTimer);

