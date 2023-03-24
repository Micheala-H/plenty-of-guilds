let realmChoiceEl = document.querySelector(`.realm-choice`)
let nameChoiceEl = document.querySelector(`.name-choice`)
let characterFormEl = document.querySelector('.character-form');
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


let ctyBtn = []


const newCharacter = function (event) {
    event.preventDefault();
    let otherRealm = realmChoiceEl.value.trim();
    let otherName = nameChoiceEl.value.trim();
    if (otherRealm && otherName !== "") {
        findCharacter(otherRealm, otherName)
    } else {
        console.alert("please enter a valid realm.");
    }
}
let findCharacter = function (otherRealm ,otherName) {
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
 characterNameEl.textContent = `Realm: ` + realm
 characterRaceEl.textContent = `Name: ` + name
 specNameEl.textContent = `Race: ` + race 
 specRoleEl.textContent = `Active Spec Name:` +specName
 genderEl.textContent = `Active Spec Role: ` + specRole
 factionEl.textContent = `Gender: ` + gender
 pointsEl.textContent = `Faction: ` + faction
 killsEl.textContent = `Achievement Points: ` + achievementPoints
 realmEl.textContent = `Honorable Kills: ` + honorableKills
                });
            }
        })
}
let sendCharacter = async (event) => {
    console.log(event);
    event.preventDefault();
    const name = document.querySelector('.character-name').value.trim();
    const race = document.querySelector('.race').value.trim();
    const aSpecName = document.querySelector('.active-spec-name').value.trim();
    const aSpecRole = document.querySelector('.active-spec-role').value.trim();
    const gender = document.querySelector('.gender').value.trim();
    const faction = document.querySelector('.faction').value.trim();
    const aPoints = document.querySelector('.a-points').value.trim();
    const kills = document.querySelector('.kills').value.trim();
    const realm = document.querySelector('.realm').value.trim();

    const response = await fetch(`api/characters`, {
        method: `POST`,
        body: JSON.stringify({name,race,aSpecName,aSpecRole,gender,faction,aPoints,kills,realm}),
        headers: { 'Content-Type': 'application/json' },
    });
     if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
}
characterFormEl.addEventListener('submit', findCharacter);