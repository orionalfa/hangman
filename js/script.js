
var letterBoxElements = [];
/* Possible game words declaration */
var wordsArray = [];

wordsArray[4] = ['jinx', 'onyx', 'quiz', 'shiv', 'wave', 'wavy', 'waxy'];
wordsArray[5] = ['abyss', 'affix', 'askew', 'axiom', 'azure', 'banjo', 'bayou', 'blitz', 'buxom', 'crypt', 'cycle', 'equip', 'fjord', 'flyby', 'funny', 'gabby', 'gizmo', 'glyph', 'haiku', 'ivory', 'jazzy', 'jelly', 'juicy', 'jumbo', 'kayak', 'kazoo', 'khaki', 'kiosk', 'klutz', 'lucky', 'lymph', 'nymph', 'ovary', 'pixel', 'polka', 'pshaw', 'puppy', 'queue', 'quips', 'staff', 'topaz', 'unzip', 'vixen', 'vodka', 'waltz', 'wimpy', 'woozy', 'yoked', 'yummy', 'zilch'];
wordsArray[6] = ['absurd', 'avenue', 'bikini', 'boggle', 'boxcar', 'boxful', 'caliph', 'cobweb', 'dirndl', 'duplex', 'euouae', 'exodus', 'faking', 'galaxy', 'gazebo', 'giaour', 'gnarly', 'gossip', 'hyphen', 'icebox', 'injury', 'jigsaw', 'jockey', 'joking', 'jovial', 'joyful', 'kitsch', 'larynx', 'luxury', 'matrix', 'oxygen', 'pajama', 'phlegm', 'pizazz', 'psyche', 'quartz', 'quorum', 'rhythm', 'snazzy', 'sphinx', 'spritz', 'squawk', 'subway', 'swivel', 'uptown', 'voodoo', 'vortex', 'wheezy', 'wizard', 'wyvern', 'yippee', 'zephyr', 'zigzag', 'zipper', 'zodiac', 'zombie'];
wordsArray[7] = ['awkward', 'buffalo', 'buffoon', 'buzzard', 'buzzing', 'croquet', 'curacao', 'disavow', 'dwarves', 'fixable', 'fuchsia', 'gnostic', 'jackpot', 'jaywalk', 'jogging', 'jukebox', 'keyhole', 'lengths', 'marquis', 'mystify', 'naphtha', 'oxidize', 'quizzes', 'rhubarb', 'scratch', 'stretch', 'stymied', 'twelfth', 'unknown', 'walkway', 'whiskey']
wordsArray[8] = ['abruptly', 'bagpipes', 'blizzard', 'bookworm', 'buckaroo', 'daiquiri', 'dizzying', 'embezzle', 'fishhook', 'flapjack', 'flopping', 'foxglove', 'frazzled', 'frizzled', 'glowworm', 'jaundice', 'jazziest', 'jiujitsu', 'kilobyte', 'knapsack', 'mnemonic', 'nowadays', 'peekaboo', 'puzzling', 'quixotic', 'rickshaw', 'schnapps', 'strength', 'syndrome', 'twelfths', 'unworthy', 'vaporize', 'whizzing', 'whomever', 'youthful'];
wordsArray[9] = ['bandwagon', 'beekeeper', 'buzzwords', 'cockiness', 'espionage', 'galvanize', 'haphazard', 'kiwifruit', 'megahertz', 'microwave', 'nightclub', 'numbskull', 'pneumonia', 'strengths', 'voyeurism', 'xylophone', 'yachtsman'];
wordsArray[10] = ['fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness', 'fluffiness'];
function isLetterInWordAndWhere(letter, word) {
    hasInPositions = ""; //index array[0] false is letter not in word
    //else array[0]=true and the positions of letters in string
    return array;
}

/* Display Mike Piece */
/* variables */
var numMikePiece = 0;
const mikeBody = document.querySelector('.hangman-drawing');
/* Main function */
function displayMikePiece() {
    if (numMikePiece < 6) { /* to avoid bugs */
        numMikePiece += 1;
        mikeBody.children[numMikePiece].classList.remove('transparent');
    }
}

function displayLetterInPositions(letter, positions, letterBoxElements) {

}

function buildRoomForWord(wordLength) {
    var letterBoxesList = [];
    return letterBoxesList;
}

/*
function accessToSelectedWord(){
    var level = 1;
    word ='';
    return word;
}
*/

function randomWordSelector(max, min) {
    
    return Math.round(Math.random() * (max - min) + min);
}

/** EVENT LISTENERS (screen)*/

function screenLetterTriggers(event){
    console.log(event.target.innerHTML);
}

function setScreenKeysEventListeners(){
    var screenKeyboard = document.querySelectorAll('.keyboard-letter');
    for (key of screenKeyboard){
        key.onclick = screenLetterTriggers;
    }
}

setScreenKeysEventListeners();

/** EVENT LISTENERS (keyboard)*/

function keyboardLetterTriggers(event){
    keyNum=event.which;
    console.log(String.fromCharCode(keyNum));
}

document.onkeypress = keyboardLetterTriggers;

/* Set game start */
/* constants used */
const gameWordContainer = document.querySelector('.game-word');
/* Main function */
function gameStart(gameWord) {

    for (let i = 0; i < gameWord.length; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add('game-letter');
        newElement.innerHTML = ' ';
        gameWordContainer.appendChild(newElement);
    }
}
/* Testing code */
const tempGameWord = 'PRUEBA';
gameStart(tempGameWord);

/* ! Random word number selection depending of level */
/* Variables */
var gameWordNum;
/* Main function */
function wordSelect (diffLevel) {
    const max = wordsArray[diffLevel].length;
    const min = 0;
    gameWordNum = randomWordSelector(max, min);
}