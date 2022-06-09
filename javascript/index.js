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

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
  minUni.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  );
}

function printSeconds() {
  secDec.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
  secUni.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  );
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerText = 'START';
  btnLeft.classList.toggle('stop');
  chronometer.stop();
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.classList.toggle('split');
  chronometer.split();
}

function setStartBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.classList.toggle('stop');
  chronometer.start();
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.classList.toggle('split');
  chronometer.reset();
}

// Start/Stop Button
btnLeft.addEventListener('click', (event) => {
  event.preventDefault();
  if (btnLeft.innerText === 'START') {
    setStartBtn();
    setSplitBtn();
    printTime();
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
