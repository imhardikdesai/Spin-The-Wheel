let wheel = document.getElementById('wheel');
let arrow = document.getElementById('arrow');
let btnSpin = document.getElementById('btnSpin');
let btnReset = document.getElementById('btnReset');
function spinWheel() {
    let num = Math.floor(720 + (1800 - 720) * Math.random());
    console.log(num);
    wheel.style.transitionProperty = "all";
    wheel.style.transitionDuration = "7s";
    wheel.style.transitionTimingFunction = "ease";
    wheel.style.transform = `rotate(${num}deg)`;
    btnReset.style.display = 'block';
    btnSpin.style.display = 'none';
}

