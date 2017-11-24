(function() {
    const HOST = "http://weixin.jirengu.com";
    const DAYTIME_SEPERATOR = 12;
    const MAP_DAY = {
        "周一" : "Mon",
        "周二" : "Tue",
        "周三" : "Wed",
        "周四" : "Thu",
        "周五" : "Fri",
        "周六" : "Sat",
        "周日" : "Sun",
    }

    let myLocation;

    function formatTime(date) {
        let currentHours = date.getHours()
        let currentMinutes = date.getMinutes()
        if( currentMinutes < 10 ) {
            currentMinutes = "0" + currentMinutes
        }
        let suffix = currentHours > DAYTIME_SEPERATOR ? "pm" : "am"
        return (`${currentHours}:${currentMinutes} ${suffix}`)
    }

    function setupTime(){
        let currentTime = new Date();
        let timeNode = $("#time")
        timeNode.html(formatTime(currentTime))
        setTimeout(setupTime, 60000);
    }

    setupTime()

    $.ajax(`${HOST}/weather/`)
        .done(function(info) {
            let weather = info.weather[0]
            myLocation = weather.city_name
            let localNode = $("#location")
            localNode.html(myLocation)
            showWeather(weather)
        })

    function showWeather(weather) {
        let todayInfo = weather.now;
        let tTempNode = $("#t-temp")
        tTempNode.html(todayInfo.temperature + "°")

        let tImg = $("#t-img")
        tImg.attr("src", `${HOST}/images/weather/code/${todayInfo.code}.png`)
        
        let tWind = $("#t-wind")
        tWind.html(parseInt(todayInfo["wind_speed"]) + "mph")

        let futureInfo = weather.future
        let fdates = $("#future .f-date")
        let fimgs = $("#future .f-img")
        let ftemps = $("#future .f-temp")

        fdates.each(function(index, fdate) {
            perDay = futureInfo[index]
            $(fdate).html(MAP_DAY[perDay.day])
            fimgs.eq(index).attr("src", `${HOST}/images/weather/code/${perDay["code1"]}.png`)
            ftemps.eq(index).html(perDay.high + "°")
        })
    }

    $(document).on("keydown", function(e) {
        if ( e.keyCode === 13 ) {
            let inputNode = $("#u-inp-city")
            let userInput = inputNode.val()
            let chaxun = `${HOST}/weather/cityid?location=${userInput}`
            console.log(chaxun)
            $.ajax(chaxun)
                .done(function(res) {
                    console.log(res)
                    console.log(res.results[0])
                    let matchedCity = res.results[0];
                    let cityId = matchedCity.id;
                    $.ajax(`${HOST}/weather/now?cityid=${cityId}`)
                        .done(function(weatherInfo) {
                            let weather = weatherInfo.weather[0]
                            showWeather(weather)
                        })
                })
        }
    })
})()