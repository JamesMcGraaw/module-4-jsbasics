// 1. Create an array of objects describing your classmates
// Each object should have the following fields: name, favourite food, hometown

const greyhounds = [
    {
        name: 'Anna',
        favFood: 'Dates',
        homeTown: 'Cilcian'
    },
    {
        name: 'Michael',
        favFood: 'Pizza',
        homeTown: 'St Albans'
    },
    {
        name: 'Brent',
        favFood: 'Any pasta',
        homeTown: 'Pretoria'
    },
    {
        name: 'Adam',
        favFood: 'Burrito',
        homeTown: 'Caerphilly'
    },
    {
        name: 'Dom',
        favFood: 'Yoghurt',
        homeTown: 'Bath'
    },
    {
        name: 'Henry',
        favFood: 'Yoghurt',
        homeTown: 'Hong Kong'
    },
    {
        name: 'James',
        favFood: 'Schwarma',
        homeTown: 'Tockington'
    },
    {
        name: 'Phil',
        favFood: 'Mini eggs',
        homeTown: 'Shepton Mallet'
    }
]

// 2. Use a foreach loop to console log all fields about each classmate

// function greyhoundStats(greyhounds) {
//     greyhounds.forEach(function(greyhound) {
//     console.log('Name: ' + greyhound.name)
//     console.log('Name: ' + greyhound.favFood)
//     console.log('Name: ' + greyhound.homeTown)
//     })
// }


// 3. Update your previous function (console.logging classmate fields) to display each stat in a separate ul with li for each student
// <ul>
// <li>Ash</li>
// <li>Korean Fried Chicken</li>
// <li>Melksham</li>
// </ul>

// function greyhoundStats(greyhounds) {
//     greyhounds.forEach(function(greyhound) {
//         document.querySelector('h1').innerHTML +=
//             '<ul>'
//             + '<li>Name: ' + greyhound.name + '</li>'
//             + '<li>Favourite Food: ' + greyhound.favFood + '</li>'
//             + '<li>Hometown: ' + greyhound.homeTown + '</li>'
//             + '</ul>'
//     })
// }

// function personExists(greyhounds, name) {
//     let found = false
//     greyhounds.forEach(function (greyhound) {
//         if (greyhound.name == name) {
//             found = true
//         }
//     })
//     return found
// }


// function personExists(greyhounds, name) {
//     let found = false
//     greyhounds.forEach(function (greyhound, index) {
//         if (greyhound.name == name) {
//             found = index
//         }
//     })
//     return found
// }


// const div = document.querySelector('div')
//
// div.dataset.name = 'James'
// div.dataset.age = '32'
//
// const input = document.querySelector('input')
//
// console.log(input.getAttribute('name'))
// input.setAttribute('class', 'password')

// Using your existing array of student objects, output each student name
// in a p tag their favourite food as a data attribute

// greyhounds.forEach(function(greyhound) {
//     document.querySelector('div').innerHTML +=
//         '<p data-fav-food="' + greyhound.favFood + '">'
//         + 'Name: ' + greyhound.name + '</p>'
// })


// const button = document.querySelector('button')
// const spamBox = document.querySelector('div')
//
// function displaySpambox() {
//     spamBox.classList.toggle('hidden')
// }
// button.addEventListener('click', displaySpambox)

// const form = document.querySelector('form')
// const message = document.querySelector('p')
//
// function displaySpamMessage(e) {
//     e.preventDefault()
//     console.log(e)
//     message.classList.remove('hidden')
// }
//
// form.addEventListener('submit', displaySpamMessage)
//
// form.removeEventListener('submit', displaySpamMessage)

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e)
//     message.classList.remove('hidden')
// })

//add an event listener so that when you click on each person,
//    it displays their favourite food in a console.log



greyhounds.forEach(function(greyhound) {
    document.querySelector('div').innerHTML +=
        '<p data-fav-food="' + greyhound.favFood + '">'
        + 'Name: ' + greyhound.name + '</p>'

})

const people = document.querySelectorAll('p')

people.forEach(function(person) {
    person.addEventListener('click', function(e) {
        console.log(e.currentTarget.dataset.favFood)
    })
})
