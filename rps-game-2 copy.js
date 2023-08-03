function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function computerPlay(){

    const array = ["Rock", 'Paper', "Scissors"];

    const result = getRandomItem(array);

    return result;
}


let playerscore=0;
let computerscore=0;
let playedrounds=0;

let container = document.getElementById('result').innerHTML;

let container2 = document.getElementById('numberofrounds').innerHTML;

let container3 = document.getElementById('computerscore').innerHTML;

let container4 = document.getElementById('playerscore').innerHTML;

function resetButton(){

    container = 'Result of the round is...';

    container2 = 'Rounds played: 0';

    container3 = 'Computer: 0';

    container4 = "Player: 0";

    playerscore=0;

    computerscore=0;

    playedrounds=0;
}   

function paperSelection(selection){

    const paperbtn = document.querySelector('#paper').innerHTML;

    const computer= computerPlay();

    if (computer==paperbtn){

        container = "Tie";
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
        
    }
    else if(computer=="Scissors"){

        container = 'Computer wins';
        
        playedrounds++;
        container2 =  "Rounds played: "+playedrounds;
        
        computerscore++;
        container3 = "Computer: " +computerscore;
    }
    else{

        container = 'You win';
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
   
        playerscore++;
        container4 = "Player: " +playerscore;
    }
}

function scissorsSelection(selection){

    const scissorsbtn = document.querySelector('#scissors').innerHTML;

    const computer= computerPlay();

    if (computer==scissorsbtn){
         container = "Tie";
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
        
    }
    else if(computer=="Rock"){
        
        container ='Computer wins';
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
        
        computerscore++;
        container3 = "Computer: " +computerscore;
    
    }
    else{
        container ='You win';
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
   
        playerscore++;
        container4 ="Player: " +playerscore;
    
     }
}

function rockSelection(selection){
    const rockbtn = document.querySelector('#rock').innerHTML;

    const computer= computerPlay();

    if (computer==rockbtn){
         container = "Tie";
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
        
    }
    else if(computer=="Paper"){
        
        container ='Computer wins';
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
        
        computerscore++;
        container3 = "Computer: " +computerscore;
    
    }
    else{
        container ='You win';
        
        playedrounds++;
        container2 = "Rounds played: "+playedrounds;
   
        playerscore++;
        container4 ="Player: " +playerscore;
    
     }

}



