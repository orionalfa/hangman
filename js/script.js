
var letterBoxElements = [];
var wordsArray = [];

function isLetterInWordAndWhere(letter,word){
    hasInPositions=""; //index array[0] false is letter not in word
    //else array[0]=true and the positions of letters in string
    return array;
}

/* Display Mike Piece */
/* variables */
var numMikePiece = 0;
const mikeBody = document.querySelector('.hangman-drawing');
/* Main function */
function displayMikePiece(){
    if (numMikePiece < 6) { /* to avoid bugs */
        numMikePiece += 1;
        mikeBody.children[numMikePiece].classList.remove('transparent');
    }
}

function displayLetterInPositions(letter, positions, letterBoxElements){

}

function buildRoomForWord(wordLength){
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

function randomWordSelector(max,min){
    return Math.random() * (max - min) + min;
}

/* Set game start */
/* constants used */
const gameWordContainer = document.querySelector('.game-word');
/* Main function */
function gameStart (gameWord) {
    
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
