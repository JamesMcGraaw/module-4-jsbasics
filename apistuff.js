fetch('https://swapi.dev/api/people/1/')
    .then(function (res) {
        return res.json()
    }).then(function (data) {
    displayCharacter(data)
    }).catch(function(error){
        console.log(error)
    })

function displayCharacter(data) {
    const nameTarget =
        document.querySelector('.name')
    const hairTarget =
        document.querySelector('.hair')

    nameTarget.textContent = data.name
    hairTarget.textContent = data.hair_color
}