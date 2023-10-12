//import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
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
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(0,0,0)

const ambLight = new THREE.AmbientLight(0xffffff, 0.2)

const spotLight = new THREE.SpotLight( 0xffffff,1 );
spotLight.position.set( 100, 1000, 100 );

const hemLight=new THREE.HemisphereLight(0xffffff,0x080820, 0.6)


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
const parent4= new THREE.Object3D()


const geometry = new THREE.SphereGeometry(20, 60, 60);
const material = new THREE.MeshStandardMaterial({ roughness: 0.8, map: new THREE.TextureLoader().load('sun.jpg') });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.y=0
scene.add(sphere);


/*const geometry1 = new THREE.BoxGeometry(20,20,20,150);
const material1 = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe:true});
const cube = new THREE.Mesh(geometry1, material1);
scene.add(cube);*/
const geometry2 = new THREE.SphereGeometry(10, 60, 60);
const material2 = new THREE.MeshStandardMaterial({  roughness: 0.8, map: new THREE.TextureLoader().load('pa.png') });
const stab = new THREE.Mesh(geometry2, material2);
stab.position.z=-40
parent1.add(stab)
scene.add(parent1);



const geometry3 = new THREE.SphereGeometry(10, 60, 60);
const material3 = new THREE.MeshStandardMaterial({ roughness: 0.8, map: new THREE.TextureLoader().load('s.png') });
const stab0 = new THREE.Mesh(geometry3, material3);
stab0.position.x=70
parent.add(stab0);
scene.add(parent)



const geometry4 = new THREE.SphereGeometry(10, 60, 60);

const material4 = [new THREE.MeshStandardMaterial({  roughness: 0.8, wireframe:false, map: new THREE.TextureLoader().load('m.png') ,
side: THREE.FrontSide}),
 new THREE.MeshStandardMaterial({  roughness: 0.8, wireframe:false, map: new THREE.TextureLoader().load('m.png'),
 side: THREE.BackSide})];

const material44= new THREE.MeshFaceMaterial(material4)

const stab1 = new THREE.Mesh(geometry4, material44);
stab1.position.z=-100
parent2.add(stab1)
scene.add(parent2);

const geometry5 = new THREE.SphereGeometry(10, 60, 60);

const material5 = new THREE.MeshStandardMaterial({ roughness: 0.8, wireframe:false, map: new THREE.TextureLoader().load('p.png') });
const stab2 = new THREE.Mesh(geometry5, material5);
stab2.position.z=-130
parent3.add(stab2)
scene.add(parent3);


const geometry6 = new THREE.SphereGeometry(10, 60, 60);
const material6 = new THREE.MeshStandardMaterial({ roughness: 0.8, wireframe:false, map: new THREE.TextureLoader().load('a.png') });
const stab3 = new THREE.Mesh(geometry6, material6);
stab3.position.z=-160
parent4.add(stab3)
scene.add(parent4);
// Fügen Sie einen Eventlistener für das Klicken auf die Kugel hi

// Fügen Sie eine Lichtquelle hinzu

const gui = new dat.GUI();

const options = {

   speed_S: 0.05,
   speed_P:0.05,
   speed_M: 0.05,
   speed_K:0.05,
   speed_A:0.05
 };


gui.add(options, 'speed_P', 0, 0.08)
gui.add(options, 'speed_S', 0, 0.08)
gui.add(options, 'speed_M', 0, 0.08)
gui.add(options, 'speed_K', 0, 0.08)
gui.add(options, 'speed_A', 0, 0.08)

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  './penguins/zeus_ft.jpg',
  './penguins/zeus_bk.jpg',
  './penguins/zeus_up.jpg',
  './penguins/zeus_dn.jpg',
  './penguins/zeus_rt.jpg',
  './penguins/zeus_lf.jpg',
]);

scene.background = texture;
// Animationsfunktion
var animate = function () {
   requestAnimationFrame(animate);

  parent.rotateY(options.speed_S)

  parent1.rotateY(options.speed_P)

  parent2.rotateY(options.speed_M)

  parent3.rotateY(options.speed_K)

  parent4.rotateY(options.speed_A)

  sphere.rotateY(0.008)


  stab0.rotateY(0.008)
  stab.rotateY(0.008)
  stab1.rotateY(0.008)
  stab2.rotateY(0.008)
  stab3.rotateY(0.008)
  //cube.rotateY(0.005)

   renderer.render(scene, camera);
};

animate();

