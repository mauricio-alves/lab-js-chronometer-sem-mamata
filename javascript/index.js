const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerText = 'START';
  btnLeft.classList.toggle('stop');
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.classList.toggle('split');
}

function setStartBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.classList.toggle('stop');
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.classList.toggle('split');
}

// Start/Stop Button
btnLeft.addEventListener('click', (event) => {
  event.preventDefault();
  if (btnLeft.innerText === 'START') {
    setStartBtn();
    setSplitBtn();
  } else {
    setStopBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', (event) => {
  event.preventDefault();
  // if (btnRight.innerText === 'RESET') {} else {}
});
