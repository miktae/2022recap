"use strict";

import { addDoc, onSnapshot, query, where, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { db } from './firebase.js'

let socialLink = document.getElementById('social-link');
let userName = document.getElementById('user-name');
let goBtn = document.getElementById('go-btn');
let langSelection = document.getElementById('langSelection');

let friends = [
    "https://www.facebook.com/mai.phanthiquynh",
    "https://www.facebook.com/mai.phanthiquynh/friends_mutual",
    "https://www.facebook.com/ThanhLeTOEIC",
    "https://www.facebook.com/ThanhLeTOEIC/friends_mutual",
    "https://www.facebook.com/sonnguyensasn",
    "https://www.facebook.com/sonnguyensasn/friends_mutual",
    "https://www.facebook.com/mindzzlmadrid2001",
    "https://www.facebook.com/mindzzlmadrid2001/friends_mutual",
    "https://www.facebook.com/profile.php?id=100006083257697",
    "https://www.facebook.com/profile.php?id=100006083257697&sk=friends_mutual",
    "https://www.facebook.com/taetn07",
    "https://www.facebook.com/taetn07/friends_mutual",
    "https://www.facebook.com/baodaiii",
    "https://www.facebook.com/profile.php?id=100007725481594",
    "https://www.facebook.com/profile.php?id=100007725481594&sk=friends_mutual",
    "https://www.facebook.com/profile.php?id=100011724792141",
    "https://www.facebook.com/profile.php?id=100011724792141&sk=friends_mutual",
    "https://www.facebook.com/profile.php?id=100044835946176",
    "https://www.facebook.com/profile.php?id=100044835946176&sk=friends_mutual",
    "https://www.facebook.com/diepngoo1412",
    "https://www.facebook.com/diepngoo1412/friends_mutual",
    "https://www.facebook.com/profile.php?id=100029064814535",
    "https://www.facebook.com/profile.php?id=100029064814535&sk=friends_mutual",
    "https://www.facebook.com/kai.korn.399",
    "https://www.facebook.com/kai.korn.399/friends_mutual",
    "https://www.facebook.com/profile.php?id=100063545726639",
    "https://www.facebook.com/profile.php?id=100063545726639&sk=friends_mutual",
    "https://www.facebook.com/manh.maps",
    "https://www.facebook.com/manh.maps/friends_mutual",
    "https://www.facebook.com/bui.viet.11",
    "https://www.facebook.com/profile.php?id=100067519497014",
    "https://www.facebook.com/profile.php?id=100049414792465",
    "https://www.facebook.com/vohinhhth",
    "https://www.facebook.com/quyeeen?__tn__=%2Cd",
    "https://www.facebook.com/NvD2206/",
    "https://www.facebook.com/profile.php?id=100028136634237",
    "https://www.facebook.com/hnam.338",
    "https://www.facebook.com/profile.php?id=100010530152564",
    "https://www.facebook.com/profile.php?id=100009167567645",
    "https://www.facebook.com/chituanh212",
    "https://www.facebook.com/profile.php?id=100010817386601",
    "https://www.facebook.com/profile.php?id=100006811063787",
    "https://www.facebook.com/duong.duy.142",
    "https://www.facebook.com/huynguyen2609o1",
    "https://www.facebook.com/profile.php?id=100017970936270",
    "https://www.facebook.com/profile.php?id=100019544231009",
    "https://www.facebook.com/profile.php?id=100048926168076",
    "https://www.facebook.com/profile.php?id=100025470214755",
    "https://www.facebook.com/banhu.nguyen.28",
    "https://www.instagram.com/__min______/",
    "https://www.instagram.com/sasn.sonnn/",
    
]

function InFriends(params) {
    let isFriend = false
    for (let i = 0; i < friends.length; i++) {
        if (params == friends[i]) {
            isFriend = true;
            break;
        }
    }
    return isFriend;
}

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
    if (socialLink.value.length <= 0
        || userName.value.length <= 0) {
        alert('Please enter your information')
    }
    else if (!InFriends(socialLink.value)){
     alert('An error happened')
    }
    else if(InFriends(socialLink.value)) {
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
                             window.location.href = './faceRecog.html'
                        })
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
    }

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
