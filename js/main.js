//
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var nbRandom = Math.random();
// var computerChoice = '';
// if (nbRandom < 0.34) {
//   computerChoice = "rock";
// } else if(nbRandom <= 0.67 && nbRandom >= 0.34) {
//   computerChoice = "paper";
// } else {
//   computerChoice = "scissors";
// }
//
// alert("Computer: " + computerChoice);
//
// function compare (choice1, choice2) {
//
// var player = 0;
// var computer = 0;
//
// while (player < 3 && computer < 3) {
//
//
//
//   var userChoice = prompt("Do you choose rock, paper or scissors?");
//   var nbRandom = Math.random();
//   var computerChoice = '';
//   if (nbRandom < 0.34) {
//     computerChoice = "rock";
//   } else if(nbRandom <= 0.67 && nbRandom >= 0.34) {
//     computerChoice = "paper";
//   } else {
//     computerChoice = "scissors";
//   }
//
//   alert("Computer: " + computerChoice);
//
//
// if (choice1 === choice2) {
// alert ("Play again!");
// } else if (choice1 === "rock") {
//     if (choice2 === "scissors") {
//         alert ("user wins");
//         player++;
//     } else {
//         alert ("computer wins");
//         computer++;
// }
// } else if (choice1 === "paper") {
//     if (choice2 === "rock") {
//         alert ("user wins");
//         player++;
//     } else {
//         alert ("computer wins");
//         computer++;
//     }
// } else if (choice1 === "scissors") {
//     if (choice2 === "paper") {
//         alert ("user wins");
//         player++;
//     } else {
//         alert ("computer wins");
//         computer++;
//     }
// }
// }
// }
//
//
// compare (userChoice, computerChoice);


//
//
// // variables used to store scores
// var scoreJ = 0;
// var scoreO = 0;
// // this function does everything needed for this game
// function calcRes(n = 0) {
//   var x = document.getElementById("choix").selectedIndex;
//   var y = document.getElementById("choix").options;
//   // gets the value of the selected <option> (0, 1 or 2)
//   var joueur = y[x].value;
//
//  // if n is 1 calculates the result of the match, if 0 then resets the scores
//   if (n == 1) {
//     // checks that both players have less than 2 points
//     if (scoreJ < 2 && scoreO < 2) {
//       var ordi = Math.trunc(Math.random() * 3);
//       var res = ordi - joueur;
//       // compares value of both players choice depending of the result players get points or a draw
//       if (res == 1 || res == -2) {
//         alert("Bien joué !");
//         scoreJ++;
//         if (scoreJ == 2) {
//           alert("Vous avez gagné !");
//           calcRes();
//         }
//       } else if (res == 2 || res == -1) {
//         alert("booouh");
//         scoreO++;
//         if (scoreO == 2) {
//           alert("Vous avez perdu !");
//           calcRes();
//         }
//       } else {
//         alert("Match nul !");
//       }
//       document.getElementById('resultat').innerHTML = " " + scoreJ + " - " + scoreO + " ";
//     }


var player = 0;
var ordi = 0;

while (player < 3 && ordi < 3) {

var user = prompt ('pierre, feuille, ciseaux ?');
var computer = Math.random();

if (computer < 0.34) {
  computer = "pierre";
} else if (computer > 0.33 && computer < 0.64) {
  computer = "feuille";
} else {
  computer = "ciseaux";
}

alert ("computer : " + computer);



  if (user === computer) {
    alert('rejoue');
  }
  else if (user === "pierre") {
    if (computer === "feuille") {
      alert ("computer gagne");
      ordi++;


    } else {
      alert ("user gagne");
      player++;
    }

  }
  else if (user === "feuille") {
     if (computer === "pierre") {
      alert ('user gagne');
      player++;

    } else {
      alert ('computer gagne');
      ordi++;
    }

  }
  else if (user === 'ciseaux') {
    if (computer === "pierre") {
      alert ('computer gagne');
      ordi++;

    } else {
      alert('user gagne');
      player++;
    }
  }

}
