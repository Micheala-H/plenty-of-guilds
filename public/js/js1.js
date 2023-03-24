let relm = document.querySelector(`#relm-choice`)
let name = document.querySelector(`#name-choice`)
let userFormEl = document.querySelector('#character-form');
let weatherurl = `https://raider.io/api/v1/characters/profile?region=us`
let currentCityText = document.querySelector('.lat-name')
let currentTempText = document.querySelector('.lon-race')
let currentWindText = document.querySelector('.active-spec-name')
let currentHumidText = document.querySelector('.active-spec-role')
let currentWeatherIcon = document.querySelector('.gender')
let currentWeatherImg1 = document.querySelector(`.faction`)
let currentWeatherImg2 = document.querySelector(`.a-points`)
let currentWeatherImg3 = document.querySelector(`.kills`)
let currentWeatherImg4 = document.querySelector(`.relm`)

let ctyBtn = []


const newCityWeather = function (event) {
    event.preventDefault();
    let otherRelm = relm.value.trim();
    let otherName = name.value.trim();
console.log(otherName);
console.log(otherRelm);
    if (otherRelm && otherName !== "") {
        textCurrentWeather(otherRelm,otherName)
    } else {
        window.alert("please enter a valid city");
    }
}
let textCurrentWeather = function (otherRelm,otherName) {
    fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=` + otherRelm + `&name=` + otherName)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    const lat = data.name
                    const lon = data.race
                    const cityName = data.active_spec_name
                    const cityTempHigh = data.active_spec_role
                    const cityTempLow = data.gender
                    const wind = data.faction
                    const humid = data.achievement_points
                    const weatherIcon = data.honorable_kills
                    const todaysDateUnix = data.realm
                    //const todaysDate = dayjs.unix(todaysDateUnix).format('MM/DD/YYYY')
                     currentCityText.textContent = `Realm: ` + todaysDateUnix
 currentTempText.textContent = `Name: ` + lat
 currentWindText.textContent = `Race: ` + lon 
 currentHumidText.textContent = `Active Spec Name:` +cityName
 currentWeatherIcon.textContent = `Active Spec Role: ` + cityTempHigh
 currentWeatherImg1.textContent = `Gender: ` + cityTempLow
 currentWeatherImg2.textContent = `Faction: ` + wind
 currentWeatherImg3.textContent = `Achievement Points: ` + humid
 currentWeatherImg4.textContent = `Honorable Kills: ` + weatherIcon
                    //let cityType = cityName
                    //ctyBtn.push(cityType)
                   // localStorage.setItem("city", JSON.stringify(ctyBtn))
                   // makeBtn()
                    //getFiveDayForcast(lat, lon)
                });
            }
        })
}
userFormEl.addEventListener('submit', newCityWeather);