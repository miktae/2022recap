// Login
// Add a second document with a generated ID.
import { addDoc, onSnapshot, query, where, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { db } from './firebase.js'

let socialLink = document.getElementById('social-link');
let userName = document.getElementById('user-name');
let goBtn = document.getElementById('go-btn');
let langSelection = document.getElementById('langSelection');

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

goBtn.onclick = () => {
    const usersCollectionRef = collection(db, "users");
    // console.log(q);
    if (socialLink.value.length <= 0
            || userName.value.length <= 0) {
            alert('Please enter your information')
        }
    const q = query(usersCollectionRef, where("userName",
        "==", userName.value));
    onSnapshot(q, (snapshot) => {
        if(snapshot.docs.length >= 0){
            try {
                const docRef = addDoc(collection(db, "users"), {
                    socialLink: socialLink.value,
                    userName: userName.value,
                    createdAt: new Date(),
                })
                    .then(() => {
                        sessionStorage.setItem("uid", docRef.id)
                        sessionStorage.setItem("userName", userName.value);
                        console.log('Auth');
                    })
                    .then(() => {
                        console.log("Document written with ID: ", docRef.id);
                        window.location.href = './'
                    })
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    })
}

langSelection.onchange = () => {
    const title = ReactDOM.createRoot(document.querySelector('.title'));
    const lb1 = ReactDOM.createRoot(document.querySelector('#lb1'))
    const lb2 = ReactDOM.createRoot(document.querySelector('#lb2'))
    const goBtnText = ReactDOM.createRoot(document.querySelector('#go-btn'))
    let text = langSelection.options[langSelection.selectedIndex].text;
    if (text == 'English') {
        title.render('Please identify');
        lb1.render('Your social link( such as Facebook, Instagram, TikTok, ... )')
        lb2.render('Your full name')
        goBtnText.render('Go!')
    }
    else if (text == 'Tiếng Việt') {
        title.render('Xác minh');
        lb1.render('Trang xã hội( như Facebook, Instagram, TikTok, ... )')
        lb2.render('Họ và tên')
        goBtnText.render('Đi')
    }
    else if (text == '한국어') {
        title.render('확인');
        lb1.render('소셜 페이지(Facebook, Instagram, TikTok 등)')
        lb2.render('이름과 성')
        goBtnText.render('가다!')
    }
    else if (text == '日本') {
        title.render('検証');
        lb1.render('ソーシャルページ (Facebook、Instagram、TikTok など)')
        lb2.render('名前と苗字')
        goBtnText.render('行け')
    }
    else {
        title.render('确认');
        lb1.render('社交页面（如 Facebook、Instagram、TikTok 等）')
        lb2.render('去')
    }
}


