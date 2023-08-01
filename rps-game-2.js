function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function computerPlay() {
    const array = ["Rock", 'Paper', "Scissors"];
    const result = getRandomItem(array);
    return result;
}

let playerscore = 0;
let computerscore = 0;
let playedrounds = 0;

function tie() {
    let container = document.getElementById('result').innerHTML = "Tie";
    playedrounds++;
    let container2 = document.getElementById('numberofrounds').innerHTML = "Rounds played: " + playedrounds;
}

function computerWin() {
    let container = document.getElementById('result').innerHTML = 'Computer wins';
    playedrounds++;
    let container2 = document.getElementById('numberofrounds').innerHTML = "Rounds played: " + playedrounds;
    computerscore++;
    let container3 = document.getElementById('computerscore').innerHTML = "Computer: " + computerscore;
}

function playerWin() {
    let container = document.getElementById('result').innerHTML = 'You win';
    playedrounds++;
    let container2 = document.getElementById('numberofrounds').innerHTML = "Rounds played: " + playedrounds;
    playerscore++;
    let container4 = document.getElementById('playerscore').innerHTML = "Player: " + playerscore;
}


function paperSelection(selection) {
    const paperbtn = document.querySelector('#paper').innerHTML;
    const computer = computerPlay();
    if (computer == paperbtn) {
        tie();
    }
    else if (computer == "Scissors") {
        computerWin();
    }
    else {
        playerWin();
    }
}

function scissorsSelection(selection) {
    const scissorsbtn = document.querySelector('#scissors').innerHTML;
    const computer = computerPlay();
    if (computer == scissorsbtn) {
        tie();
    }
    else if (computer == "Rock") {
        computerWin();
    }
    else {
        playerWin();
    }
}

function rockSelection(selection) {
    const rockbtn = document.querySelector('#rock').innerHTML;
    const computer = computerPlay();
    if (computer == rockbtn) {
        tie();
    }
    else if (computer == "Paper") {
        computerWin();
    }
    else {
        playerWin();
    }
}

function resetButton() {
    let container = document.getElementById('result').innerHTML = 'Result of the round is...';
    let container2 = document.getElementById('numberofrounds').innerHTML = 'Rounds played: 0';
    let container3 = document.getElementById('computerscore').innerHTML = 'Computer: 0';
    let container4 = document.getElementById('playerscore').innerHTML = "Player: 0";
}