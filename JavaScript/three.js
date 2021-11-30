import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const render = new THREE.WebGL1Renderer({
    canvas: document.getElementById('bg')
});

render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

render.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const mat = new THREE.MeshBasicMaterial( {
    color: 0xFF6347,
    wireframe: true,
});

const torus = new THREE.Mesh(geometry, mat);

render.render(scene, camera);