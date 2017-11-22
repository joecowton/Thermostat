"use strict";
const StartingTemp = 20
const MinTemp = 10
function Thermostat(st = StartingTemp) {
  this.temperature = st
}

Thermostat.prototype = {
  up: function() {
    this.temperature += 1;
  },
  down: function() {
    if (this.temperature === MinTemp) {
      throw ("Temperature can't go below 10");
    } else {
      this.temperature -= 1;
    }
  }
};
