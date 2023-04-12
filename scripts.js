const form = document.querySelector('form')
const message = document.querySelector('p')

function displaySpamMessage(e) {
    e.preventDefault()

    message.classList.remove('hidden')

    const username = document.querySelector('#username')

    username.value = ''
}

form.addEventListener('submit', displaySpamMessage)

form.removeEventListener('submit', displaySpamMessage)