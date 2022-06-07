class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
    // setInterval(() => printTimeCallback, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime % 60 === 0) {
      return Math.floor(this.currentTime / 60);
    } else if (this.currentTime > 60) {
      return this.currentTime - 60;
    } else {
      return this.currentTime;
    }
  }

  computeTwoDigitNumber(value) {
    let twoNumbers = value;
    if (value === 0) {
      twoNumbers = '00';
    } else if (value <= 9) {
      twoNumbers = '0' + twoNumbers;
    } else {
      twoNumbers;
    }
    return twoNumbers.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // const result = `${this.computeTwoDigitNumber(
    //   this.getMinutes
    // )}:${this.computeTwoDigitNumber(this.getSeconds)}`;
    // return result
  }
}

const chronometer = new Chronometer();
console.log(chronometer);

chronometer.currentTime = 74;
console.log(chronometer.currentTime)
console.log(chronometer.getMinutes());
console.log(chronometer.getSeconds());

console.log(chronometer.computeTwoDigitNumber(3));

console.log(chronometer.reset());
console.log(chronometer.currentTime);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
