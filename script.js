// ================= Algo jeu de dé ================== //

// Play game //
function playGame() {
  let newGame = document.getElementById('newGame');
  let globalScore1 = document.getElementById('globalScore1');
  let globalScore2 = document.getElementById('globalScore2');

  globalScore1.textContent = 0
  globalScore2.textContent = 0

  

  newGame.addEventListener('click', () => {
    globalScore1.textContent = 0
    globalScore2.textContent = 0
  })


};
playGame();


// Player 1 roll the dice //
function rollDice() {
  let rollDice = document.getElementById('rollDice');

  console.log(rollDice)

  rollDice.addEventListener('click', () => {

  })
}
rollDice();

    // Display score in "current"
    function displayCurrentScore() {}

// Player 2 roll the dice

    // Display score in "current"

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
