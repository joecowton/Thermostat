'use strict'
const StartingTemp = 20
const MinTemp = 10
var maxTemp = 32
var maxSaveTemp = 25
var MAX = 25

function Thermostat (st = StartingTemp) {
  this.temperature = st
  this.powerSave = true
};

Thermostat.prototype = {

  setPowerSave: function (state) {
    this.powerSave = state
  },

  setTemp: function (temp) {
    this.temperature = temp
  },

  getTemp: function () {
    return this.temperature
  },

  getSwitch: function () {
    return this.powerSave
  },

  up: function () {
    if (this.temperature >= MAX) {
      throw ('Max temperature is exceeded')
    } else {
      this.temperature += 1
    }
  },

  down: function () {
    if (this.temperature <= MinTemp) {
      throw ("Temperature can't go below 10")
    } else {
      this.temperature -= 1
    }
  },

  resets: function () {
    this.temperature = StartingTemp
  },

  switch: function () {
    this.powerSave = !this.powerSave
    if (this.powerSave === true) {
      MAX = maxSaveTemp
      if (this.temperature > 25)
        this.temperature = maxSaveTemp
    } else {
      MAX = maxTemp
    }
  },

  checkUsage: function () {
    if (this.temperature < 18) return 0
    if (this.temperature < 25) return 1
    if (this.temperature >= 25) return 2
  }
};
