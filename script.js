// ============================================ //
//                 Données du jeu
// ============================================ //

let jeuActif = false; // Par défaut à la partie est à false 

// 2 joueurs sous forme d'objet
// Récupération des données du DOM
let joueur1 = {
  id: 1,
  globalScoreNode: document.getElementById('globalScore1'), 
  currentScoreNode: document.getElementById('currentScore1')
};
let joueur2 = {
  id: 2,
  globalScoreNode: document.getElementById('globalScore2'), 
  currentScoreNode: document.getElementById('currentScore2')
};


// ============================================ //
//                 Algos du jeu
// ============================================ //


// Fonction retournant un nombre aléatoire entre 1 - 6
function randomNumber() {
  return Math.round(Math.random() * (6 - 1)) + 1;
};

// Fonction remettant tout les score à zéro
function resetToZero() {
  joueur1.globalScoreNode.innerHTML = 0;
  joueur1.currentScoreNode.innerHTML = 0;
  joueur2.globalScoreNode.innerHTML = 0;
  joueur2.currentScoreNode.innerHTML = 0;
};

// Fonction fin de partie
function endGame(joueurActif) {
  if (joueurActif.globalScoreNode.innerHTML >= 100) {
    alert(`Le joueur ${joueurActif.id} à gagné la partie`);
    jeuActif = false;
  };
};

// Récupération de la donnée DOM pour une nouvelle partie
// Nouvelle partie au click sur btn "New game" 
let btnNewGame = document.getElementById('newGame');
btnNewGame.onclick = (e) => {
  e.stopPropagation();

  // Le mode de jeu passe à actif
  jeuActif = true;

  // Remise à zéro des scores en début de partie
  resetToZero();

  // Par défaut, en début de partie, joueur 1 est actif
  let joueurActif = joueur2;
  
  // Algo du tour par tour
  function switchPlayer(joueurActif) {

    joueurActif = joueurActif == joueur2 ? joueur1 : joueur2;
    
    // Récupération des marqueurs (point rouge) devant le joueur actif
    let pointed1 = document.getElementById('pointed1');
    let pointed2 = document.getElementById('pointed2');
    
    // Si le jeu actif
    // l'algo s'éxécute en fonction du joueur actif
    if (jeuActif && joueurActif.id === 1) {
      pointed1.style.display = 'initial'; // Affichage point devant joueur
      pointed2.style.display = 'none'; // Supression point joueur précédent
      rollTheDice(joueurActif, switchPlayer);
      pushInGlobal(joueurActif, switchPlayer);
    } else if (jeuActif && joueurActif.id === 2) {
      pointed2.style.display = 'initial'; // Affichage point devant joueur
      pointed1.style.display = 'none'; // Supression point joueur précédent
      rollTheDice(joueurActif, switchPlayer);
      pushInGlobal(joueurActif, switchPlayer);
    };
  };
  switchPlayer(joueurActif);
};


function rollTheDice(joueurActif, switchPlayer) {
  // Fonction permettant le lancemant du dé 
  // et de récupéré un nombre aléatoire entre 1 - 6

  // Récupération de l'élémpent du DOM
  // Au click, lancement du dé 
  let rollDice = document.getElementById('rollDice');
  rollDice.onclick = (e) => {
    e.stopPropagation();
    
    // Changement du type str en int pour facilité l'addition
    let currentScore = parseInt(joueurActif.currentScoreNode.innerHTML);

    // Récupération de l'élément image
    let img = document.getElementById('imgDe');

    // Fonction pour générer et récupérer un nombre aléatoire
    // entre 1 et 6
     let number = randomNumber();
   
    // Selon le nombre récupéré, un switch/case 
    switch (number) {
      case 1:
        img.src = "../images/face1.png";
        joueurActif.currentScoreNode.innerHTML = currentScore = 0;
        alert("Vous êtes tombé sur le nombre 1: votre score courrant tombe à zéro et la main est à l'autre joueur");
        // Appel à la fonction switchplayer (cf. règles du jeu)
        switchPlayer(joueurActif);
        break;
      case 2:
        img.src = "../images/face2.png";
        joueurActif.currentScoreNode.innerHTML = currentScore += 2;
        break;
      case 3:
        img.src = "../images/face3.png";
        joueurActif.currentScoreNode.innerHTML = currentScore += 3;
        break;
      case 4:
        img.src = "../images/face4.png";
        joueurActif.currentScoreNode.innerHTML = currentScore += 4;
        break;
      case 5:
        img.src = "../images/face5.png";
        joueurActif.currentScoreNode.innerHTML = currentScore += 5;
        break;
      case 6:
        img.src = "../images/face6.png";
        joueurActif.currentScoreNode.innerHTML = currentScore += 6;
        break;
  
      default:
        alert('Une erreur est survenue. Veuillez relancer le dé svp !')
        break;
    }
  };
};

function pushInGlobal(joueurActif, switchPlayer) {
  // Fonction permettant d'envoyer le score courrant dans le global

  let hold = document.getElementById('hold');
  hold.onclick = (e) => {
    e.stopPropagation();

    // Retour image du dé par défault
    let img = document.getElementById('imgDe');
    img.src = "../images/defautFace.png";
    
    // D'abord parseInt, pour facilité l'addition
    let currentScore = parseInt(joueurActif.currentScoreNode.innerHTML);
    let globalScore = parseInt(joueurActif.globalScoreNode.innerHTML);
     // puis ajout du courant dans global,
    joueurActif.globalScoreNode.innerHTML = globalScore += currentScore;
    // Et enfin remise à zéro du score courant
    joueurActif.currentScoreNode.innerHTML = currentScore = 0;
    // et s'il est supérieur ou égal a 100
    endGame(joueurActif);

    // Appel a la fonction switchPlayer (cf. règles du jeu)
    switchPlayer(joueurActif);
  };
};


//