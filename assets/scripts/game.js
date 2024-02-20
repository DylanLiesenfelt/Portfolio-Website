const  A1 = document.getElementById("A1");
const  A2 = document.getElementById("A2");
const  A3 = document.getElementById("A3");
const  A4 = document.getElementById("A4");
const  A5 = document.getElementById("A5");

const  B1 = document.getElementById("B1");
const  B2 = document.getElementById("B2");
const  B3 = document.getElementById("B3");
const  B4 = document.getElementById("B4");
const  B5 = document.getElementById("B5");

const  C1 = document.getElementById("C1");
const  C2 = document.getElementById("C2");
const  C3 = document.getElementById("C3");
const  C4 = document.getElementById("C4");
const  C5 = document.getElementById("C5");

const  D1 = document.getElementById("D1");
const  D2 = document.getElementById("D2");
const  D3 = document.getElementById("D3");
const  D4 = document.getElementById("D4");
const  D5 = document.getElementById("D5");

const  E1 = document.getElementById("E1");
const  E2 = document.getElementById("E2");
const  E3 = document.getElementById("E3");
const  E4 = document.getElementById("E4");
const  E5 = document.getElementById("E5");

const  F1 = document.getElementById("F1");
const  F2 = document.getElementById("F2");
const  F3 = document.getElementById("F3");
const  F4 = document.getElementById("F4");
const  F5 = document.getElementById("F5");

const  G1 = document.getElementById("G1");
const  G2 = document.getElementById("G2");
const  G3 = document.getElementById("G3");
const  G4 = document.getElementById("G4");
const  G5 = document.getElementById("G5");

const ROCK_SELECT = document.getElementById("rock");
const PAPER_SELECT = document.getElementById("paper");
const SCISSOR_SELECT = document.getElementById("scissor");


function pieceSelector() {
    let choice = 0;

    ROCK_SELECT.addEventListener("click", function selectRock() {
        choice = 1;
    });

    PAPER_SELECT.addEventListener("click", function selectPaper() {
        choice = 2;
    });
    
    SCISSOR_SELECT.addEventListener("click", function selectScissor() {
       choice = 3;
    
    });

    return choice
}
 

function game() {
    selectedPiece = pieceSelector();
    console.log(selectedPiece);
    

}

game()