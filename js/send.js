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
           let n = Math.floor(Math.random() * 8)
           document.getElementById("grants").innerHTML = cogs[n]
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    }
    else {
        alert('Please enter a message')
    }
}

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + ' ngày ';
        document.getElementById(id).innerHTML += hours + ' giờ ';
        document.getElementById(id).innerHTML += minutes + ' phút ';
        document.getElementById(id).innerHTML += seconds + 'giây';
    }

    timer = setInterval(showRemaining, 1000);
}

CountDownTimer('01/22/2023 00:0 AM', 'counter-view')

let cogs = [
   " Chúc mừng năm mới 2023. Chúc sang năm mới đau đầu vì giàu, mệt mỏi vì học giỏi, buồn phiền vì nhiều tiền, ngang trái vì xinh gái, mệt mỏi vì đẹp giai và mất ngủ vì không có đối thủ.",
   "Chúc bạn năm mới hạnh phúc, tấn tài tấn lộc, tấn an khang.",
   "Chúc bạn một năm giàu sang như vàng, nhẹ nhàng như nhôm, polime ngập túi, sự nghiệp thăng hoa như iot gặp nhiệt độ và trẻ trung lung linh tựa kim cương.",
   " Chúc mừng năm mới, tiền xu đầy túi, tiền giấy đầy bao, đi ăn được khao, về nhà được rước, tiền vô ngõ trước, hột xoàn vô ngõ sau, nói chung tiền đầy túi, tình đầy tym."
, "Chúc bạn năm mới sự nghiệp thăng tiến, tiền vào như nước, công thành danh toại."
, "Chúc bạn năm mới vạn sự như ý, tiền bạc như mơ, làm việc như thơ, đời vui như nhạc, coi tiền như rác, coi bạc như rơm, chung thuỷ với cơm, sắc son như phở."
, "Mừng xuân Quý Mão chúc bạn luôn vui vẻ như chim Sẻ, luôn khỏe mạnh như Đại Bàng, lúc nào cũng giàu sang như chim Phụng, và sống lâu như Đà Điểu"
, "Năm hết Tết đến, chúc cho bạn một năm mới thật thành công, khỏe mạnh, ước gì được nấy, đánh đâu thắng đó"

]

