let number = 5

const timer = setInterval(function () {
    console.log(number)
    number--
}, 3000)


function stopGame (number) {
    if (number = 0) {
        clearTimeout(timer)
    }
}

stopGame(number)
