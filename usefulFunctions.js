// MAP

const numbers = [1, 2, 3, 4]

// Using a foreach loop
let result = []
numbers.forEach(function(number){
    result.push(number * 2)
})
console.log(result)

// Using map
const result2 = numbers.map(function(number){
    return number * 2
    // if return 'test' would return test 4x
})
console.log(result2)

// Using map shorthand
const result3 = numbers.map(x=> x * 2)
console.log(result3)


// Filter

// Long hand version
const filteredNumbers = numbers.filter(function (number){
    if (number >= 3) {
        return true
    } else {
        return false
    }
})
console.log(filteredNumbers)

// Shorter hand version
const filteredNumbers2 = numbers.filter(function (number){
    if (number >= 3) {
        return true
    }
        return false
})
console.log(filteredNumbers2)

// Even shorter hand version (returns boolean comparison directly)
const filteredNumbers3 = numbers.filter(function (number){
    return number >= 3
})
console.log(filteredNumbers3)

// Shortest hand (fat arrow implicit return)
const filteredNumbers4 = numbers.filter (x => x >= 3)
console.log(filteredNumbers4)

const filteredNumbers5 = numbers.map(x => x * 2).filter(x => x > 4)
console.log(filteredNumbers5)