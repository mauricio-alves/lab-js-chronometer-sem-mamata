class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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

    // version 2
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  }

  stop() {
    // added return
    return clearInterval(this.intervalId);
  }

  reset() {
    // added return
    return (this.currentTime = 0);
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
