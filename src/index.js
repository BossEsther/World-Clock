function updateTime(){
    let sydneyCity = document.querySelector("#sydney");
    if(sydneyCity){
        let sydneyDateElement = sydneyCity.querySelector(".date");
        let sydneyTimeElement = sydneyCity.querySelector(".time");

        let sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format("hh:mm:ss [<small>]A[<small/>]");
    };

    let lagosCity = document.querySelector("#lagos");
    if(lagosCity){
        let lagosDateElement = lagosCity.querySelector(".date");
        let lagosTimeElement = lagosCity.querySelector(".time");

        let lagosTime = moment().tz("Africa/Lagos");

        lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
        lagosTimeElement.innerHTML = lagosTime.format("hh:mm:ss [<small>]A[<small/>]");
    }

    let romeCity = document.querySelector("#roman");
    if(romeCity){
        let romeDateElement = romeCity.querySelector(".date");
        let romeTimeElement = romeCity.querySelector(".time");

        let romeTime = moment().tz("Europe/Rome");

        romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
        romeTimeElement.innerHTML = romeTime.format("hh:mm:ss [<small>]A[<small/>]");
    }



}

function updateCountry(event){
    let timeZone = event.target.value;
    if(timeZone === "current"){
        timeZone = moment.tz.guess();
    }
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityTimeZone = moment().tz(timeZone);
    let cityTimeZoneElement = document.querySelector("#change-city");
    cityTimeZoneElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTimeZone.format("MMMM	Do YYYY")}</div>
        </div>
        <div class="time">${cityTimeZone.format("h:mm:ss")} <small>${cityTimeZone.format(
        "A"
    )}</small></div>
    </div>
    <a href="/" class="citylink">All Cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);



let selectCountries = document.querySelector("#countries");
selectCountries.addEventListener("change" , updateCountry);