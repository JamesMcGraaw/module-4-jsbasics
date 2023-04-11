// 1. Create array of classmates
// 1. foreach through the array and console.log each of their names
// 2. Move your foreach loop into a function and call the function
// 1. The param of the function should be the array itself
//
// Stretch:
//     Only console.log if the name begins with a ‘b’.

const demiGreyhounds = ['Phil', 'James', 'Henry', 'Dom', 'Adam', 'Brent', 'Michael', 'Anna']

function greyhoundsFunction(greyhounds, letter) {
    greyhounds.forEach(function (greyhound) {
        if (greyhound.startsWith(letter)) {
            console.log(greyhound)
        }
    })
}



const firstArray = ['a', 'b', 'c']
const secondArray = ['a', 'b', 'c', 'd']

