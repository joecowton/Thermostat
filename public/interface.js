
$(document).ready(function () {
  var thermostat = new Thermostat()
  function updateTemp () {

    $('#temperature').text(thermostat.temperature);
    $('#temperature').text(thermostat.getTemp());
    if(thermostat.checkUsage() === 0){
      $('#temperature').css('color', 'green')
    } if (thermostat.checkUsage() === 1) {
      $('#temperature').css('color', 'yellow')
    } if(thermostat.checkUsage() === 2){
      $('#temperature').css('color', 'red')
    }
  }


  updateTemp();
  switchColor();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + 'london' + '&appid=8e6bb843aaeecb68aa5a7a85d4d34202&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })

  $.get('/data', function(data) {
    if (thermostat.getTemp() == 0){
      thermostat.setTemp(20)
      // $('#temperature').text(thermostat.getTemp());
      updateTemp()
    }
    else {
      thermostat.setTemp(data.currentTemp);
      // $('#temperature').text(thermostat.getTemp());
      updateTemp()
    }
  });

  $.get('/data', function(data) {
    if (data.powerSaving == null ){
      thermostat.setPowerSave(true)
    }
    else {
      thermostat.setPowerSave(data.powerSaving);
    }
    switchColor(); 
  });

  function postTemp () {
    console.log(thermostat.getTemp());
    $.post('/temperature', { temp: thermostat.getTemp() }, function(){
    });
  }

  function postSwitch() {
    $.post('/switch', { switch: thermostat.getSwitch() }, function(){
    });
  }

  $('#temperature-up').on('click', function () {
    thermostat.up()
    updateTemp()
    postTemp()
  })

  $('#temperature-down').on('click', function () {
    thermostat.down()
    updateTemp()
    postTemp()
  })
  $('#temperature-reset').on('click', function () {
    thermostat.resets()
    updateTemp()
    postTemp()
  })
  $('#powersaving-switch').on('click', function() {
    switchMode();
    postSwitch();
  })

  function switchColor() {
    if (thermostat.powerSave == true) {
      $('#powersaving-switch').css('background-color', 'green');
    } else {
      $('#powersaving-switch').css('background-color', 'orange');
    }
  }

  function switchMode() {
    thermostat.switch();
    updateTemp();
    switchColor();
  }

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8e6bb843aaeecb68aa5a7a85d4d34202&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })
});
