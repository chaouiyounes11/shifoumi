var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} alert("Computer: " + computerChoice);

function compare (choice1, choice2) {

if (choice1 === choice2) {
return "Play again!";
} else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
}
} else if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins";
    } else {
        return "scissors wins";
    }
} else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        return " scissors wins";
    } else {
        return "rock wins";
    }
}
}

alert(compare (userChoice, computerChoice));


/*
// variables used to store scores
var scoreJ = 0;
var scoreO = 0;
// this function does everything needed for this game
function calcRes(n = 0) {
  var x = document.getElementById("choix").selectedIndex;
  var y = document.getElementById("choix").options;
  // gets the value of the selected <option> (0, 1 or 2)
  var joueur = y[x].value;

 // if n is 1 calculates the result of the match, if 0 then resets the scores
  if (n == 1) {
    // checks that both players have less than 2 points
    if (scoreJ < 2 && scoreO < 2) {
      var ordi = Math.trunc(Math.random() * 3);
      var res = ordi - joueur;
      // compares value of both players choice depending of the result players get points or a draw
      if (res == 1 || res == -2) {
        alert("Bien joué !");
        scoreJ++;
        if (scoreJ == 2) {
          alert("Vous avez gagné !");
          calcRes();
        }
      } else if (res == 2 || res == -1) {
        alert("booouh");
        scoreO++;
        if (scoreO == 2) {
          alert("Vous avez perdu !");
          calcRes();
        }
      } else {
        alert("Match nul !");
      }
      document.getElementById('resultat').innerHTML = " " + scoreJ + " - " + scoreO + " ";
    }

    */
