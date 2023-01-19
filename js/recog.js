"use strict"
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { ref, uploadString } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { storage } from './firebase.js'

const video = document.getElementById('video')
document.getElementById('name').innerHTML
  = sessionStorage.getItem('userName')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('https://miktae.github.io/2022review/models/'),
  faceapi.nets.faceLandmark68Net.loadFromUri('https://miktae.github.io/2022review/models/'),
  faceapi.nets.faceRecognitionNet.loadFromUri('https://miktae.github.io/2022review/models/'),
  faceapi.nets.ageGenderNet.loadFromUri('https://miktae.github.io/2022review/models/'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('https://miktae.github.io/2022review/models/'),
  faceapi.nets.faceExpressionNet.loadFromUri('https://miktae.github.io/2022review/models/')
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
    if (detections[0] && detections[0].age) {
      sessionStorage.setItem('userAge', Math.round(detections[0].age))
      document.getElementById('age').innerHTML = Math.round(detections[0].age)
      document.getElementById('gender').innerHTML = detections[0].gender
      sessionStorage.setItem('userGender', Math.round(detections[0].gender))
      let maxOfExpression = detections[0].expressions[Object.keys(detections[0].expressions)[0]]
      let maxIndex = 0

      for (let i = 0; i < Object.keys(detections[0].expressions).length; i++) {
        if (detections[0].expressions[Object.keys(detections[0].expressions)[i]] > maxOfExpression) {
          maxOfExpression = detections[0].expressions[Object.keys(detections[0].expressions)[i]]
          maxIndex = i
        }
      }

      document.getElementById('expression').innerHTML
        = Object.keys(detections[0].expressions)[maxIndex];
      if (detections[0].age != undefined) {
        document.getElementById('er').innerHTML = ''
      }
      if (detections[0].age == undefined) {
        document.getElementById('er').innerHTML = "Please get close to the camera"
      }
    }
    // console.log(detections[0]);
  }, 100)
})

let conf = confirm('If you want to go to the next page, please take a photo');
if (!conf) {
  window.location.href = './login.html'
}

let takePhotoBtn = document.getElementById("takePhotoBtn")
let canvas = document.getElementById('canvas')

takePhotoBtn.onclick = () => {
  let name = sessionStorage.getItem("userName");
  console.log(name);
  const storageRef = ref(storage, `users/${name}`);
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
      window.location.href = '../'
    })
}