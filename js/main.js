/*=========================================
===========================================
=============CODE FROM MYSELF=============
==========================================
==========================================
==========================================*/

/*=========================================
===========================================
=============VARIABLES=====================
==========================================
==========================================
==========================================*/

var userimg = document.getElementsByClassName('userPictures');
var computerImg = document.getElementsByClassName('computerPictures');
var userChoice="";
var computer = "";
var player = 0;
var ordi = 0;


/*=========================================
===========================================
=============FUNCTIONS=====================
==========================================
==========================================
==========================================*/

//INPUT  function TO REGISTER USERNAME
function myFunction() {
  document.getElementById('name').innerHTML = document.getElementById('inputUser').value.toUpperCase();
  document.getElementById('inputUser').value.toUpperCase();
}

//FUNCTION THAT SETS USER IMAGES TO OPACITY "1"

function userOpacity () {
  for (var i=0; i<userimg.length; i++) {
    userimg[i].style.opacity="0.5";
  }
  console.log(userChoice);
  document.getElementById(userChoice).style.opacity = '1';
}

function computerOpacity () {
  for (var i=0; i<computerPictures.length; i++) {
    computerImg[i].style.opacity="0.5";
  }
  document.getElementById(computer).style.opacity = '0.5';

}

//FUNCTION USER CHOICE
function choiceUser(choix){
  userChoice = choix;
  document.getElementById("choixUser").innerHTML= "User : " +userChoice;
  computerChoice ();
  userOpacity();
  compare(userChoice, computer);
}

//VAR FOR COMPUTER CHOICE
function computerChoice () {
  computer = Math.random();
  if (computer < 0.34){
    computer= "pierre";
    document.getElementById('rock').style.opacity="1";
  }
   else if (computer > 0.33 && computer <0.64){
    computer= "feuille";
    document.getElementById('paper').style.opacity="1";
  }
  else {
    computer= "ciseaux";
    document.getElementById('scissors').style.opacity="1";

  }
  document.getElementById("choixOrdi").innerHTML= "Ordi : " +computer;
}


//FUNCTION THAT DEFINES SHIFOUMI's RULES

function compare (user, computer) {

  if (user === computer) {
     document.getElementById("resultat").innerHTML ="égalité";
  }
  else if (user === "pierre") {
    if (computer === "feuille") {
 document.getElementById("resultat").innerHTML ="computer gagne";
       ordi++;
    }
    else {
      document.getElementById("resultat").innerHTML ="user gagne";
      player++;
    }
  }
  else if (user === "feuille") {
     if (computer === "pierre") {
       document.getElementById("resultat").innerHTML ="user gagne";
      player++;

    } else {
      document.getElementById("resultat").innerHTML ="computer gagne";
      ordi++;
    }

  }
  else if (user === 'ciseaux') {
    if (computer === "pierre") {
      document.getElementById("resultat").innerHTML ="computer gagne";
      ordi++;

    } else {
      document.getElementById("resultat").innerHTML ="user gagne";
      player++;
    }
  }

  //CHECK FINAL RESULT
  document.getElementById("scoreUser").innerHTML ="User " + player;
  document.getElementById("scoreComputer").innerHTML ="Computer " + ordi;

  //UPDATE SCORE IN HTML
  if (player === 3) {
    document.getElementById("name").innerHTML =" a gagné la partie !";
     player = 0;
     ordi = 0;
  }
  if (ordi === 3) {
    document.getElementById("name").innerHTML =" a perdu la partie !";
     player = 0;
     ordi = 0;
  }




}


/*=========================================
===========================================
=============SCRIPT========================
==========================================
==========================================
==========================================*/




//FUNCTION THAT MAKES CHANGES OPACITY
// function changeImagesOpacity (index) {
//   var imgChanged = document.getElementsByClassName('picsUser');
//    imgChanged[index].style.opacity = "1";
// }
//VAR AND LOOP "FOR" TO SELECT THE IMAGE CLICKED AND SET OPACITY TO "1"

// var userimg = document.getElementsByClassName('userPictures');
// for (let i=0; i<userimg.length; i++) {
//   userimg[i].onclick = function (){
//     for (var j = 0; j < userimg.length; j++) {
//       userimg[j].style.opacity="0.5"
//     }
//     changeImagesOpacity(i);
//   }
// }




/*=========================================
===========================================
========CODE FROM CODACADEMY ==============
==========================================
==========================================
==========================================*/
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

/*=========================================
===========================================
========CODE FROM GREGOIRE, SIMPLON=======
==========================================
==========================================
==========================================*/


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
