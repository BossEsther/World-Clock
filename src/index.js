function updateTime(){
    let sydneyCity = document.querySelector("#sydney");
    let sydneyDateElement = sydneyCity.querySelector(".date");
    let sydneyTimeElement = sydneyCity.querySelector(".time");

    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("hh:mm:ss [<small>]A[<small/>]");


    let lagosCity = document.querySelector("#lagos");
    let lagosDateElement = lagosCity.querySelector(".date");
    let lagosTimeElement = lagosCity.querySelector(".time");

    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format("hh:mm:ss [<small>]A[<small/>]");
}
setInterval(updateTime, 1000);