const example = [1,2,3]

example.forEach(function(number){
    console.log(number)
})

square(5, alerter)

function square(x, callback) {
    const result = x * x

    callback(result)
}

function logger(data) {
    console.log(data)
}

function alerter(data) {
    alert(data)
}

function displayer(data){
    const target = document.querySelector('div')
    target.textContent = data
}