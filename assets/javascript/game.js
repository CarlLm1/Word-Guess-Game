// Answers
var words = ["NIRVANA", "PEARLJAM", "RADIOHEAD", "FOOFIGHTERS", "WUTANGCLAN", "SMASHINGPUMPKINS", "SOUNDGARDEN", "SUBLIME", "NINEINCHNAILS", "GREENDAY"];
var wordAns;
var wordAnsArr = [];
var guessedLetters = [];
var numGuessesLeft = 0;
var numGuessesMax = 6;
var numWins = 0;
var done = false;

function setup() {
    wordAns = words[Math.floor(Math.random() * words.length)];
    wordAnsArr = [];
    for (var i = 0; i < wordAns.length; i++) {
        wordAnsArr[i] = "_";
    }

    numGuessesLeft = numGuessesMax;
    guessedLetters = [];

    updateScreen();

};

function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numGuesses").innerText = numGuessesLeft;
    document.getElementById("wordGuess").innerText = wordAnsArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesLeft
        if (wordAns.indexOf(letter) === -1) {
            numGuessesLeft--;
        }
    } else {
        for (var i = 0; i < wordAns.length; i++) {
            if (letter === wordAns[i]) {
                wordAnsArr[i] = letter;
            }
        }
    }
};


function winner() {
    if (wordAnsArr.indexOf("_") === -1) {
        numWins++;
        done = true;
        if (wordAns === "NIRVANA") {
            soundPlay("success sound src");
        } else if (wordAns === "PEARLJAM") {
            soundPlay("success sound src");
        } else if (wordAns === "RADIOHEAD") {
            soundPlay("success sound src");
        } else if (wordAns === "FOOFIGHTERS") {
            soundPlay("success sound src");
        } else if (wordAns === "WUTANGCLAN") {
            soundPlay("success sound src");
        } else if (wordAns === "SMASHINGPUMPKINS") {
            soundPlay("success sound src");
        } else if (wordAns === "SOUNDGARDEN") {
            soundPlay("success sound src");
        } else if (wordAns === "SUBLIME") {
            soundPlay("success sound src");
        } else if (wordAns === "NINEINCHNAILS") {
            soundPlay("success sound src");
        } else if (wordAns === "GREENDAY") {
            soundPlay("success sound src");
        }
    }
};

function loser() {
    if (numGuessesLeft <= 0) {
        done = true;
        soundPlay("error sound src");
    }
};

document.onkeyup = function(event) {
    if (done) {
        setup();
        done = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            winner();
            loser();
        }
    }
};

setup();
updateScreen();