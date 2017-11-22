"use strict";
const StartingTemp = 20
const MinTemp = 10
var maxTemp = 32
var maxSaveTemp = 25
var MAX = 25

function Thermostat(st = StartingTemp) {
  this.temperature = st
  this.powerSave = true
}

Thermostat.prototype = {
  up: function() {
    if (this.temperature >= MAX){
      throw ('Max temperature is exceeded');
    } else {
    this.temperature += 1;
    }
  },
  down: function() {
    if (this.temperature === MinTemp) {
      throw ("Temperature can't go below 10");
    } else {
      this.temperature -= 1;
    }
  },
  switch: function() {
    console.log(this.powerSave);
    this.powerSave = !this.powerSave
    if (this.powersave === true) {
      MAX = maxSaveTemp;
    } else {
      MAX = maxTemp;
    }
  }
};
