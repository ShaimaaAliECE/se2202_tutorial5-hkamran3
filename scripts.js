let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let labelSwitch = document.getElementById("next-label");
labelSwitch.innerHTML= nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    var cell= document.querySelectorAll("td");
    for(let i =1;i<=cell.length;i++){
        let button = document.createElement("button");
        button.innerHTML= "[]";
        button.id= "b"+i;

        document.getElementById(cell[i-1].getAttribute("id")).appendChild(button);
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    event.target.innerHTML= nextPlayer;
    document.getElementById(event.target.id).disabled=true;
    // Check if the game is over
    if (isGameOver())
    {
    document.getElementById("game-over-lbl").innerHTML = "Game Over";
    }

    
    if(nextPlayer == b1.innerHTML &&nextPlayer == b2.innerHTML && nextPlayer == b3.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b4.innerHTML && nextPlayer == b5.innerHTML && nextPlayer == b6.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b7.innerHTML && nextPlayer == b8.innerHTML && nextPlayer == b9.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b1.innerHTML && nextPlayer == b4.innerHTML && nextPlayer == b7.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b2.innerHTML && nextPlayer == b5.innerHTML && nextPlayer == b8.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b3.innerHTML && nextPlayer == b6.innerHTML && nextPlayer == b9.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b1.innerHTML && nextPlayer == b5.innerHTML && nextPlayer == b9.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    } else if(nextPlayer == b3.innerHTML && nextPlayer == b5.innerHTML && nextPlayer == b7.innerHTML){
        alert("Player "+nextPlayer+" has won! Refresh the page to play again!")

    }
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 

    if (nextPlayer === "X"){
    nextPlayer = "O";
    } else {
    nextPlayer = "X";
    }
    labelSwitch.innerHTML = nextPlayer;
    }


function isGameOver()
{
    var clickedBtn = document.querySelectorAll("button");
    for(let i = 0; i < clickedBtn.length; i++){
        if(document.getElementById(clickedBtn[i].getAttribute("id")).disabled == false){
            return false;
        }
    }
    
    return true;
    // This function returns true if all the buttons are disabled and false otherwise 
   

}
