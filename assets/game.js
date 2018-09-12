// create an array of words
var words = ['porter', 'ipa', 'schwartzbier', 'pilsner', 'bock', 'lambic', 'stout', 'witbier', 'hefeweizen', 'kellerbier', 'marzen', 'kolsch', 'doppelbock', 'esb', 'blonde', 'steam', 'barleywine', 'saison', 'trappist', 'dubbel', 'tripel' ];
// choose word randomly
var randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);
// make underscore for length of word
var underscore = [];
for (var i = 0; i < randomWord.length; i++){
    underscore.push('_');    
}

// variables and functions
var current = document.getElementById("current");
    current.textContent = underscore;
var wins = document.getElementById("wins");
var winCount = 0;
    wins.textContent = winCount;
var guessesLeft = document.getElementById("guesses-left");
var counter = 12;
    guessesLeft.textContent = counter;
var guessed = document.getElementById("guessed");
var letters = [];
var isFinished = false;   

function resetGame(){
    counter = 12;
    guessesLeft.textContent = counter;
    letters = [];
    guessed.textContent = letters;
    randomWord = words[Math.floor(Math.random()*words.length)];
    underscore = [];
    for (var i = 0; i < randomWord.length; i++){
        underscore.push('_');}
    current.textContent = underscore;
    
}


// user guess
document.onkeyup = function(event) {
    var userGuess = event.key;

    if (isFinished){
        resetGame();
        isFinished = false;
    } 
    
    if (counter < 1){
        alert('You Lose');        
        isFinished = true;
    }   

// check users guess
for (var i = 0; i < randomWord.length; i++){
    
    if (userGuess.toLowerCase() == randomWord[i]){
        underscore[i] = userGuess;
        current.textContent = underscore;

        if (underscore.indexOf('_') === -1){
            winCount++;
            wins.textContent = winCount;
            alert('Congrats, you guessed ' + randomWord + '!');
            isFinished = true;
        }
    }
    else if (randomWord.indexOf(userGuess) == -1) {
        
        if (letters.indexOf(userGuess) == -1) {
            letters.push(userGuess);
            guessed.textContent = letters;
            counter--;
            guessesLeft.textContent = counter;
            end;
        }
    }

    

 
}

}

