
const rowCol = document.querySelector('#rowCol');
const number = document.querySelector('#number');
const btnReset = document.querySelector('#btnReset');
let winners = [];
let player1Selections = [];
let player2Selections = [];
let currentPlayer = 0;
let points1 = 0;    // player s1 points
let points2 = 0;    // player s2 points
let size = 3;

function drawTable() {
    let counter = 1;
    const tableGame = document.querySelector('#tableGame');
    btnReset.disabled = true;

    while (tableGame.hasChildNodes()) {
        tableGame.removeChild(tableGame.firstChild);
    }
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let col = document.createElement('td');
            col.id = counter;


            let handler = function (e) {
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    player1Selections.push(parseInt(this.id));
                    player1Selections.sort(function (a, b) { return a - b });
                }

                else {
                    this.innerHTML = "O";
                    player2Selections.push(parseInt(this.id));
                    player2Selections.sort(function (a, b) { return a - b });
                }
                if (checkWinner()) {
                    if (currentPlayer == 0) {
                        points1++;
                    }
                    else {
                        points2++;
                    }
                    // document.querySelector('#playerX').innerHTML = points1;
                    // document.querySelector('#playerO').innerHTML = points2;
                    document.querySelector('#winner').innerHTML = points1 > points2 ? 'X ': 'O';
                   btnReset.disabled = false;
                   // reset();
                   // drawTable();
                }
                else if( player1Selections.length+ player2Selections.length==9){
                    reset();
                    drawTable();
                }
                else {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else if(currentPlayer==1){
                        currentPlayer = 0;
                    }
                        
                    this.removeEventListener('click', arguments.callee);
                }
            };
        
            col.addEventListener('click', handler);
            row.appendChild(col);
            counter++;

        }
        tableGame.appendChild(row);
    }
    loadAnswers();
}
function loadAnswers() {
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}
function checkWinner() {
    let win = false;
    let playerSelections  = [];
    if( currentPlayer ==0){
        playerSelections = player1Selections;
    }
    else{
        playerSelections = player2Selections;
    }
    if(playerSelections.length>=size){
        for( let i =0; i< winners.length;i++){
            let sets = winners[i];
            let setFound = true;

            for( let j = 0; j< sets.length;j++){
                let found = false;
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[j] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                } 

                if (found == false) {
                    setFound = false;
                    break;
                }
            }
            if (setFound == true) {
                win = true;
                break;
            }

        }

    }
    return win;
}
function d(id) {
    var el = document.getElementById(id);
    return el;
}
function reset() {
    currentPlayer = 0;
    player1Selections = [];
    player2Selections = [];
    drawTable();


}
btnReset.addEventListener('click',reset);
window.addEventListener('load', drawTable);
//drawTable();
