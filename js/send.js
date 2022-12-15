import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { db } from './firebase.js'

let sendBtn = document.getElementById('sendBtn');

sendBtn.onclick = () => {
    let message = document.getElementById('textArea')
    if(message.value.length > 0) {
         try {
        const docRef = addDoc(collection(db, "messages"), {
            userName: sessionStorage.getItem('userName'),
            createdAt: new Date(),
            message: message.value
        })
        .then(() => {
           document.body.innerHTML = 'Sent!'
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    }
    else {
        alert('Please enter a message')
    }
}