
var letterBoxElements = [];
var wordsArray = [];

function isLetterInWordAndWhere(letter,word){
    hasInPositions=""; //index array[0] false is letter not in word
    //else array[0]=true and the positions of letters in string
    return array;
}

function displayMikePiece(){

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

