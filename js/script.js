/* Global variables */
var diffLevel = 4;
var letterBoxElements = [];
var gameWordNum;
var numMikePiece = 0;
var playersData = [];
var currentSolvedLetters = 0;
var pressedLetterArray = [];
var initialTime;
var winTime;

/* constants used */
const gameWordContainer = document.querySelector('.game-word');
const startButton = document.getElementById('startbtn');
const startGameScreen = document.querySelector('#start-container');
const nextLevelBtn = document.querySelector('#nextLevelBtn');
const endGameBtn = document.querySelector('#endGameBtn');
const mikeBody = document.querySelector('.hangman-drawing');
const showThePlayersNames = document.getElementsByClassName(".name-player");
const showThePlayersTime = document.getElementsByClassName(".name-time");
const WinLevelScreen = document.querySelector('#wonThisLevel-container');
const LoseScreen = document.querySelector('#youLost-container');
const playAgainBtn = document.querySelector('#playAgain-btn');
const finalTime = document.querySelector('#final-score-level');


/* Possible game words declaration */
var wordsArray = [];

wordsArray[4] = ['jinx', 'onyx', 'quiz', 'shiv', 'wave', 'wavy', 'waxy'];
wordsArray[5] = ['abyss', 'affix', 'askew', 'axiom', 'azure', 'banjo', 'bayou', 'blitz', 'buxom', 'crypt', 'cycle', 'equip', 'fjord', 'flyby', 'funny', 'gabby', 'gizmo', 'glyph', 'haiku', 'ivory', 'jazzy', 'jelly', 'juicy', 'jumbo', 'kayak', 'kazoo', 'khaki', 'kiosk', 'klutz', 'lucky', 'lymph', 'nymph', 'ovary', 'pixel', 'polka', 'pshaw', 'puppy', 'queue', 'quips', 'staff', 'topaz', 'unzip', 'vixen', 'vodka', 'waltz', 'wimpy', 'woozy', 'yoked', 'yummy', 'zilch'];
wordsArray[6] = ['absurd', 'avenue', 'bikini', 'boggle', 'boxcar', 'boxful', 'caliph', 'cobweb', 'dirndl', 'duplex', 'euouae', 'exodus', 'faking', 'galaxy', 'gazebo', 'giaour', 'gnarly', 'gossip', 'hyphen', 'icebox', 'injury', 'jigsaw', 'jockey', 'joking', 'jovial', 'joyful', 'kitsch', 'larynx', 'luxury', 'matrix', 'oxygen', 'pajama', 'phlegm', 'pizazz', 'psyche', 'quartz', 'quorum', 'rhythm', 'snazzy', 'sphinx', 'spritz', 'squawk', 'subway', 'swivel', 'uptown', 'voodoo', 'vortex', 'wheezy', 'wizard', 'wyvern', 'yippee', 'zephyr', 'zigzag', 'zipper', 'zodiac', 'zombie'];
wordsArray[7] = ['awkward', 'buffalo', 'buffoon', 'buzzard', 'buzzing', 'croquet', 'curacao', 'disavow', 'dwarves', 'fixable', 'fuchsia', 'gnostic', 'jackpot', 'jaywalk', 'jogging', 'jukebox', 'keyhole', 'lengths', 'marquis', 'mystify', 'naphtha', 'oxidize', 'quizzes', 'rhubarb', 'scratch', 'stretch', 'stymied', 'twelfth', 'unknown', 'walkway', 'whiskey']
wordsArray[8] = ['abruptly', 'bagpipes', 'blizzard', 'bookworm', 'buckaroo', 'daiquiri', 'dizzying', 'embezzle', 'fishhook', 'flapjack', 'flopping', 'foxglove', 'frazzled', 'frizzled', 'glowworm', 'jaundice', 'jazziest', 'jiujitsu', 'kilobyte', 'knapsack', 'mnemonic', 'nowadays', 'peekaboo', 'puzzling', 'quixotic', 'rickshaw', 'schnapps', 'strength', 'syndrome', 'twelfths', 'unworthy', 'vaporize', 'whizzing', 'whomever', 'youthful'];
wordsArray[9] = ['bandwagon', 'beekeeper', 'buzzwords', 'cockiness', 'espionage', 'galvanize', 'haphazard', 'kiwifruit', 'megahertz', 'microwave', 'nightclub', 'numbskull', 'pneumonia', 'strengths', 'voyeurism', 'xylophone', 'yachtsman'];


function isLetterInWordAndWhere(letter, word) {
    hasLetterInPositions = [false];

    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            hasLetterInPositions[0] = true;
            hasLetterInPositions.push(i);
        }
    }
    //console.log(hasLetterInPositions);
    return hasLetterInPositions;
}


/* Display Mike Piece */
/* variables */
/* Main function */
function displayMikePiece() {
    if (numMikePiece < 7) {
        /* to avoid bugs */
        mikeBody.children[numMikePiece].classList.remove('transparent');
        numMikePiece += 1;
    }
}

function restartMike() {
    numMikePiece = 0;
    let piece = 0;
    while (piece < 7) {
        /* to avoid bugs */
        if (!mikeBody.children[piece].classList.contains('transparent')) {
            mikeBody.children[piece].classList.add('transparent');
        }
        piece += 1;
    }
}

function displayLetterInPositions(letter, positions) {
    const letterBoxes = gameWordContainer.children;
    for (i of positions) {
        letterBoxes[i].innerHTML = letter;
    }
}

function buildRoomForWord(diffLevel) {
    gameWordContainer.innerHTML = ' ';
    for (let i = 0; i < diffLevel; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add('game-letter');
        newElement.innerHTML = ' ';
        gameWordContainer.appendChild(newElement);
    }
}

/*
function accessToSelectedWord(){
    var level = 1;
    word ='';
    return word;
}
*/

function randomNumSelector(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

/** EVENT LISTENERS (screen)*/

function screenLetterTriggers(event) {
    const letterPressed = event.target.innerHTML.toLowerCase();
    //console.log(pressedLetter);
    if (!pressedLetterArray.includes(letterPressed)) {
        let hasLetterInPositions = isLetterInWordAndWhere(letterPressed, wordsArray[diffLevel][gameWordNum]);
        if (hasLetterInPositions[0]) {
            displayLetterInPositions(letterPressed, hasLetterInPositions.slice(1));
            currentSolvedLetters += hasLetterInPositions.length - 1;
            if (currentSolvedLetters === diffLevel) {
                winLevel();
            }
        } else {
            displayMikePiece();
            if (numMikePiece === 7) {
                youLose();
            }
        }
    } //isLetterInWordAndWhere()
    pressedLetterArray.push(letterPressed);
    disableLetter(letterPressed);
}
function winLevel () {
    WinLevelScreen.classList.remove('hidden');
    winTime = new Date().getTime();
    finalTime.innerText = "You did it in " + Math.trunc((winTime - initialTime)/1000) + " seconds";
    initialTime = 0;
    winTime = 0;
}
function youLose () {
    LoseScreen.classList.remove('hidden');
}

function setScreenKeysEventListeners() {
    var screenKeyboard = document.querySelectorAll('.keyboard-letter');
    for (key of screenKeyboard) {
        key.onclick = screenLetterTriggers;
    }
}

setScreenKeysEventListeners();

/** EVENT LISTENERS (keyboard)*/

function keyboardLetterTriggers(event) {
    const keyNum = event.which;
    const letterPressed = String.fromCharCode(keyNum).toLowerCase();
    if (letterPressed.match(/[a-z]/)) {
        if (!pressedLetterArray.includes(letterPressed)) {
            let hasLetterInPositions = isLetterInWordAndWhere(letterPressed, wordsArray[diffLevel][gameWordNum]);
            if (hasLetterInPositions[0]) {
                displayLetterInPositions(letterPressed, hasLetterInPositions.slice(1));
                currentSolvedLetters += hasLetterInPositions.length - 1;
                if (currentSolvedLetters === diffLevel) {
                    WinLevelScreen.classList.remove('hidden');
                }
            } else {
                displayMikePiece();
                if (numMikePiece === 7) {
                    LoseScreen.classList.remove('hidden');
                }
            }
        } //isLetterInWordAndWhere()
        pressedLetterArray.push(letterPressed);
        disableLetter(letterPressed);
    }
}

// OBJECT PLAYERS

// Let where store our data


// Place where we are going to show the information


// Constructor method for our players parameters that interest us

class Players {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

// We create the function for our players

function createPlayers(username, time) {
    /*  const name = document.getElementsById("").value; // We get the name os the player
     const time = document.getElementsById("").value; // we get the time score */

    // Players object

    var player = new Players(username, time);
    playersData.push(player);

    updatePlayers();
}

// Function to update the data and show the info

function updatePlayers() {
    showThePlayersNames.innerHTML = "";
    showThePlayersTime.innerHTML = "";

    var liPlayer = document.createElement("li");

    // for loop to run the array and show the info

    for (let i = 0; i < playersData.length; i++) {
        showThePlayersNames.innerHTML = showThePlayersNames.innerHTML +
            '<li>' + playersData[i].name + '</li>'
    };

    for (let j = 0; j < playersData.length; j++) {
        showThePlayersTime.innerHTML = showThePlayersTime.innerHTML +
            '<li>' + playersData[j].time + '</li>'
    };

}

/* Game start */
/* Event Listener */
startButton.addEventListener('click', gameStart);
/* Main function */
function gameStart() {
    diffLevel = 4;
    wordSelect(diffLevel);
    buildRoomForWord(diffLevel);
    startGameScreen.classList.add('hidden');
    const name = document.getElementById("username").value; // We get the name os the player
    createPlayers(name, 'Currently playing');
    document.onkeypress = keyboardLetterTriggers;
    // Verify some text in input
    initialTime = new Date().getTime();
}

/* ! Random word number selection depending of level */
/* Main function */
function wordSelect(diffLevel) {
    const max = wordsArray[diffLevel].length;
    const min = 0;
    gameWordNum = randomNumSelector(max, min);
}

function finalLevel() {
    // It musts check if the level is the last one to start this screen;
    // It musts drives you to the start screen??
}

function restoreLetters () {
    const allLetters = document.querySelectorAll('.keyboard-line > div');
    for (let letter of allLetters) {
        letter.classList.remove('letter-disabled');
    }
}

nextLevelBtn.addEventListener('click', goToNextLevel);
endGameBtn.addEventListener('click', goToStartScreen);
playAgainBtn.addEventListener('click', goToStartScreen);


function goToStartScreen() {
    restartMike();
    restoreLetters();
    pressedLetterArray = [];
    currentSolvedLetters = 0;
    WinLevelScreen.classList.add('hidden');
    LoseScreen.classList.add('hidden');
    startGameScreen.classList.remove('hidden');
}

function goToNextLevel() {
    restartMike();
    restoreLetters();
    pressedLetterArray = [];
    currentSolvedLetters = 0;
    diffLevel++;
    wordSelect(diffLevel);
    buildRoomForWord(diffLevel);
    WinLevelScreen.classList.add('hidden');
}

function disableLetter (letterToDisable) {
    const allLetters = document.querySelectorAll('.keyboard-line > div');
    for (let letter of allLetters) {
        if (letterToDisable == letter.innerHTML.toLowerCase()){
            letter.classList.add('letter-disabled');
            return disableLetter;
        }
    }
}