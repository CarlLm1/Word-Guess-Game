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
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
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
            document.getElementById('myAudio').play();
        } else if (wordAns === "PEARLJAM") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "RADIOHEAD") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "FOOFIGHTERS") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "WUTANGCLAN") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "SMASHINGPUMPKINS") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "SOUNDGARDEN") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "SUBLIME") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "NINEINCHNAILS") {
            document.getElementById('myAudio').play();
        } else if (wordAns === "GREENDAY") {
            document.getElementById('myAudio').play();
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