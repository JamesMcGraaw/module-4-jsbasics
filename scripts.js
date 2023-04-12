// const form = document.querySelector('form')
// const message = document.querySelector('p')
//
// function displaySpamMessage(e) {
//     e.preventDefault()
//
//     message.classList.remove('hidden')
//
//     const username = document.querySelector('#username')
//
//     username.value = ''
// }
//
// form.addEventListener('submit', displaySpamMessage)
//
// form.removeEventListener('submit', displaySpamMessage)

const formData = {
    username: 'Cuthbert',
    password: 'password132',
    friends: [
        'Hubert',
        'Beatrude'
    ]
}

const jsonString = JSON.stringify(formData)

console.log(formData)
console.log(jsonString)

const jsonData = '{"username":"Cuthbert","password":"password132","friends":["Hubert","Beatrude"]}'

const obj = JSON.parse(jsonData)

console.log(obj)
console.log(obj.username)