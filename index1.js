// player info
let player = {
    name: "Mehdi",
    chips: 140,     
}
// Display players name and chips

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

// in/outputs

let message = ""
let cards = []
let sum = 0
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

// player stats

let isAlive = false
let havBlackJack = false

// functions
// reset displaying cards 
function resetGame() {
    cards = []
    sum = 0
    isAlive = true
    havBlackJack = false
}


function startGame() {
    resetGame()
    
    isAlive = true
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard

    renderGame()
}

function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13 ) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        message = "Want to Draw Another Card"
    } else if (sum === 21) {
        message = "WoW! You Got a BlackJack"
        havBlackJack = true
    } else {
        message = "Sorry, You Are Out"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && havBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        
        renderGame()
    }
}
