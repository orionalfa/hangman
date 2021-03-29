
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


// OBJECT PLAYERS

// Let where store our data

var playersData = [];

// Place where we are going to show the information

var showThePlayersNames = document.getElementsByClassName(".name-player");

var showThePlayersTime = document.getElementsByClassName(".name-time");

// Constructor method for our players parameters that interest us

class Players{
    constructor(name, time){
        this.name = name;
        this.time = time;
    }
}

// We create the function for our players

function createPlayers(){
    var name = document.getElementsById("").value; // We get the name os the player
    var time = document.getElementsById("").value; // we get the time score

    // Players object

    var player = new Players(name, time);
    playersData.push(player);

    updatePlayers();
}

// Function to update the data and show the info

function updatePlayers(){
    showThePlayersNames.innerHTML = "";
    showThePlayersTime.innerHTML = "";

    var liPlayer = docume.createElemnent("li");

    // for loop to run the array and show the info

    for (let i = 0; i < playersData.length; i++){
        showThePlayersNames.innerHTML = showThePlayersNames.innerHTML + 
        '<li>' + playersData[i].name + '</li>'    
    };

    for (let j = 0; j < playersData.length; j++){
        showThePlayersTime.innerHTML = showThePlayersTime.innerHTML +
        '<li>' + playersData[j].time + '</li>'
    };

}








