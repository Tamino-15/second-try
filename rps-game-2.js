function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function computerPlay(){

    const array = ["Rock", 'Paper', "Scissors","Rock", 'Paper', "Scissors"];

    const result = getRandomItem(array);

    return result;
}

function playerSelection(selection){

    let player = document.getElementById("options").innerHTML + selection;

    console.log(player);
 
}
