"use strict";


// PART 1: SHOW A FORTUNE


  $('#get-fortune-button').on('click', () => {
    $.get('/fortune', (results) => {
        const fortuneResult = results;
        $('#fortune-text').html(fortuneResult);
      });
  });

    // TODO: get the fortune and show it in the #fortune-text div

// $('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    $('#btn btn-primary').on('click', evt => {
        evt.preventDefault();
        let formData = {"zipcode": $("#zipcode-field").val()};
      });
    let url = "/weather.json"
    $.get(url, formData, (results) => {
      alert(`The weather is ${results.forecast}`);
    });
    }

    

            ;
    

    // TODO: request weather with that URL and show the forecast in #weather-info
}
showWeather();

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


