// Login
// Add a second document with a generated ID.
import { ref, uploadString } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { storage } from './firebase.js'

const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('https://miktae.github.io/2022recap/models/'),
    faceapi.nets.faceLandmark68Net.loadFromUri('https://miktae.github.io/2022recap/models/'),
    faceapi.nets.faceRecognitionNet.loadFromUri('https://miktae.github.io/2022recap/models/'),
    faceapi.nets.ageGenderNet.loadFromUri('https://miktae.github.io/2022recap/models/'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('https://miktae.github.io/2022recap/models/'),
    faceapi.nets.faceExpressionNet.loadFromUri('https://miktae.github.io/2022recap/models/')
]).then(startVideo)

function startVideo() {
  document.getElementById('loading').classList.add('none')
  document.getElementById('canvas').classList.remove('none')
  document.getElementById('video').classList.remove('none')
  document.getElementById('takePhotoBtn').classList.remove('none')

  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video)
    .withFaceLandmarks().withFaceDescriptors()
    .withFaceExpressions().withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    // console.log(detections);
  }, 100)
})

let conf = confirm('If you want to go to the next page, please take a photo');
    if(!conf){
        window.location.href = './login.html'
    }

let takePhotoBtn = document.getElementById("takePhotoBtn")
let canvas = document.getElementById('canvas')

takePhotoBtn.onclick = () => {
    let name = sessionStorage.getItem("userName");
    console.log(name);
    const storageRef = ref(storage, `${name}`);
    canvas.getContext('2d').drawImage(video, 0, 0,
        canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    // data url of the image
    console.log(image_data_url);
    uploadString(storageRef, image_data_url, 'data_url').
        then((snapshot) => {
            console.log('Uploaded a data_url string!');
        })
        .then(() => {
             window.location.href = './'
        })
}
