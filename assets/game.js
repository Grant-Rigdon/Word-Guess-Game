// create an array of words
var words = ['porter', 'ipa', 'schwartzbier', 'pilsner', 'bock', 'lambic', 'stout', 'gueuze', 'gose', 'witbier', 'hefeweizen', 'kellerbier', 'marzen', 'kolsch', 'doppelbock', 'esb', 'blonde', 'steam', 'barleywine', 'saison', 'trappist', 'dubbel', 'tripel' ];
// choose word randomly
var randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);
// make underscore for length of word
var underscore = [];
for (var i = 0; i < randomWord.length; i++){
    underscore.push('_');    
}

var current = document.getElementById("current");
    current.textContent = underscore;
var wins = document.getElementById("wins");
var guessesLeft = document.getElementById("guesses-left");

// user guess
document.onkeyup = function(event) {
    var userGuess = event.key;

// check users guess
for (var i = 0; i < randomWord.length; i++){
    if (userGuess == randomWord[i]){
        underscore.push(userGuess);
        current.textContent = underscore;
    }
    else {
        
    }
}

// if wrong show letters guessed
}