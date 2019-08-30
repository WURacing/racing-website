$(document).ready(function () {
    var mohelaURL = "https://api.darksky.net/forecast/8b65e35335318ac7aedbdf595b9d8c0d/38.668321,-90.629687";
    var gatewayURL = "https://api.darksky.net/forecast/8b65e35335318ac7aedbdf595b9d8c0d/38.645869,-90.134260";
    var emersonURL = "https://api.darksky.net/forecast/8b65e35335318ac7aedbdf595b9d8c0d/38.731915,-90.282067";

    var skyconsWhite = new Skycons({ "color": "#DF0000" });
    var skyconsRed1 = new Skycons({ "color": "#DF0000" });
    var skyconsRed2 = new Skycons({ "color": "#DF0000" });
    $.ajax({
        dataType: "jsonp",
        mode: 'no-cors',
        url: gatewayURL,
        success: function (weatherData) {
            $('#gatewayCurrTemp').html(weatherData.currently.temperature + " &#8457");
            $('#gatewayFeelsLike').html(weatherData.currently.apparentTemperature + " &#8457");
            $('#gatewayProbPrec').text(weatherData.currently.precipProbability  + " %");
            $('#gatewayWindSpeed').text(weatherData.currently.windSpeed + " mph");
            $('#gatewayDailySummary').text(weatherData.daily.summary);
            skyconsRed1.add("gatewayIcon", weatherData.currently.icon);
            skyconsRed1.play();
        }
    });
    $.ajax({
        dataType: "jsonp",
        mode: 'no-cors',
        url: emersonURL,
        success: function (weatherData) {
            $('#emersonCurrTemp').html(weatherData.currently.temperature + " &#8457");
            $('#emersonFeelsLike').html(weatherData.currently.apparentTemperature + " &#8457");
            $('#emersonProbPrec').text(weatherData.currently.precipProbability + " %");
            $('#emersonWindSpeed').text(weatherData.currently.windSpeed  + " mph");
            $('#emersonDailySummary').text(weatherData.daily.summary);
            skyconsWhite.add("emersonIcon", weatherData.currently.icon);
            skyconsWhite.play();
        }
    });
    $.ajax({
        dataType: "jsonp",
        mode: 'no-cors',
        url: mohelaURL,
        success: function (weatherData) {
            $('#mohelaCurrTemp').html(weatherData.currently.temperature + " &#8457");
            $('#mohelaFeelsLike').html(weatherData.currently.apparentTemperature + " &#8457");
            $('#mohelaProbPrec').text(weatherData.currently.precipProbability  + " %");
            $('#mohelaWindSpeed').text(weatherData.currently.windSpeed  + " mph");
            $('#mohelaDailySummary').text(weatherData.daily.summary);
            skyconsRed2.add("mohelaIcon", weatherData.currently.icon);
            skyconsRed2.play();
            $('#content').animate({ opacity: '1' }, {duration: 500});
        }
    });
});

