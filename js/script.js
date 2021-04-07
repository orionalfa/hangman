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
var timeSubtotal = 0;

/* constants used */
const gameWordContainer = document.querySelector(".game-word");
const startButton = document.getElementById("startbtn");
const startGameScreen = document.querySelector("#start-container");
const nextLevelBtn = document.querySelector("#nextLevelBtn");
const endGameBtn = document.querySelector("#endGameBtn");
const mikeBody = document.querySelector(".hangman-drawing");
const showThePlayersNames = document.querySelector(".name-player");
const showThePlayersTime = document.querySelector(".name-time");
const WinLevelScreen = document.querySelector("#wonThisLevel-container");
const LoseScreen = document.querySelector("#youLost-container");
const playAgainBtn = document.querySelector("#playAgain-btn");
const finalTime = document.querySelector("#final-score-level");
const finalScreen = document.querySelector("#youWon-container");
const endFinalGameBtn = document.querySelector("#endFinalLevelBtn");
/* Sounds */
let wrongSound = new Audio("./sounds/Scream_mike.mp3");
let correctSound = new Audio("./sounds/Child_laugh.mp3");
let winSound = new Audio("./sounds/Mike_speech.mp3");
let lostSound = new Audio("./sounds/So_badly_bad.mp3");
let levelWonSound = new Audio("./sounds/Push_his_numbers.mp3");

const formStart = document.querySelector("#usr-form");
formStart.addEventListener("submit", function (e) {
  e.preventDefault();
});

/* Possible game words declaration */
var wordsArray = [];

wordsArray[4] = ["jinx", "onyx", "quiz", "shiv", "wave", "wavy", "waxy"];
wordsArray[5] = [
  "abyss",
  "affix",
  "askew",
  "axiom",
  "azure",
  "banjo",
  "bayou",
  "blitz",
  "buxom",
  "crypt",
  "cycle",
  "equip",
  "fjord",
  "flyby",
  "funny",
  "gabby",
  "gizmo",
  "glyph",
  "haiku",
  "ivory",
  "jazzy",
  "jelly",
  "juicy",
  "jumbo",
  "kayak",
  "kazoo",
  "khaki",
  "kiosk",
  "klutz",
  "lucky",
  "lymph",
  "nymph",
  "ovary",
  "pixel",
  "polka",
  "pshaw",
  "puppy",
  "queue",
  "quips",
  "staff",
  "topaz",
  "unzip",
  "vixen",
  "vodka",
  "waltz",
  "wimpy",
  "woozy",
  "yoked",
  "yummy",
  "zilch",
];
wordsArray[6] = [
  "absurd",
  "avenue",
  "bikini",
  "boggle",
  "boxcar",
  "boxful",
  "caliph",
  "cobweb",
  "dirndl",
  "duplex",
  "euouae",
  "exodus",
  "faking",
  "galaxy",
  "gazebo",
  "giaour",
  "gnarly",
  "gossip",
  "hyphen",
  "icebox",
  "injury",
  "jigsaw",
  "jockey",
  "joking",
  "jovial",
  "joyful",
  "kitsch",
  "larynx",
  "luxury",
  "matrix",
  "oxygen",
  "pajama",
  "phlegm",
  "pizazz",
  "psyche",
  "quartz",
  "quorum",
  "rhythm",
  "snazzy",
  "sphinx",
  "spritz",
  "squawk",
  "subway",
  "swivel",
  "uptown",
  "voodoo",
  "vortex",
  "wheezy",
  "wizard",
  "wyvern",
  "yippee",
  "zephyr",
  "zigzag",
  "zipper",
  "zodiac",
  "zombie",
];
wordsArray[7] = [
  "awkward",
  "buffalo",
  "buffoon",
  "buzzard",
  "buzzing",
  "croquet",
  "curacao",
  "disavow",
  "dwarves",
  "fixable",
  "fuchsia",
  "gnostic",
  "jackpot",
  "jaywalk",
  "jogging",
  "jukebox",
  "keyhole",
  "lengths",
  "marquis",
  "mystify",
  "naphtha",
  "oxidize",
  "quizzes",
  "rhubarb",
  "scratch",
  "stretch",
  "stymied",
  "twelfth",
  "unknown",
  "walkway",
  "whiskey",
];
wordsArray[8] = [
  "abruptly",
  "bagpipes",
  "blizzard",
  "bookworm",
  "buckaroo",
  "daiquiri",
  "dizzying",
  "embezzle",
  "fishhook",
  "flapjack",
  "flopping",
  "foxglove",
  "frazzled",
  "frizzled",
  "glowworm",
  "jaundice",
  "jazziest",
  "jiujitsu",
  "kilobyte",
  "knapsack",
  "mnemonic",
  "nowadays",
  "peekaboo",
  "puzzling",
  "quixotic",
  "rickshaw",
  "schnapps",
  "strength",
  "syndrome",
  "twelfths",
  "unworthy",
  "vaporize",
  "whizzing",
  "whomever",
  "youthful",
];
wordsArray[9] = [
  "bandwagon",
  "beekeeper",
  "buzzwords",
  "cockiness",
  "espionage",
  "galvanize",
  "haphazard",
  "kiwifruit",
  "megahertz",
  "microwave",
  "nightclub",
  "numbskull",
  "pneumonia",
  "strengths",
  "voyeurism",
  "xylophone",
  "yachtsman",
];

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
    mikeBody.children[numMikePiece].classList.remove("transparent");
    numMikePiece += 1;
    if (wrongSound.pause && correctSound.pause) {
      wrongSound.play();
    }
  }
}

function restartMike() {
  numMikePiece = 0;
  let piece = 0;
  while (piece < 7) {
    /* to avoid bugs */
    if (!mikeBody.children[piece].classList.contains("transparent")) {
      mikeBody.children[piece].classList.add("transparent");
    }
    piece += 1;
  }
}

function displayLetterInPositions(letter, positions) {
  const letterBoxes = gameWordContainer.children;
  for (i of positions) {
    letterBoxes[i].innerHTML = letter;
  }
  if (wrongSound.pause && correctSound.pause) {
    correctSound.play();
  }
}

function buildRoomForWord(diffLevel) {
  gameWordContainer.innerHTML = " ";
  for (let i = 0; i < diffLevel; i++) {
    const newElement = document.createElement("div");
    newElement.classList.add("game-letter");
    newElement.innerHTML = " ";
    gameWordContainer.appendChild(newElement);
  }
}

function randomNumSelector(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

/** EVENT LISTENERS (screen)*/

function screenLetterTriggers(event) {
  const letterPressed = event.target.innerHTML.toLowerCase();
  //console.log(pressedLetter);
  if (!pressedLetterArray.includes(letterPressed)) {
    let hasLetterInPositions = isLetterInWordAndWhere(
      letterPressed,
      wordsArray[diffLevel][gameWordNum]
    );
    if (hasLetterInPositions[0]) {
      displayLetterInPositions(letterPressed, hasLetterInPositions.slice(1));
      currentSolvedLetters += hasLetterInPositions.length - 1;
      if (currentSolvedLetters === diffLevel) {
        if (diffLevel === 9) {
          finalWin();
        } else {
          winLevel();
        }
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
function winLevel() {
  restartMike();
  WinLevelScreen.classList.remove("hidden");
  winTime = new Date().getTime();
  timeSubtotal += Math.trunc((winTime - initialTime) / 1000);
  updatePlayerDiv(timeSubtotal + "s", diffLevel - 3);
  finalTime.innerText =
    "You did it in " + Math.trunc((winTime - initialTime) / 1000) + " seconds";
  initialTime = 0;
  winTime = 0;
  levelWonSound.play();
}
function youLose() {
  LoseScreen.classList.remove("hidden");
  if (diffLevel == 4) {
    updatePlayerDiv("-", "Not completed");
  }
  restartMike();
  restoreLetters();
  lostSound.play();
}

function setScreenKeysEventListeners() {
  var screenKeyboard = document.querySelectorAll(".keyboard-letter");
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
      let hasLetterInPositions = isLetterInWordAndWhere(
        letterPressed,
        wordsArray[diffLevel][gameWordNum]
      );
      if (hasLetterInPositions[0]) {
        displayLetterInPositions(letterPressed, hasLetterInPositions.slice(1));
        currentSolvedLetters += hasLetterInPositions.length - 1;
        if (currentSolvedLetters === diffLevel) {
          if (diffLevel === 9) {
            finalWin();
          } else {
            winLevel();
          }
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
}

/* Game start */
/* Event Listener */
startButton.addEventListener("click", gameStart);
/* Main function */
function gameStart() {
  if (document.getElementById("username").value != "") {
    diffLevel = 4;
    wordSelect(diffLevel);
    buildRoomForWord(diffLevel);
    startGameScreen.classList.add("hidden");
    const name = document.getElementById("username").value;
    createPlayers(name, "Currently playing", "1");
    document.onkeypress = keyboardLetterTriggers;
    restartMike();
    restoreLetters();
    pressedLetterArray = [];
    currentSolvedLetters = 0;
    initialTime = new Date().getTime();
    document.getElementById("username").value = "";
    const startSound = new Audio("./sounds/Mike_waz.mp3");
    startSound.play();
  } else {
    alert("You must type a player name to play");
    //mensaje de error
  }
}

/* ! Random word number selection depending of level */
/* Main function */
function wordSelect(diffLevel) {
  const max = wordsArray[diffLevel].length;
  const min = 0;
  gameWordNum = randomNumSelector(max, min);
}

function restoreLetters() {
  const allLetters = document.querySelectorAll(".keyboard-line > div");
  for (let letter of allLetters) {
    letter.classList.remove("letter-disabled");
  }
}

nextLevelBtn.addEventListener("click", goToNextLevel);
endGameBtn.addEventListener("click", goToStartScreen);
playAgainBtn.addEventListener("click", goToStartScreen);
endFinalGameBtn.addEventListener("click", goToStartScreen);

function goToStartScreen() {
  restoreLetters();
  timeSubtotal = 0;
  pressedLetterArray = [];
  currentSolvedLetters = 0;
  finalScreen.classList.add("hidden");
  WinLevelScreen.classList.add("hidden");
  LoseScreen.classList.add("hidden");
  startGameScreen.classList.remove("hidden");
}

function goToNextLevel() {
  restoreLetters();
  pressedLetterArray = [];
  currentSolvedLetters = 0;
  diffLevel++;
  wordSelect(diffLevel);
  buildRoomForWord(diffLevel);
  WinLevelScreen.classList.add("hidden");
  initialTime = new Date().getTime();
}

function disableLetter(letterToDisable) {
  const allLetters = document.querySelectorAll(".keyboard-line > div");
  for (let letter of allLetters) {
    if (letterToDisable == letter.innerHTML.toLowerCase()) {
      letter.classList.add("letter-disabled");
      return disableLetter;
    }
  }
}
// OBJECT PLAYERS

// Constructor method for our players parameters that interest us

class Players {
  constructor(name, time, level) {
    this.name = name;
    this.time = time;
    this.level = level;
  }
}

function createPlayers(name, time, level) {
  // Players object

  var player = new Players(name, time, level);
  playersData.push(player);
  createPlayerDiv(name, time, level);
}

function createPlayerDiv(name, time, level) {
  const whereMyDiv = document.querySelector(".names-container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("names-score-container");
  const namePlayer = document.createElement("div");
  const nameTime = document.createElement("div");
  const nameLevel = document.createElement("div");
  namePlayer.innerHTML = name;
  nameLevel.innerHTML = level;
  nameTime.innerHTML = time;
  namePlayer.classList.add("name-player");
  nameLevel.classList.add("name-level");
  nameTime.classList.add("name-time");
  newDiv.appendChild(namePlayer);
  newDiv.appendChild(nameLevel);
  newDiv.appendChild(nameTime);
  whereMyDiv.prepend(newDiv);
}

function updatePlayerDiv(time, level) {
  const nameContainer = document.querySelector(".names-score-container");
  nameContainer.children[1].innerText = level;
  nameContainer.children[2].innerText = time;
}

function finalWin() {
  finalScreen.classList.remove("hidden");
  winTime = new Date().getTime();
  timeSubtotal += Math.trunc((winTime - initialTime) / 1000);
  updatePlayerDiv(timeSubtotal, diffLevel - 3);
  finalTime.innerText =
    "You did it in " + Math.trunc((winTime - initialTime) / 1000) + " seconds";
  initialTime = 0;
  winTime = 0;
  winSound.play();
}

/* Sounds Implementation */
let backgroundMusic = new Audio("./sounds/background-music.mp3");
backgroundMusic.volume = 0.025;
backgroundMusic.loop = true;
window.onclick = function () {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
};
function speakerClick() {
  const speaker = document.getElementById("speaker");
  if (speaker.classList.contains("fa-volume-up")) {
    speaker.classList.replace("fa-volume-up", "fa-volume-mute");
    muteAll(true);
  } else {
    speaker.classList.replace("fa-volume-mute", "fa-volume-up");
    muteAll(false);
  }
}

function muteAll(istrue) {
  wrongSound.muted = istrue;
  correctSound.muted = istrue;
  winSound.muted = istrue;
  lostSound.muted = istrue;
  levelWonSound.muted = istrue;
  backgroundMusic.muted = istrue;
}
