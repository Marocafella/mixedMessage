var quotes = ["There is no relationship between God and anyone except through obedience to Him.",
"Once prayer becomes a habit, success becomes a lifestyle.",
"Once you begin to see everything beautiful as only a reflection of Gods beauty, you will learn to love in the right way.", 
"In Him, hope is never dead. In Him, love is never lost.",
"Sell this life for the next and you win both of them. Sell the next life for this and you lose both of them.",
"Suffering is a gift. In it is hidden mercy.",
"In the end, it's not the years in your life that count. It's the life in your years.","The worst of our faults is our interest in other people's faults.",
"When proven wrong, the wise man will correct himself and the ignorant will keep arguing.",
"The strong is not the one who is physically powerful, but indeed, the one who controls himself when angry.",
"Speak your heart. If they don't understand, the message was never meant for them anyway.",
"Don’t depend too much on anyone in this world because even your own shadow leaves you when you are in darkness.",
]
function getQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}