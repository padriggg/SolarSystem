//import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Initialisieren Sie die Szene, die Kamera und das Renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
var renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 200;

//Licht
const pointLight = new THREE.PointLight(0xffffff, 1.25);
pointLight.position.set(0, 0, 0);

const ambLight = new THREE.AmbientLight(0xffffff, 0.2);

const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(100, 1000, 100);

const hemLight = new THREE.HemisphereLight(0xffffff, 0x080820, 0.8);

const pointLightHelp = new THREE.PointLightHelper(pointLight);

scene.add(pointLight);
scene.add(ambLight);
scene.add(hemLight);
//scene.add(spotLight)

// Erstellen Sie eine Kugel
//Objekte

const parent = new THREE.Object3D();
const parent1 = new THREE.Object3D();
const parent2 = new THREE.Object3D();
const parent3 = new THREE.Object3D();
const parent0 = new THREE.Object3D();

const normalTexture = new THREE.TextureLoader().load("/pics/normal.jpg");

const geometry = new THREE.SphereGeometry(35, 60, 60);
const material = new THREE.MeshStandardMaterial({
  roughness: 0.1,
  metalness: 0.1,
  map: new THREE.TextureLoader().load("/pics/sun.jpg"),
  normalMap: normalTexture,
});

const sphere = new THREE.Mesh(geometry, material);
sphere.position.y = 0;
scene.add(sphere);

/*const geometry1 = new THREE.BoxGeometry(20,20,20,150);
const material1 = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe:true});
const cube = new THREE.Mesh(geometry1, material1);
scene.add(cube);*/

const malu = new THREE.TextureLoader().load("/pics/m.png");
const malu1 = new THREE.TextureLoader().load("/pics/m1.png");

const kurt = new THREE.TextureLoader().load("/pics/p.png");
const kurt1 = new THREE.TextureLoader().load("/pics/p1.png");

const sim = new THREE.TextureLoader().load("/pics/s.png");
const sim1 = new THREE.TextureLoader().load("/pics/s1.png");

const pat = new THREE.TextureLoader().load("/pics/pa.png");
const pat1 = new THREE.TextureLoader().load("/pics/pa1.png");

const gros = new THREE.TextureLoader().load("/pics/a.png");

const haus = new THREE.TextureLoader().load("/pics/haus.png");

const options = {
  speed_S: 0.03,
  speed_P: 0.03,
  speed_M: 0.03,
  speed_K: 0.03,
  speed_A: 0.03,

  size_S: 5,
  size_P: 5,
  size_M: 5,
  size_K: 5,
  size_A: 5,

  stopp_speed: false,
  falling_speed: 0.4,
  color: 0xffffff,
  zeus: false,
  falling: false,
};

const geometry2 = new THREE.SphereGeometry(
  options.size_P,
  60,
  60,
  Math.PI / 2,
  Math.PI,
  0,
  Math.PI
);
const material21 = new THREE.MeshStandardMaterial({ roughness: 0.5, map: pat });
const material211 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: pat1,
});

const stab1 = new THREE.Mesh(geometry2, material21);
const stab10 = new THREE.Mesh(geometry2, material211);

stab10.rotation.y = Math.PI;
var combStab = new THREE.Group();
combStab.add(stab1, stab10);
combStab.position.z = -85;

parent.add(combStab);
scene.add(parent);

const geometry3 = new THREE.SphereGeometry(
  options.size_S,
  60,
  60,
  Math.PI / 2,
  Math.PI,
  0,
  Math.PI
);
const material31 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  metalness: 0.5,
  map: sim,
});
const material311 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  metalness: 0.5,
  map: sim1,
});

const stab2 = new THREE.Mesh(geometry3, material31);
const stab20 = new THREE.Mesh(geometry3, material311);

stab20.rotation.y = Math.PI;
var combStab0 = new THREE.Group();
combStab0.add(stab2, stab20);
combStab0.position.z = -185;

parent0.add(combStab0);
scene.add(parent0);

const geometry4 = new THREE.SphereGeometry(
  options.size_M,
  60,
  60,
  Math.PI / 2,
  Math.PI,
  0,
  Math.PI
);
const material41 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: malu,
});
const material411 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: malu1,
});

const stab3 = new THREE.Mesh(geometry4, material41);
const stab30 = new THREE.Mesh(geometry4, material411);

stab30.rotation.y = Math.PI;
var combStab1 = new THREE.Group();
combStab1.add(stab3, stab30);
combStab1.position.x = -285;

parent1.add(combStab1);
scene.add(parent1);

const geometry5 = new THREE.SphereGeometry(
  options.size_K,
  60,
  60,
  Math.PI / 2,
  Math.PI,
  0,
  Math.PI
);
const material51 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: kurt,
});
const material511 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: kurt1,
});

const stab4 = new THREE.Mesh(geometry5, material51);
const stab40 = new THREE.Mesh(geometry5, material511);

stab40.rotation.y = Math.PI;
var combStab2 = new THREE.Group();
combStab2.add(stab4, stab40);
combStab2.position.z = -235;

parent2.add(combStab2);
scene.add(parent2);

const geometry6 = new THREE.SphereGeometry(
  options.size_A,
  60,
  60,
  Math.PI / 2,
  Math.PI,
  0,
  Math.PI
);
const material61 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: gros,
});
const material611 = new THREE.MeshStandardMaterial({
  roughness: 0.5,
  map: gros,
});

const stab5 = new THREE.Mesh(geometry6, material61);
const stab50 = new THREE.Mesh(geometry6, material611);

stab50.rotation.y = Math.PI;
var combStab3 = new THREE.Group();
combStab3.add(stab5, stab50);
combStab3.position.x = -135;

parent3.add(combStab3);
scene.add(parent3);
// Fügen Sie einen Eventlistener für das Klicken auf die Kugel hi

const gui = new dat.GUI();
// Fügen Sie eine Lichtquelle hinzu
gui.add(options, "zeus").onChange(function (e) {
  const loader = new THREE.CubeTextureLoader();

  if (e) {
    const texture = loader.load([
      "./penguins1/zeus_ft.jpg",
      "./penguins1/zeus_bk.jpg",
      "./penguins1/zeus_up.jpg",
      "./penguins1/zeus_dn.jpg",
      "./penguins1/zeus_rt.jpg",
      "./penguins1/zeus_lf.jpg",
    ]);

    scene.background = texture;
  } else {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      "./penguins/xpos.png",
      "./penguins/xneg.png",
      "./penguins/ypos.png",
      "./penguins/yneg.png",
      "./penguins/zpos.png",
      "./penguins/zneg.png",
    ]);

    scene.background = texture;
  }
});

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  "./penguins/xpos.png",
  "./penguins/xneg.png",
  "./penguins/ypos.png",
  "./penguins/yneg.png",
  "./penguins/zpos.png",
  "./penguins/zneg.png",
]);

scene.background = texture;

gui.add(options, "speed_P", 0, 0.05);
gui.add(options, "speed_S", 0, 0.05);
gui.add(options, "speed_M", 0, 0.05);
gui.add(options, "speed_K", 0, 0.05);
gui.add(options, "speed_A", 0, 0.05);

gui.add(options, "stopp_speed").onChange(function (e) {
  if (e) {
    options.stopp = true;
  }
});

gui.add(options, "size_P", 3, 9);
gui.add(options, "size_S", 3, 9);
gui.add(options, "size_M", 3, 9);
gui.add(options, "size_K", 3, 9);
gui.add(options, "size_A", 3, 9);

gui.addColor(options, "color").onChange(function (e) {
  hemLight.color.set(e);
});

gui.add(options, "falling").onChange(function (e) {
  if (e) {
    options.falling = true;
  }
});

gui.add(options, "falling_speed", 0.1, 0.8);

let step = 0;

const geometry33 = new THREE.PlaneGeometry(600, 600);

const material34 = new THREE.MeshStandardMaterial({
  color: 0x666666,
  roughness: 0.6,
  side: THREE.DoubleSide,
  wireframe: false,
  map: haus,
});

const plane = new THREE.Mesh(geometry33, material34);

plane.rotation.x = -0.5 * Math.PI;

const ebeneY = 200;
plane.position.y = -ebeneY;

// Animationsfunktion
var animate = function () {
  requestAnimationFrame(animate);

  sphere.rotateY(0.008);

  combStab.scale.set(options.size_P, options.size_P, options.size_P);
  combStab0.scale.set(options.size_S, options.size_S, options.size_S);
  combStab1.scale.set(options.size_M, options.size_M, options.size_M);
  combStab2.scale.set(options.size_K, options.size_K, options.size_K);
  combStab3.scale.set(options.size_A, options.size_A, options.size_A);

  combStab.rotateY(0.007);
  combStab0.rotateY(0.007);
  combStab1.rotateY(0.007);
  combStab2.rotateY(0.007);
  combStab3.rotateY(0.007);

  if (options.falling) {
    let dist = 150 + ebeneY;
    scene.add(plane);
    step += options.falling_speed;

    parent.position.y =
      dist * Math.abs(Math.cos((1 / Math.sqrt(dist)) * step)) - ebeneY + 15;
    parent0.position.y =
      dist * Math.abs(Math.cos((1 / Math.sqrt(dist)) * step)) - ebeneY + 15;
    parent1.position.y =
      dist * Math.abs(Math.cos((1 / Math.sqrt(dist)) * step)) - ebeneY + 15;
    parent2.position.y =
      dist * Math.abs(Math.cos((1 / Math.sqrt(dist)) * step)) - ebeneY + 15;
    parent3.position.y =
      dist * Math.abs(Math.cos((1 / Math.sqrt(dist)) * step)) - ebeneY + 15;
  } else {
    //scene.remove(plane);

    parent.position.y = 0;
    parent0.position.y = 0;
    parent1.position.y = 0;
    parent2.position.y = -80;
    parent3.position.y = 80;
  }

  if (options.stopp_speed) {
    parent.rotateY(0);

    parent0.rotateY(0);

    parent1.rotateY(0);

    parent2.rotateY(0);

    parent3.rotateY(0);
  } else {
    parent.rotateY(options.speed_P);

    parent0.rotateY(options.speed_S);

    parent1.rotateY(options.speed_M);

    parent2.rotateY(options.speed_K);

    parent3.rotateY(options.speed_A);
  }

  renderer.render(scene, camera);
};
//cube.rotateY(0.005)

animate();
