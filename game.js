import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

const sizes = {
   width: window.innerWidth,
   height: window.innerHeight
 } 
 
 window.addEventListener('resize', () => {
   // Update sizes
   sizes.width = window.innerWidth
   sizes.height = window.innerHeight
 
   // Update camera
   camera.aspect = sizes.width / sizes.height
   camera.updateProjectionMatrix()
 
   // Update renderer
   renderer.setSize(sizes.width, sizes.height)
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 })
 
// Initialisieren Sie die Szene, die Kamera und das Renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
var renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(2);

camera.position.z = 130;

//Licht
const pointLight = new THREE.PointLight(0xffffff, 1.3)
pointLight.position.set(0,0,0)

const ambLight = new THREE.AmbientLight(0xffffff, 0.2)

const spotLight = new THREE.SpotLight( 0xffffff,1 );
spotLight.position.set( 100, 1000, 100 );

const hemLight=new THREE.HemisphereLight(0xffffff,0x080820, 0.8)


const pointLightHelp= new THREE.PointLightHelper(pointLight)

scene.add(pointLight)
scene.add(ambLight)
scene.add(hemLight)
//scene.add(spotLight)

// Erstellen Sie eine Kugel
//Objekte 

const parent= new THREE.Object3D()
const parent1= new THREE.Object3D()
const parent2= new THREE.Object3D()
const parent3= new THREE.Object3D()
const parent0= new THREE.Object3D()


const geometry = new THREE.SphereGeometry(35, 60, 60);
const material = new THREE.MeshStandardMaterial({ roughness: 0.8, map: new THREE.TextureLoader().load('/pics/sun.jpg') });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.y=0
scene.add(sphere);


/*const geometry1 = new THREE.BoxGeometry(20,20,20,150);
const material1 = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe:true});
const cube = new THREE.Mesh(geometry1, material1);
scene.add(cube);*/

const malu=new THREE.TextureLoader().load('/pics/m.png')
const kurt=new THREE.TextureLoader().load('/pics/p.png')
const sim= new THREE.TextureLoader().load('/pics/s.png')
const pat= new THREE.TextureLoader().load('/pics/pa.png')
const gros=new THREE.TextureLoader().load('/pics/a.png')

const options = {

  speed_S: 0.05,
  speed_P:0.05,
  speed_M: 0.05,
  speed_K:0.05,
  speed_A:0.05, 

  size_S: 4,
  size_P: 4,
  size_M: 4,
  size_K: 4,
  size_A: 4, 

  color: 0xffffff
};


const geometry2 = new THREE.SphereGeometry(options.size_P, 60, 60, Math.PI/2, Math.PI, 0, Math.PI);
const material21 = new THREE.MeshStandardMaterial({  roughness: 0.8, map: pat });

const stab1 = new THREE.Mesh(geometry2, material21);
const stab10 = new THREE.Mesh(geometry2, material21);

stab10.rotation.y=Math.PI
var combStab= new THREE.Group()
combStab.add(stab1, stab10)
combStab.position.z=-70

parent.add(combStab)
scene.add(parent);



const geometry3 = new THREE.SphereGeometry(options.size_S, 60, 60, Math.PI/2, Math.PI, 0, Math.PI);
const material31 = new THREE.MeshStandardMaterial({  roughness: 0.8, map: sim });

const stab2 = new THREE.Mesh(geometry3, material31);
const stab20 = new THREE.Mesh(geometry3, material31);

stab20.rotation.y=Math.PI
var combStab0= new THREE.Group()
combStab0.add(stab2, stab20)
combStab0.position.z=-140

parent0.add(combStab0)
scene.add(parent0);



const geometry4 = new THREE.SphereGeometry(options.size_M, 60, 60, Math.PI/2, Math.PI, 0, Math.PI);
const material41 = new THREE.MeshStandardMaterial({  roughness: 0.8, map: malu });


const stab3 = new THREE.Mesh(geometry4, material41);
const stab30 = new THREE.Mesh(geometry4, material41);

stab30.rotation.y=Math.PI
var combStab1= new THREE.Group()
combStab1.add(stab3, stab30)
combStab1.position.x=-210

parent1.add(combStab1)
scene.add(parent1);


const geometry5 = new THREE.SphereGeometry(options.size_K, 60, 60, Math.PI/2, Math.PI, 0, Math.PI);
const material51 = new THREE.MeshStandardMaterial({  roughness: 0.8, map: kurt });


const stab4 = new THREE.Mesh(geometry5, material51);
const stab40 = new THREE.Mesh(geometry5, material51);

stab40.rotation.y=Math.PI
var combStab2= new THREE.Group()
combStab2.add(stab4, stab40)
combStab2.position.z=-280

parent2.add(combStab2)
scene.add(parent2);



const geometry6 = new THREE.SphereGeometry(options.size_A, 60, 60, Math.PI/2, Math.PI, 0, Math.PI);
const material61 = new THREE.MeshStandardMaterial({  roughness: 0.8, map: gros });


const stab5 = new THREE.Mesh(geometry6, material61);
const stab50 = new THREE.Mesh(geometry6, material61);

stab50.rotation.y=Math.PI
var combStab3= new THREE.Group()
combStab3.add(stab5, stab50)
combStab3.position.x=-353

parent3.add(combStab3)
scene.add(parent3);
// Fügen Sie einen Eventlistener für das Klicken auf die Kugel hi

// Fügen Sie eine Lichtquelle hinzu

const gui = new dat.GUI();




gui.add(options, 'speed_P', 0, 0.06)
gui.add(options, 'speed_S', 0, 0.06)
gui.add(options, 'speed_M', 0,0.06)
gui.add(options, 'speed_K', 0, 0.06)
gui.add(options, 'speed_A', 0, 0.06)


gui.add(options, 'size_P', 2, 8)
gui.add(options, 'size_S', 2,  8)
gui.add(options, 'size_M', 2,  8)
gui.add(options, 'size_K', 2,  8)
gui.add(options, 'size_A', 2,  8)


gui.addColor(options, 'color').onChange(function (e) {
  hemLight.color.set(e)
  
  
})

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  './penguins/xpos.png',
  './penguins/xneg.png',
  './penguins/ypos.png',
  './penguins/yneg.png',
  './penguins/zpos.png',
  './penguins/zneg.png',
]);

scene.background = texture;
// Animationsfunktion
var animate = function () {
   requestAnimationFrame(animate);

  parent.rotateY(options.speed_P)

  parent0.rotateY(options.speed_S)

  parent1.rotateY(options.speed_M)

  parent2.rotateY(options.speed_K)

  parent3.rotateY(options.speed_A)

  sphere.rotateY(0.008)


 combStab.scale.set(options.size_P, options.size_P, options.size_P);
 combStab0.scale.set(options.size_S, options.size_S,options.size_S);
 combStab1.scale.set(options.size_M, options.size_M, options.size_M);
 combStab2.scale.set(options.size_K, options.size_K,options.size_K);
 combStab3.scale.set(options.size_A, options.size_A, options.size_A);


  combStab.rotateY(0.008)
  combStab0.rotateY(0.008)
  combStab1.rotateY(0.008)
  combStab2.rotateY(0.008)
  combStab3.rotateY(0.008)


  
  //cube.rotateY(0.005)

   renderer.render(scene, camera);
};

animate();

