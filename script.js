// ================= Algo jeu de dé ================== //
// Règles :
// Le jeu comprend 2 joueurs sur un seul et même écran.
// Chaque joueur possède un score temporaire (ROUND ou current) et un score global (GLOBAL). À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
// Lors de son tour, le joueur peut décider à tout moment de: 
// - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.
// -Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
// Le premier joueur qui atteint les 100 points sur global gagne le jeu.

// Play game //
function playGame() {
  // Joueur 1
  let globalScore1Node = document.getElementById('globalScore1');
  let currentScore1Node = document.getElementById('currentScore1');
  globalScore1Node.textContent = 0;
  currentScore1Node.textContent = 0;

  // Joueur 2
  let globalScore2Node = document.getElementById('globalScore2');
  let currentScore2Node = document.getElementById('currentScore2');
  globalScore2Node.textContent = 0;
  currentScore2Node.textContent = 0;

  rollDice(currentScore1Node, globalScore1Node)
  rollDice(currentScore2Node, globalScore2Node)
};

let newGame = document.getElementById('newGame');
newGame.addEventListener('click', () => {
  playGame();
})



// Fonction Roll the dice => lancer le dé //
function rollDice(currentScoreNode, globalScoreNode) {
  let rollDice = document.getElementById('rollDice');
  let currentScoreInt = parseInt(currentScoreNode.textContent);
  
  function switchCase() {
    let number = () => {
      return Math.round(Math.random() * (6 - 1) + 1);
    };   

    switch (number()) {
      case 1:
        currentScoreNode.textContent = 0 ;
        break;
      case 2:
        currentScoreNode.textContent = currentScoreInt += 2;
        break;
      case 3:
        currentScoreNode.textContent = currentScoreInt += 3;
        break;
      case 4:
        currentScoreNode.textContent = currentScoreInt += 4;
        break;
      case 5:
        currentScoreNode.textContent = currentScoreInt += 5;
        break;
      case 6:
        currentScoreNode.textContent = currentScoreInt += 6;
        break;
    
      default:
        console.log("Un problème est survenue");
        break;
    }
    hold(currentScoreNode, globalScoreNode)
  };

  rollDice.addEventListener('click', switchCase);
};

// fonction pour transferer le current
function hold(currentScoreNode, globalScoreNode) {
  let hold = document.getElementById('hold');
  let globalScoreInt = parseInt(globalScoreNode.textContent);
  let currentScoreInt = parseInt(currentScoreNode.textContent);


  hold.addEventListener('click', () => {
    currentScoreNode.textContent = 0;
    globalScoreNode.textContent = globalScoreInt += currentScoreInt;
  });

};



// 2 round

    // Display global scores 


// ================= Canvas du dé ================== //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';

// // camera
// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 5, 100000);
// camera.position.set(563.47, 612.78, 555.8);
// camera.quaternion.setFromEuler(new THREE.Euler(-0.79, 0.62, 0.52));

// // scene
// const scene = new THREE.Scene();

// // spline scene
// const loader = new SplineLoader();
// loader.load(
//   'https://prod.spline.design/2fCnfMagXhd4UyrC/scene.splinecode',
//   (splineScene) => {
//     scene.add(splineScene);
//   }
// );

// // renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// // scene settings
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// scene.background = new THREE.Color('#121316');
// renderer.setClearAlpha(0);

// // orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.125;

// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate(time) {
//   controls.update();
//   renderer.render(scene, camera);
// }
