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
  // printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();

  minDec.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
  minUni.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();

  secDec.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
  secUni.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(split) {
  const li = document.createElement('li');
  li.innerText = split;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();

  btnLeft.innerText = 'START';
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');

  btnRight.innerText = 'RESET';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
}

function setSplitBtn() {
  const split = chronometer.split();
  printSplit(split);
}

function setStartBtn() {
  chronometer.start(printTime);

  btnLeft.innerText = 'STOP';
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');

  btnRight.innerText = 'SPLIT';
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  minDec.innerText = '0';
  minUni.innerText = '0';
  secDec.innerText = '0';
  secUni.innerText = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
