'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', res => {
    $('#fortune-text').text(res);
  });
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};

  // TODO: request weather with that URL and show the forecast in #weather-info
  $.get(url, formData, res => {
    $('#weather-info').html(res.forecast);
  });
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  const url = '/order-melons.json';
  const formData = {qty: $('#qty-field').val(), melon_type:$('#melon-type-field').val()};
  const qty = $('#qty-field');
  // TODO: show the result message after your form
  $.post(url,formData, res =>  {
      // if statement 
      if(res.code === 'OK'){
        $('#order-status').html(`${res.msg}`);
      } else{
        $('#order-status').addClass('error-mes').css('color', "red");
        $('#order-status').html(`${res.msg}`);
      } //error 
   // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

  });
}

$('#order-form').on('submit', orderMelons);
