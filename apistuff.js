
fetch('https://swapi.dev/api/people/1/').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
})

fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(data => {
        console.log(data.birth_year)
    })