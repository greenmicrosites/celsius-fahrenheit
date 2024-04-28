let inFahrenheit = prompt("Zadej hodnotu ve Fahreinheitech")
let inCelsius = (5*(inFahrenheit - 32))/9
//document.querySelector(".fahrenheit").innerHTML = inFahrenheit
//document.querySelector(".celsius").innerHTML = Math.round(inCelsius)
document.body.innerHTML += "<div>" + inFahrenheit + " stupňů Fahrenheita je " + Math.round(inCelsius) + " stupňů Celsia."