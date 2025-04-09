let quotes = [
   { text: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
   { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
   { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
   { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
   { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
   { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
   { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
   { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
   { text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" },
   { text: "We must balance conspicuous consumption with conscious capitalism.", author: "Kevin Kruse" },
   { text: "Life is what happens to you while you’re busy making other plans.", author: "John Lennon" }
];

let currentIndex = 0;   

function displayQuote(index) {
   const text = document.getElementById('quote-text');
   const author = document.getElementById('quote-author');
   text.innerHTML = `- ${quotes[index].text}`;
   author.innerHTML = `- ${quotes[index].author}`;
}

function getRandomQuote() {
   currentIndex = Math.floor(Math.random() * quotes.length);
   displayQuote(currentIndex);
}

function showNext() {
   currentIndex = (currentIndex + 1) % quotes.length;
   displayQuote(currentIndex);
}

function showPrev() {
   currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
   displayQuote(currentIndex);
}

setInterval(showNext, 5000);

getRandomQuote();
