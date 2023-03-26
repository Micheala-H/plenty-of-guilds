let realmChoiceEl = document.querySelector(`#realm-choice`)
let nameChoiceEl = document.querySelector(`#name-choice`)
let characterFormEl = document.querySelector('#character-form');
let raiderUrl = `https://raider.io/api/v1/characters/profile?region=us`
let characterNameEl = document.querySelector('.character-name')
let realmEl = document.querySelector(`.realm`)
let characterRaceEl = document.querySelector('.race')
let specNameEl = document.querySelector('.active-spec-name')
let specRoleEl = document.querySelector('.active-spec-role')
let genderEl = document.querySelector('.gender')
let factionEl = document.querySelector(`.faction`)
let pointsEl = document.querySelector(`.a-points`)
let killsEl = document.querySelector(`.kills`)
let saveBtnEl = document.querySelector(`#save-character`)



let ctyBtn = []


const newCharacter = function (event) {
    event.preventDefault();
    let otherRealm = realmChoiceEl.value.trim();
    let otherName = nameChoiceEl.value.trim();
    console.log(otherRealm);
    console.log(otherName);
    if (otherRealm && otherName !== "") {
        findCharacter(otherRealm, otherName)
    } else {
        window.alert("please enter a valid realm.");
    }
}
let findCharacter = function (otherRealm, otherName) {
    console.log(otherRealm);
    console.log(otherName);
    fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=` + otherRealm + `&name=` + otherName)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    const name = data.name
                    const race = data.race
                    const specName = data.active_spec_name
                    const specRole = data.active_spec_role
                    const gender = data.gender
                    const faction = data.faction
                    const achievementPoints = data.achievement_points
                    const honorableKills = data.honorable_kills
                    const realm = data.realm
                    realmEl.textContent = realm
                    characterNameEl.textContent = name
                    characterRaceEl.textContent = race
                    specNameEl.textContent = specName
                    specRoleEl.textContent = specRole
                    genderEl.textContent = gender
                    factionEl.textContent = faction
                    pointsEl.textContent = achievementPoints
                    killsEl.textContent = honorableKills
                });
            }
        })
}
const saveCharacter = function (event) {
    event.preventDefault();
    let otherRealm = realmChoiceEl.value.trim();
    let otherName = nameChoiceEl.value.trim();
    console.log(otherRealm);
    console.log(otherName);
    if (otherRealm && otherName !== "") {
        sendCharacter(otherRealm, otherName)
    } else {
        window.alert("please enter a valid realm.");
    }
}
let sendCharacter = function (otherRealm, otherName) {
    fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=` + otherRealm + `&name=` + otherName)
        .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                const name = data.name
                const race = data.race
                const specName = data.active_spec_name
                const specRole = data.active_spec_role
                const gender = data.gender
                const faction = data.faction
                const achievementPoints = data.achievement_points
                const honorableKills = data.honorable_kills
                const realm = data.realm
                const characterData = {
                    name: name,
                    realm: realm,
                    race: race,
                    spec: specName,
                    role: specRole,
                    gender: gender,
                    faction: faction,
                    points: achievementPoints,
                    kills: honorableKills
                }
                //console.log(JSON.stringify(characterData))
                    fetch('/api/characters', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(characterData)
                })
                    .then(function(response) {
                        if (response.ok) {
                            console.log("Working")
                        } else {
                            console.log("not working")
                        }
                })
                    .catch(function(error) {
                        console.error(error);
                });
            });
        }
    })
}
characterFormEl.addEventListener('submit', newCharacter);
saveBtnEl.addEventListener('click', saveCharacter);