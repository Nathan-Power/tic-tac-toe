var player1 = '<img src="kris.jpg">';
var player2 = '<img src="nathan.jpg">';
var australia = '<img src="australia.png">';
var poland = '<img src="poland.png">';
var japan = '<img src="japan.png">';
var england = '<img src="england.png">';

var name1 = prompt("Please enter your name", "Player 1");
var name2 = prompt("Please enter your name", "Player 2");

document.getElementById("pl1").innerHTML = name1;
document.getElementById("pl2").innerHTML = name2;

var currentTurn = 1;
var movesMade = 0;
var p1 = 0
var p2 = 0

var winnerContainer = $('.winner');
var reset = $('.reset');
var title = $('title');

var score1 = $('.score-1');
var score2 = $('.score-2');

var sqr = $('.square');

//var squarebox = $('.square');

sqr.on('click', (e) => {
    movesMade++;
    event.target.classList.add('noClick');
    /* Alternative code -----
    event.target.style.pointerEvents = "none";
    ---jQuery code---
    $(event.currentTarget).addClass('noClick');
    ------*/
    if (currentTurn % 2 === 1) {
        event.target.innerHTML = symbol1(name1);
        event.target.style.color = "turquoise";
        currentTurn++;
    } else {
        event.target.innerHTML = symbol2(name2);
        event.target.style.color = "green";
        currentTurn--;
    }

    if (checkForWinner()) {
        theWinner = currentTurn == 1 ? player2 : player1;
        declareWinner2(theWinner);
        var moves = Array.prototype.slice.call($(".square"));
        moves.map((m) => {
            m.innerHTML = "";
        });
        movesMade = 0; 
            if (theWinner === player1) {
                p1++;
                document.getElementById("score-1").innerHTML = p1;
                currentTurn = 2
                //document.getElementsById("squarebox").classList.remove('noClick');
                /*var i;
                for (i = 0; i < square.length; i++) { 
                sqr.classList.remove('noCLick');
                }
                */
                //document.getElementsByClassName("square").remove('noClick');
                //sqr.classList.remove('noClick');
                //$( "div" ).removeClass("noClick");
                //removenoClick();
                /*while(sqr.length > 0){
                    sqr[0].classList.remove('noClick');
                }
                */
                /*var noClickList = element.classList;
                while (noClickList.length > 0) {
                   noClickList.remove(classList.item(0));
                }
                */
                removenoClick();
                return alert(name1 + " Wins! " + name2 + "'s turn!");
            } else {
                p2++;
                document.getElementById("score-2").innerHTML = p2;
                currentTurn = 1
                removenoClick();
                return alert(name2 + " Wins! " + name1 + "'s turn!");
            }
 
    }

// this is the code in case of a draw
    if (movesMade >= 9) {
       var moves = Array.prototype.slice.call($(".square"));
       moves.map((m) => {
           m.innerHTML = "";
       });
       movesMade = 0;
            if (currentTurn === 2) {
                currentTurn = 2
                return alert("Draw! " + name2 + "'s turn!");
                
            } else {
                currentTurn = 1
                return alert("Draw! " + name1 + "'s turn!");
            }
    }
});


reset.on('click', (e) => {
    var moves = Array.prototype.slice.call($(".square"));
    moves.map((m) => {
        m.innerHTML = "";
    });
    //winnerContainer.html('');
    //winnerContainer.css('display', "none");
    currentTurn = 1;

});


//functions used to decide the symbols

function symbol1(cat) {
    if (cat === "Kris") {
        return player1;
    } else if (cat === "Nate") {
        return player2;  
    } else if (cat === "Australia") {
        return australia;  
    } else if (cat === "Japan") {
        return japan;
    } else if (cat === "England") {
        return england;
    } else if (cat === "Poland") {
        return poland;
    } else 
        return 'X';
}

function symbol2(cat) {
    if (cat === "Nate") {
        return player2;
    } else if (cat === "Kris") {
        return player1; 
    } else if (cat === "Nate") {
        return player2;  
    } else if (cat === "Australia") {
        return australia;  
    } else if (cat === "Japan") {
        return japan;
    } else if (cat === "England") {
        return england;
    } else if (cat === "Poland") {
        return poland;
    } else 
        return 'O';
}

function removenoClick() {
    var element = document.getElementById("squarebox1");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox2");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox3");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox4");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox5");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox6");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox7");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox8");
    element.classList.remove("noClick");

    element = document.getElementById("squarebox9");
    element.classList.remove("noClick");
}

/* old code ------------
function declareWinner(winner) {
    winnerContainer.css('display', "block");
    reset.css('display', 'block');
    winner = winner === player1 ? name1 : name2;
    winnerContainer.html(winner + " Wins!");
}
-------------------------*/

function declareWinner2(winner) {
    winner = winner === player1 ? name1 : name2;
}

function checkForWinner() {
    //need at least four moves to check for a winner
    if (movesMade > 4) {
        var sqr = $('.square');
        //research why we need call here!
        var moves = Array.prototype.slice.call($(".square"));
        var results = moves.map(function(square) { return square.innerHTML; });
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningCombos.find(function(combo) {
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
        });
    }
}