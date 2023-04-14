// Constructed deck object
const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const cards = [
    {
        name: 'Ace',
        score: 11
    },
    {
        name: 'Two',
        score: 2
    },
    {
        name: 'Three',
        score: 3
    },
    {
        name: 'Four',
        score: 4
    },
    {
        name: 'Five',
        score: 5
    },
    {
        name: 'Six',
        score: 6
    },
    {
        name: 'Seven',
        score: 7
    },
    {
        name: 'Eight',
        score: 8
    },
    {
        name: 'Nine',
        score: 9
    },
    {
        name: 'Ten',
        score: 10
    },
    {
        name: 'Jack',
        score: 10
    },
    {
        name: 'Queen',
        score: 10
    },
    {
        name: 'King',
        score: 10
    },
]

function createDeck(suits, cards) {
    let deck = []
    suits.forEach(function (suit) {
        cards.forEach(function (card){
            deck.push({card: card.name + ' of ' + suit, score: card.score})
        })
    })
    return deck
}

let deck = createDeck(suits, cards)


// Shuffle deck array
function shuffleDeck(array, newArray) {
    let currentIndex = array.length,  randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }

    return newArray
}

shuffleDeck(deck)


// Clicks deal, each player gets 2 random cards into hand array, listener turned off

function dealCard(deck) {
    return deck.pop()
}

function dealHands(deck) {
    let hands = []
    let p1hand = []
    let p2hand = []
    p1hand.push(dealCard(deck), dealCard(deck))
    p2hand.push(dealCard(deck), dealCard(deck))
    hands.push(p1hand, p2hand)
    return hands
}
dealthands = dealHands(deck)


// Declare player score arrays
let p1score = []
let p2score = []

function calculatePlayerScore(player) {
    return player.reduce((a, b) => {
        return a + b
    })
}

let p1cardsinhand = dealthands[0].length
let p2cardsinhand = dealthands[1].length

// Click deal button, give each player their starting hand, remove event listener
function DealListen() {
    let p1hand = dealthands[0]
    let p2hand = dealthands[1]
    const displayp1hand = document.querySelector('.p1hand')
    displayp1hand.textContent = p1hand[0].card + ' and ' + p1hand[1].card
    const displayp2hand = document.querySelector('.p2hand')
    displayp2hand.textContent = p2hand[0].card + ' and ' + p2hand[1].card
    p1score.push(p1hand[0].score)
    p1score.push(p1hand[1].score)
    p2score.push(p2hand[0].score)
    p2score.push(p2hand[1].score)
    const p1hit = document.querySelector('.p1hit')
    p1hit.addEventListener('click', p1Hit)
    const p2hit = document.querySelector('.p2hit')
    p2hit.addEventListener('click', p2Hit)
    const p2stick = document.querySelector('.p2stick')
    p2stick.addEventListener('click', p2Stick)
    const p1stick = document.querySelector('.p1stick')
    p1stick.addEventListener('click', p1Stick)
    removeDealEventListener()
    const checkWinner = document.querySelector('.declare-winner')
    checkWinner.addEventListener('click', declareWinner)
}
function removeDealEventListener () {
    document.querySelector('.deal').removeEventListener('click', DealListen)
}
const p1deal = document.querySelector('.deal')
p1deal.addEventListener('click', DealListen)


// Event listener for hit button (p1)
function p1Hit() {
    let p1hand = dealthands[0]
    p1hand.push(dealCard(deck))
    p1score.push(p1hand[p1cardsinhand].score)
    const displayp1hand = document.querySelector('.p1hand')
    displayp1hand.textContent += ' and ' + p1hand[p1cardsinhand].card
    if (calculatePlayerScore(p1score) > 21) { // Ace = 1
        removeP1HitEventListener()
        const display = document.querySelector('.p1bust.displayed')
        display.classList.remove('displayed')
    } else {
        console.log(calculatePlayerScore(p1score))
    }
}

// Event listener for stick button (p1)
function p1Stick() {
    removeP1HitEventListener()
}
function removeP1HitEventListener () {
    document.querySelector('.p1hit').removeEventListener('click', p1Hit)
}

// Event listener for hit button (p2)
function p2Hit() {
    let p2hand = dealthands[1]
    p2hand.push(dealCard(deck))
    p2score.push(p2hand[p2cardsinhand].score)
    const displayp2hand = document.querySelector('.p2hand')
    displayp2hand.textContent += ' and ' + p2hand[p2cardsinhand].card
    if (calculatePlayerScore(p2score) > 21) {
        removeP2HitEventListener()
        const display = document.querySelector('.p2bust.displayed')
        display.classList.remove('displayed')
    } else {
        console.log(calculatePlayerScore(p2score))
    }
}

// Event listener for stick button (p2)
function p2Stick() {
    removeP2HitEventListener()
}
function removeP2HitEventListener () {
    document.querySelector('.p2hit').removeEventListener('click', p2Hit)
}

// Declare winner

function declareWinner() {
    if (calculatePlayerScore(p1score) > calculatePlayerScore(p2score) && (calculatePlayerScore(p1score) < 22)) {
        const p1wins = document.querySelector('.p1wins.displayed')
        p1wins.classList.remove('displayed')
        const p2loses = document.querySelector('.p2loses.displayed')
        p2loses.classList.remove('displayed')
    } else if (calculatePlayerScore(p1score) < calculatePlayerScore(p2score) && (calculatePlayerScore(p2score) < 22)) {
        const p1loses = document.querySelector('.p1loses.displayed')
        p1loses.classList.remove('displayed')
        const p2wins = document.querySelector('.p2wins.displayed')
        p2wins.classList.remove('displayed')
    } else if (calculatePlayerScore(p1score) > 21) {
        const p1loses = document.querySelector('.p1loses.displayed')
        p1loses.classList.remove('displayed')
        const p2wins = document.querySelector('.p2wins.displayed')
        p2wins.classList.remove('displayed')
    } else if (calculatePlayerScore(p2score) > 21) {
        const p1wins = document.querySelector('.p1wins.displayed')
        p1wins.classList.remove('displayed')
        const p2loses = document.querySelector('.p2loses.displayed')
        p2loses.classList.remove('displayed')
    } else if (calculatePlayerScore(p1score) === calculatePlayerScore(p2score) && p1cardsinhand > p2cardsinhand) {
        const p1loses = document.querySelector('.p1loses.displayed')
        p1loses.classList.remove('displayed')
        const p2wins = document.querySelector('.p2wins.displayed')
        p2wins.classList.remove('displayed')
    } else if (calculatePlayerScore(p1score) === calculatePlayerScore(p2score) && p1cardsinhand < p2cardsinhand) {
        const p1wins = document.querySelector('.p1wins.displayed')
        p1wins.classList.remove('displayed')
        const p2loses = document.querySelector('.p2loses.displayed')
        p2loses.classList.remove('displayed')
    } else {
        const draw = document.querySelector('.draw')
        draw.classList.remove('displayed')
    }
}