"use strict";
const startingTemperature = 20
function Thermostat() {
  this.temperature = startingTemperature
}

Thermostat.prototype.up = function () {
  this.temperature += 1;
};
