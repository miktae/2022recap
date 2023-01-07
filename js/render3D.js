const renderElement = document.getElementById('render3D')
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80,
    renderElement.clientWidth / 
    renderElement.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
const renderCalls = [];

const renderer = new THREE.WebGLRenderer();
renderer.setSize(renderElement.clientWidth, 
    renderElement.clientHeight);
renderElement.appendChild(renderer.domElement);

camera.position.z = 10;

const loader = new THREE.GLTFLoader();
const geometry = new THREE.BoxGeometry(1, 1, 1);

let rotX = 0
let rotY = 0
let rotZ = 0

function Load3Dmodels(url, scale = 1,
    x = 0, y = 0, z = 0,
    rX = 0, rY = 0, rZ = 0) {
    loader.load(
        //model here
        url,
        function (glb) {
            let root = glb.scene;
            root.scale.set(scale, scale, scale);
            root.position.set(x, y, z)
            root.rotation.set(rotZ, rotY, rotZ)
            // console.log(rotY);
            scene.add(root);
            setTimeout(() => scene.remove(root), 2022)
        },
        (xhr) => {
            // console.log((xhr.responseTextloaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    );
}

// const controls = new THREE.OrbitControls(camera);

// controls.rotateSpeed = 0.3;
// controls.zoomSpeed = 0.9;

// controls.minDistance = 3;
// controls.maxDistance = 20;

// controls.minPolarAngle = 0; // radians
// controls.maxPolarAngle = Math.PI / 2; // radians

// controls.enableDamping = true;
// controls.dampingFactor = 0.05;

//và thêm ít ánh sáng về bản
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5);
scene.add(light);

scene.background = new THREE.Color('#fafafa');

function animate() {
    // rotX += 10
    rotY -= 0.001
    // rotZ += 10
    Load3Dmodels('../login.glb', 1.2, 0, -2, 0)
    requestAnimationFrame(animate)
    renderCalls.forEach((callback) => { callback(); });
    renderer.render(scene, camera)
}

animate()