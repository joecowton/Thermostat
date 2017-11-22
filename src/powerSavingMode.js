'use strict';

function PowerSavingMode() {
  this.status = true;
}

PowerSavingMode.prototype = {
  on: function() {
     this.status = true;
     // thermostat.setmax
  },
  off: function(){
   this.status = false;
  }
};
