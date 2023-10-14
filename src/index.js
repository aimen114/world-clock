setInterval(function () {
  let vancouverDateElement = document.querySelector("#v-date");
  let vancouverTimeElement = document.querySelector("#v-time");
  let vancouvermoment = moment().tz("America/Vancouver");
  vancouverDateElement.innerHTML = vancouvermoment.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouvermoment.format(
    "hh : mm : ss [<small>]a[</small>]"
  );
}, 1000);
