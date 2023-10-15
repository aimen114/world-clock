function displayCities() {
  let halifaxElement = document.querySelector("#halifax-date");
  if (halifaxElement) {
    let halifaxTimeElement = document.querySelector("#halifax-time");
    let halifax_moment = moment().tz("America/Halifax");
    halifaxElement.innerHTML = halifax_moment.format("MMMM Do YYYY");
    halifaxTimeElement.innerHTML = halifax_moment.format(
      "hh : mm : ss [<small>]a[</small>]"
    );
  }
  let winnipegElement = document.querySelector("#winnipeg-date");
  if (winnipegElement) {
    let winnipegTimeElement = document.querySelector("#winnipeg-time");
    let winnipeg_moment = moment().tz("America/Winnipeg");
    winnipegElement.innerHTML = winnipeg_moment.format("MMMM Do YYYY");
    winnipegTimeElement.innerHTML = winnipeg_moment.format(
      "hh : mm : ss [<small>]a[</small>]"
    );
  }
  let newyorkElement = document.querySelector("#newyork-date");
  if (newyorkElement) {
    let newyorkTimeElement = document.querySelector("#newyork-time");
    let newyork_moment = moment().tz("America/New_York");
    newyorkElement.innerHTML = newyork_moment.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyork_moment.format(
      "hh : mm : ss [<small>]a[</small>]"
    );
  }
}

setInterval(displayCities, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="row">
          <div class="col">
            <h2>${cityName}</h2>
            <div class="date" id="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="col text-end">
            <div class="time" id="time">${cityTime.format(
              "hh : mm : ss"
            )} <small> ${cityTime.format("A")}</small></div>
          </div>
        </div>
        <a href="/">All Cities</a>`;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
