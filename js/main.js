"use strict";

const root = ReactDOM.createRoot(document.querySelector('#main'));
const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('lang');

const LogOut = () => {
    sessionStorage.removeItem('uid')
    location.reload();
}

let logoutText = 'Log Out'

function LogOutBtn() {

    React.useState(() => {
        // console.log(logoutText);
    }, [logoutText])

    return (
        <div className="logout-btn">
            <div className="d-flex flex-column">
                <p style={{
                    marginTop: '0.3%',
                    padding: '0 3%',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                }}>User: {sessionStorage.getItem('userName')}</p>
            </div>
            <button className="btn btn-secondary" onClick={LogOut}>
                {logoutText}
            </button>
        </div>
    )
}

function DarkModeToggle() {
    const ChangeTheme = () => {
        document.body.classList.toggle('dark');
        document.querySelector('.link').classList.toggle('dark');
    }

    return (
        <div className='changeTheme'>
            <input type="checkbox" class="checkbox" onChange={ChangeTheme}
                id="checkbox" />
            <label for="checkbox" class="label">
                <i class="fas fa-moon"></i>
                <i class='fas fa-sun'></i>
                <div class='ball'></div>
            </label>
        </div>
    )
}

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-header">
                <a href="./" className="link">
                    Mik Tae_ 2022 Review
                </a>
                <DarkModeToggle></DarkModeToggle>
            </div>

            <LogOutBtn></LogOutBtn>
        </div>
    )
}

const source = [
    {
        type: 'image',
        title: 'Dreams of Love',
        soundURL: './assets/sounds/DoanKetMoi.mp3',
        soundName: 'Đoạn Kết Mới - Hoàng Dũng',
        soundStartAt: 21,
        // transform: 'X',
        detail:
            `Trong năm nay, với sự khởi đầu là tình yêu từ một dancer 
             . Dù đã là quá khứ, nhưng đây cũng là một góc khung trời. 
            `,
        velocity: 0.01,
        src: './assets/LuvDream/0.jpg'
    },
    {
        type: 'image',
        title: 'Đại hội Thể thao Đông Nam Á 2022 (2022 Southeast Asian Games)',
        // transform: 'X',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "Hãy Tỏa Sáng (Let's Shine) - Huy Tuấn",
        soundStartAt: 46,
        detail:
            `SEA Games 31 là một sự kiện thể thao đa môn diễn ra ở Hà Nội,
             Việt Nam vào năm 2022. Ban đầu dự kiến tổ chức từ ngày 21 tháng
              11 đến ngày 2 tháng 12 năm 2021, đại hội dời ngày tổ chức 
              sang từ ngày 12 đến ngày 23 tháng 5 năm 2022 do ảnh hưởng 
              của đại dịch COVID-19. Có 40 môn thể thao, chủ yếu là những 
              môn thể thao được thi đấu tại Đại hội Thể thao châu Á và
               Thế vận hội.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/0.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "Hãy Tỏa Sáng (Let's Shine) - Huy Tuấn",
        soundStartAt: 54,
        // transform: 'X',
        detail:
            `Rất vinh dự và tự hào khi tôi được trở thành TNV đóng góp
            cho sự kiện quy mô khu vực này. 
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "Hãy Tỏa Sáng (Let's Shine) - Huy Tuấn",
        soundStartAt: 62,
        // transform: 'X',
        detail:
            `Tôi được gặp các VĐV Đông Nam Á, Việt Nam như đội tuyển 
            Việt Nam, Nguyễn Huy Hoàng _ anh này điển trai cực,
            Nguyễn Thị Oanh, ... . Cùng với đó,
            được chia sẻ nền văn hóa Việt với các bạn nước ngoài. 
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/2.jpg'
    },
    {
        type: 'video',

        // transform: 'X',
        detail:
            `Và rất vinh dự được gặp các Bác lãnh đạo Đảng, Thành phố
             như Thủ tướng Phạm Minh Chính, các bộ trưởng các quốc gia.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/3.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundStartAt: 70,
        // transform: 'X',
        detail:
            `Giấy chứng nhận cho những đóng góp cho Đại hội🤗
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/Cer.png'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 24,
        title: 'TOEIC',
        // transform: 'X',
        detail:
            `TOEIC, viết tắt của Test of English for 
            International Communication – Bài kiểm tra tiếng Anh 
            giao tiếp quốc tế, là một chứng chỉ tiếng Anh quốc tế.
             \n May mắn được chị Thanh Lê, bạn Toàn Phạm hướng dẫn,
              hỗ trợ tôi trong quá trình ôn thi chứng chỉ quốc tế này. 
              Nhờ sự hướng dẫn cũng như kỹ năng, năng lực bản thân, tôi cũng có
              số điểm nho nhỏ.
            `,
        velocity: 0.001,
        link: 'https://www.facebook.com/ImaxToeic',
        linkText: 'Imax Toeic',
        src: './assets/TOEIC/toeic.jpg'
    },
    {
        type: 'video',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 30,
        title: 'Nghiên cứu khoa học',

        // transform: 'X',
        detail:
            `Với chủ đề áp dụng kỹ thuật Xử lý ảnh, Trí tuệ nhân tạo 
trong phân loại hoa quả, nhóm tôi đã đoạt giải Nhì cấp trường.
Cảm ơn thầy Nam và nhóm nghiên cứu: các anh Thiên, Đào Anh, và Thủy ạ!
            `,
        velocity: 0.001,
        src: './assets/NCKH/1.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 36,
        title: 'Nghiên cứu khoa học',
        // transform: 'X',
        detail:
            `Code có độ phức tạp cao khi tích hợp phần cứng và phần mềm.
            Điều khiển PLC, khí nén, lập trình Python và lập trình Web được 
            áp dụng vào đề tài.
            `,
        velocity: 0.001,
        src: './assets/NCKH/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 42,
        detail:
            `Tuy không đạt giải Nhất nhưng cũng được giải Nhì.
            `,
        // transform: 'X',
        velocity: 0.001,
        src: './assets/NCKH/Cer.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Dreamers.mp3',
        soundName: "Dreamers - Jung Kook ft Fahad Al-Kubaisi ",
        soundStartAt: 18,
        title: 'SAMSUNG SVMC – CHƯƠNG TRÌNH THỰC TẬP SINH KỲ HÈ 2022',
        // transform: 'X',
        detail:
            `SVMC Internship Program là chương trình được tổ chức hàng năm của SVMC Samsung.
            Đây là chương trình rất thiết thực, ý nghĩa dành cho các bạn sinh viên năm cuối hoặc gần cuối. Tham gia chương trình, sinh viên được hệ thống lại, đào tạo bài bản về thuật toán cơ bản;
             được đào tạo và tham gia làm các mini-project với các sản phẩm đầu ra cụ thể trên nền tảng Android hoặc C/C++ Application.
            Ngoài ra, sinh viên cũng được tham gia trải nghiệm văn hóa làm việc của một trung tâm công nghệ hàng đầu của Samsung, được hướng dẫn về các kỹ năng cần thiết trên Microsoft Office. `,
        velocity: 0.001,
        src: './assets/SamSungIntern/Paper.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Dreamers.mp3',
        soundName: "Dreamers - Jung Kook ft Fahad Al-Kubaisi ",
        soundStartAt: 24,
        detail:
            `Tôi đã có cơ hội thực tập tại SVMC( nay là SRV ) với các bạn UET, PTIT, ... 
            với profile cực xịn, các anh chị nhiệt tình hỗ trợ. Đặc biệt cảm ơn
            các bạn Lê Quân UET, Quang PTIT
             và 2 anh Tuấn HR và Training
            Vì lý do bảo mật và ít chụp ảnh,
            nên hơi ít hình ảnh :))) `,
        velocity: 0.01,
        src: './assets/SamSungIntern/Costume.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Dreamers.mp3',
        soundName: "Dreamers - Jung Kook ft Fahad Al-Kubaisi ",
        soundStartAt: 30,
        detail:
            ` Bài Test kiểm tra khó vô cùng. :))) Có 3 bạn đỗ, cả lớp thi lại.
            Thuật toán không hề dễ như đạt 10 phẩy lập trình C, C++ ở Trường`,
        velocity: 0.01,
        src: './assets/SamSungIntern/TestR.jpg'
    },
    {
        type: 'image',
        detail:
            `Dù đã kết thúc, nhưng đây là trải nghiệm đáng nhớ của tôi 
            tại tập đoàn hàng đầu thế giới. Đứng ở tầng 20 số 1 Phạm Văn 
            Bạch là một phần ước mơ của tôi.
            Cảm ơn tập đoàn Chaebol SamSung, trung tâm SVMC(nay là SRV) ^^ `,
        velocity: 0.01,
        src: './assets/SamSungIntern/Cer.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Sad.mp3',
        soundName: "Sad ",
        title: 'Sự mất mát đầu tiên',
        detail:
            `Và trong kỳ thực tập, tôi phải chứng kiến cảnh ra đi
            của người Bác yêu thương. Mọi thứ thật là vô thường . 😔`,
        velocity: 0.01,
        src: './assets/Funeral/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/MOS/sound.mp3',
        title: 'MOS (Microsoft Office Specialist)',
        // transform: 'X',
        detail:
            `MOS (Microsoft Office Specialist) là bài thi về kỹ năng Tin học Văn phòng được triển khai bởi Tập đoàn khảo thí Tin học hàng đầu thế giới – Certiport (Hoa Kỳ) và đang được áp dụng trên 150 quốc gia và vùng lãnh thổ trên thế giới. 
            Chứng chỉ MOS do chính Tổng Giám đốc Microsoft ký tên và có giá trị vô thời hạn trên toàn cầu. Tại Việt Nam, Chứng chỉ MOS đã được Bộ Thông tin và Truyền thông công nhận tương đương chuẩn kỹ năng CNTT nâng cao quy định trong thông tư 03/BTTTT-CNTT của Bộ Thông tin và Truyền thông.. `,
        velocity: 0.001,
        src: './assets/MOS/W.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/MOS/sound.mp3',
        // transform: 'X',
        detail:
            `Cảm ơn Trung tâm 
            10Education đã hỗ trợ. Đây là chứng chỉ 
            quốc tế chứng minh năng lực tin học văn phòng cho 
            cá nhân tôi` ,
        link: 'http://10education.vn/',
        linkText: 'Trung tâm 10Education',
        velocity: 0.01,
        src: './assets/MOS/E.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Sad.mp3',
        title: 'My grandmother had gone',
        // transform: 'X',
        detail:
            `Trong năm nay, tôi laị thêm lần nữa chứng kiến
            cảnh xa biệt âm dương người thân. Đó là người bà nội 
            đáng kính của tôi. 
             Haizz.... tuy vậy, đây cũng có lẽ giai đoạn buồn nhất,
             công ty M, với khách hàng hãm còn ép gọi điện đêm 
             hôm để chỉ bài con họ, đúng là đồ mất não.
            `,
        velocity: 0.001,
        src: './assets/Funeral/2.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Sad.mp3',
        soundName: "Sad",
        title: 'Những thất bại...',
        // transform: 'X',
        detail:
            `Trong năm nay, có những sự thất bại, nuối tiếc như trượt
            học bổng danh giá SamSung(STP 2022), thi trượt Olympic 
            Lý, trượt PanaSonic Fresher 2022, ...
            Không phải những gì tôi có được là dễ dàng. 
            `,
        velocity: 0.001,
        src: './assets/Career/stp.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        soundName: "Fashion",
        title: ' Aquafina Vietnam International Fashion Week Fall/Winter (AVIFW 2022) ',
        // transform: 'X',
        detail:
            `Với chủ đề TasteOfHeritage - Cảm hứng di sản, show diễn lớn nhất làng thời trang Việt Nam dịp cuối năm Tuần lễ Thời trang Quốc tế Việt Nam Thu Đông 2022 - Aquafina Vietnam International Fashion Week Fall/Winter (AVIFW 2022). 
        Được nhận định là một trong những Tuần lễ Thời trang quốc tế đứng đầu khu vực Đông Nam Á và đứng thứ 4 châu Á chỉ sau Tokyo, Seoul và Shanghai International fashion week, AVIFW 2022 được ví như cầu nối giữa xu hướng thời trang Việt Nam và thế giới. `,
        velocity: 0.01,
        src: './assets/AFIFW_2022/main.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        soundName: "Fashion",
        detail:
            `Tôi may mắn có cơ hội tham gia chương trình với 
        tư cách Cộng tác viên Sản Xuất. Đóng góp dàn dựng sân khấu, kịch bản
         và các công việc hiện trường`,
        velocity: 0.01,
        src: './assets/AFIFW_2022/zalo.png'
    },
    {
        type: 'video',
        soundURL: './assets/sounds/Fashion.mp3',
        soundName: "Fashion",
        detail: `Cùng hợp tác với Multi Media JSC, Bùi Minh Tiến. 
        Được gặp gỡ những người mẫu, diễn viên, người nổi tiếng như Mạc
        Trung Kiên, H'Hen Niê,Võ Hoàng Yến, 
         Nguyễn Minh Kha,Hoài Anh, 
         Xuân Lan, Khánh Vân, ...`,
        velocity: 0.01,
        src: './assets/AFIFW_2022/mactrungkien.mp4'
    },
    {
        type: 'video',
        velocity: 0.01,
        src: './assets/AFIFW_2022/hhnie_catwalk.mp4'
    },
    {
        type: 'video',
        velocity: 0.01,
        src: './assets/AFIFW_2022/mk.mp4'
    },
    {
        type: 'video',
        velocity: 0.01,
        src: './assets/AFIFW_2022/ha.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        soundURL: './assets/sounds/Fashion.mp3',
        velocity: 0.01,
        src: './assets/AFIFW_2022/se.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Fashion.mp3',
        velocity: 0.01,
        src: './assets/AFIFW_2022/cer.png',
        stopSound: true
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: 'Yet To Come - Jung Kook ft Fahad Al-Kubaisi ',
        title: 'Hum...',
        detail: `Năm nay, có kỳ thực tập tại trường Đại học. Dù rất muốn
        làm việc tại các công ty phúc lợi tốt nhưng vì nhiều lý do 
        khác nhau thì đã từ chối cơ hội này.`,
        velocity: 0.01,
        src: './assets/Career/foxconn.jpg',
        stopSound: true
    },
    {
        type: 'image',
        lastView: true,
        detail: `Các vị trí trúng tuyển gồm:
         RnD tại LG, A.I tại Foxconn, Embeded tại HCL, ... `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/Career/lginnotek.jpg',
    },
    {
        type: 'image',
        lastView: true,
        detail: `Job khác có review không tốt`,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/Career/hcl.jpg',
    },
    {
        type: 'image',
        title: "FPT Software Development and Trip",
        detail: `Tập đoàn FPT với chương trình HolaPark, tài trợ toàn phần
         FreeCodeCamp trị giá 2x triệu `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/HolaPark/View.jpg',
    },
    {
        type: 'video',
        detail: `PTIT đi đâu cũng gặp :))) `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/HolaPark/r.mp4',
    },
    {
        type: 'image',
        lastView: true,
        detail: `Được gặp gỡ, kết giao các chuyên gia lớn của Google
        , Meta, ... `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: './assets/HolaPark/f.jpg',
    },
    {
        detail: `Cuối cùng, năm 2022 là năm đầy trải nghiệm đáng nhớ, 
        đạt được các chứng chỉ, kỹ năng ổn. Nhưng đây là năm của sự mất mát
        khi phải đội khăn tang đến 2 lần. Đây là năm
         chấm dứt một phần hoặc toàn phần các mối quan hệ không đầu vào đâu và 
         toxic, đón nhận các vùng trời mới đa diện hơn.
         Cảm ơn bạn, người đang xem vì đã dành thì giờ của bạn cho tôi.
         Chúc mừng năm mới tới bạn và người bạn trân trọng. `,
        soundURL: './assets/sounds/YetToCome.mp3',
        velocity: 0.01,
        src: "https://img.freepik.com/free-vector/thank-you-word-doodle-typography-lettering_53876-116957.jpg?w=2000"
    },

]

const sourceEn = [
    {
        type: 'image',
        title: 'Dreams of Love',
        soundURL: './assets/sounds/DoanKetMoi.mp3',
        soundName: 'New Ending - Hoang Dung',
        soundStartAt: 21,
        // transform: 'X',
        detail:
            `This year, I met a lovely person.
             It is true that going to Ha Pagoda is very reasonable for someone like me who has been absent for a long time...
            `,
        velocity: 0.01,
        src: './assets/LuvDream/0.jpg'
    },
    {
        type: 'image',
        title: 'The 2022 Southeast Asian Games (2022 Southeast Asian Games)',
        // transform: 'X',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "Let's Shine (Let's Shine) - Huy Tuan",
        soundStartAt: 46,
        detail:
            `SEA Games 31 is a multi-sport event taking place in Hanoi,
             Vietnam in 2022. Originally scheduled to be held on May 21
              From 11 to 2 December 2021, the congress moved the date to be held
              changed from May 12 to 23, 2022 due to impact
              of the COVID-19 pandemic. There are 40 sports, mainly
              sport competed at the Asian Games and
               Olympic.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/0.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "Let's Shine (Let's Shine) - Huy Tuan",
        soundStartAt: 54,
        // transform: 'X',
        detail:
            `Very honored and proud when I became a contributing volunteer
            for this regional event.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundName: "Let's Shine (Let's Shine) - Huy Tuan",
        soundStartAt: 62,
        // transform: 'X',
        detail:
            `I got to meet Southeast Asian athletes, Vietnam. With that,
            shared Vietnamese culture.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/2.jpg'
    },
    {
        type: 'video',

        // transform: 'X',
        detail:
            `And very honored to meet the leaders of the Party and the City.
            :))) The press took the photo, but I don't keep the photo.
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/3.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/Let_sShine.mp3',
        soundStartAt: 70,
        // transform: 'X',
        detail:
            `Certificate of
            `,
        velocity: 0.001,
        src: './assets/SEAGAMES/Cer.png'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 24,
        title: 'TOEIC',
        // transform: 'X',
        detail:
            `TOEIC, short for Test of English for International Communication – Test of English for International Communication, is an international English language certificate for communication for working people who are not native English speakers. students, especially those who want to use English in an international communication and working environment. The results of the TOEIC test reflect the level of proficiency when communicating in English
             English in activities such as business, commerce, tourism.
             \n I was fortunate to be guided and supported by Ms. Thanh Le, Toan Pham's friend, in the process of preparing for this international certification exam.
            `,
        velocity: 0.001,
        link: 'https://www.facebook.com/ImaxToeic',
        linkText: 'Imax Toeic',
        src: './assets/TOEIC/toeic.jpg'
    },
    {
        type: 'video',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 30,
        title: 'Scientific Research',

        // transform: 'X',
        detail:
            `With the theme using Image Processing, Artificial Intelligence
in fruit classification, my group won the second prize at the school level.
Thank you, Mr. Nam and Mr. Thien, Anh and Thuy!
            `,
        velocity: 0.001,
        src: './assets/NCKH/1.mp4'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 36,
        title: 'Scientific Research',
        // transform: 'X',
        detail:
            `Code is extremely difficult when combining PLC, Python and Web programming
            `,
        velocity: 0.001,
        src: './assets/NCKH/1.jpg'
    },
    {
        type: 'image',
        soundURL: './assets/sounds/YetToCome.mp3',
        soundName: "Yet To Come - BTS",
        soundStartAt: 42,
        // transform: 'X',
        velocity: 0.001,
    }
]

function TabBar() {
    return (
        <div className="tab-bar" >
            <div className="tab-bar-inner">

                <a href="./">2022 Review - Mik Tae</a>
            </div>
            <div className="tab-bar-inner">
                <i className="fa fa-home"></i>
                <a href="./"> Home </a>
            </div>
            <div className="tab-bar-inner">
                <i class="fa-solid fa-gifts"></i>
                <a href="#thanks"> Thanks </a>
            </div>
            <div className="tab-bar-inner">
                <i class="fa-solid fa-message"></i>
                <a href="./pages/sendMessage.html"> Messages </a>
            </div>
            <div className="tab-bar-inner">
                <i class="fa-solid fa-language"></i>
                {myParam == "en" ?
                    <a href="./"> Tiếng Việt </a>
                    : <a href="?lang=en"> English version </a>
                }
            </div>
        </div>
    )
}

let k = 10

function ListView(props) {
    let list = React.useRef()
    let media = React.useRef()
    let audioRef = React.useRef()
    const [expand, setExpand] = React.useState(false)

    let scale = 1, maxScale = 2.5, minScale = 0.5

    const ZoomOn = (event) => {
        if (media.current)
            media.current.style.transform = "scale(" + scale + ")"
        // console.log(scale);
        if (event.deltaY < 0) {
            if (scale <= maxScale)
                scale *= 1.2
            // console.log('scrolling up');

        } else if (event.deltaY > 0) {
            if (scale >= minScale)
                scale /= 1.2
            else
                scale = minScale
            // console.log('scrolling down');
        }
    }

    const Play = () => {
        let isPlaying = audioRef.current.currentTime > 0 &&
            !audioRef.current.paused && !audioRef.current.ended
            && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;
        if (!isPlaying && audioRef.current) {
            audioRef.current.currentTime
                = props.soundStartAt
            audioRef.current.play()
        }
    }

    const Pause = () => {
        let isPlaying = audioRef.current.currentTime > 0 &&
            !audioRef.current.paused && !audioRef.current.ended
            && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;
        if (isPlaying) {
            audioRef.current.pause()
        }
    }



    setInterval(() => {
        k -= props.velocity
        if (list && list.current)
            list.current.style.transform = "translateY(" + k + "px"
    }, 10)

    return (
        <div ref={list} onMouseOver={(e) => {
            e.preventDefault()
            Play()
        }} onMouseOut={() => {
            Pause()
        }}
            className="list-view" id={props.id}>
            {
                props.stopSound && audioRef.current
                && audioRef.current.pause()
            }
            {/* <div className="list-view-header">
                <div className="list-view-title">
                    <p>{props.title}</p>
                </div>
                <div className="list-view-detail">
                    <p>{props.detail}</p>
                    <a style={{
                        fontSize: '1.3rem',
                    }} href={props.link}>{props.linkText}</a>
                </div>
            </div> */}
            <div className="list-view-main">

                {
                    props.type === 'image'
                        ? <img ref={media}
                            controlsList="nodownload"
                            src={props.src}
                            alt={props.detail}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                return false
                            }}
                            onWheel={(e) => ZoomOn(e)}
                            onClick={(e) => isTouch(e)} /> :
                        <video controlsList="nodownload" onWheel={(e) => ZoomOn(e)}
                            controls src={props.src}
                            onClick={(e) => isTouch(e)} alt={props.type} />
                }
                <div className="list-view-title">
                    <p>{props.title}</p>
                </div>
                <a style={{
                    fontSize: '1.3rem',
                }} href={props.link}>{props.linkText}</a>
                <div className="list-view-detail">
                    {props.detail && props.detail.length <= 99 ?
                        <p>{props.detail}</p> :
                        <p>
                            {
                                !expand ?
                                    <div>
                                        <p>{props.detail && `${props.detail.substring(0, 99)}...`}
                                            <span onClick={() => setExpand(true)}>
                                                more
                                            </span></p>
                                    </div>
                                    : <p style={{
                                        overflowY: 'scroll',
                                        height: '3rem'
                                    }}
                                        onClick={() => setExpand(false)}>{props.detail}</p>
                            }
                        </p>}

                    {props.soundName && <p>
                        <i className="fas fa-music"></i>
                        &nbsp;
                        {props.soundName}
                    </p>}
                </div>
            </div>
            <audio controlsList="nodownload"
                ref={audioRef} id={props.id}>
                <source src={props.soundURL}
                    type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div >
    )
}

ListView.defaultProps = {
    soundStartAt: 0,
    type: 'image',
}

const ThankList = [
    { Name: 'My family, gd, and my fr' },
    { Name: 'SVMC', logoSrc: 'https://uet.vnu.edu.vn/wp-content/uploads/2022/02/45163700_554629941631875_2774204017406902272_n.jpg' },
    { Name: 'ImaxTOEIC', logoSrc: `./assets/logos/ImaxTOEIC.png` },
    { Name: 'The IELTS Workshop', logoSrc: `https://onthiielts.com.vn/wp-content/uploads/2019/04/tiw-logo.png` },
    { Name: 'IIG', logoSrc: './assets/logos/iig.png' },
    { Name: 'FPT Software', logoSrc: 'https://www.fpt-software.com/wp-content/uploads/sites/2/2017/06/logofsoft.png' },
    { Name: 'ETS', logoSrc: './assets/logos/ets.png' },
    { Name: 'Rocket Studio', logoSrc: './assets/logos/rocket.png' },
    { Name: 'Korean Cultural Center', logoSrc: './assets/logos/kcenter.jpg' },
    { Name: 'VinUni', logoSrc: './assets/logos/vinu.png' },
    { Name: 'HAUI', logoSrc: './assets/logos/haui.png' },
    { Name: 'NEU', logoSrc: './assets/logos/neu.png' },
    { Name: 'BachKhoaTech', logoSrc: './assets/logos/bachkhoatech.webp' },
    { Name: 'Le V. Minh' },
    { Name: 'Le T. Thanh' },
    { Name: 'Le T. Quan' },
    { Name: 'Le V. Quan' },
    { Name: 'Duong V. Hai' },
    { Name: 'Pham V. Nam' },
    { Name: 'Pham V. Toan' },
    { Name: 'Ng V. Hoang' },
    { Name: 'Ng D. Tung' },
    { Name: 'Do D. Duong' },
    { Name: 'Bui Q. Viet' },
    { Name: 'Minh Chau' },
    { Name: 'Dinh X. Minh' },
    { Name: 'Au D. Giang' },
    { Name: 'Ng X. Nhat' },
    { Name: 'Ng V. Tuan' },
    { Name: 'Jenni Pham' },
    { Name: 'Hoang Tr. Tuan' },
    { Name: 'Ng M. Hieu' },
    { Name: 'Hoa Bui' },
    { Name: 'Ng H. Ha' },
    { Name: 'Suk J. Won' },
    { Name: 'J. Orlando' },
    { Name: 'Ng A. Dung' },
    { Name: 'Suk J. Young' },
    { Name: 'Others' },
]

function ThankFor(props) {
    let thanks = React.useRef()

    setInterval(() => {
        k -= 0.012
        if (thanks.current)
            thanks.current.style.transform = "translateY(" + k + "px"
    }, 10)

    return (
        <div ref={thanks} id="thanks" className="thanks-view">
            <p style={{
                fontSize: '2em'
            }}>Thanks for </p>
            {props.logoSrc && <img style={{
                width: '60%',
            }} src={props.logoSrc} alt={props.Name} />}
            <p className="thanks-text">
                {props.Name}
            </p>
        </div>
    )
}


function App() {
    return (
        <div className="container-fluid">
            <NavBar></NavBar>
            <TabBar></TabBar>
            {
                myParam == "en" ? sourceEn.map((s, i) => (<ListView key={s.src}
                    id={i} title={s.title}
                    soundURL={s.soundURL}
                    soundStartAt={s.soundStartAt}
                    soundName={s.soundName}
                    lastView={s.lastView}
                    link={s.link} linkText={s.linkText}
                    type={s.type} velocity={0.1}
                    detail={s.detail} src={s.src} />))
                    : source.map((s, i) => (<ListView key={s.src}
                        id={i} title={s.title}
                        soundURL={s.soundURL}
                        soundStartAt={s.soundStartAt}
                        soundName={s.soundName}
                        lastView={s.lastView}
                        link={s.link} linkText={s.linkText}
                        type={s.type} velocity={0.1}
                        detail={s.detail} src={s.src} />))
            }
            {
                ThankList.map((t, i) => (
                    <ThankFor key={i} Name={t.Name}
                        logoSrc={t.logoSrc} />
                ))
            }
        </div>
    )
}

function Modal() {
    return (
        <div className="modal-container">
            <h1>Reminder Modal - Hộp nhắc nhở</h1>
            <ol>
                <li>
                    Vì lý do bảo mật và riêng tư,
                    yêu cầu bạn không rời khỏi trang web trong quá trình xem
                </li>
                <li>Do lý đảm bảo bảo mật, quyền riêng tư,
                    yêu cầu bạn không sử dụng các thiết bị ghi hình,
                    quay video(điện thoại, camera, ...)</li>
                <li>Không sao chép dưới mọi hình thức</li>
            </ol>
            <ol>
                <li>
                    For security and privacy reasons,
                    you are requested not to leave the site during viewing
                </li>
                <li>For security and privacy reasons,
                    do not use recording and video recording devices (phones, cameras, ...)</li>
                <li>Do not copy in any form</li>
            </ol>
            <ol>
                <li>
                    出于安全和隐私原因，请您在浏览期间不要离开网站
                </li>
                <li>出于安全和隐私原因，
                    我们要求您不要使用录音和录像设备（电话、相机、...）</li>
                <li>请勿以任何形式复制</li>
            </ol>
            <ol>
                <li>
                    セキュリティおよびプライバシー上の理由から、
                    閲覧中にサイトを離れないでください。
                </li>
                <li>セキュリティとプライバシー上の理由から、
                    録音およびビデオ録画デバイス (電話、カメラなど) を使用しないでください。</li>
                <li>いかなる形式でもコピーしないでください</li>
            </ol>
            <ol>
                <li>
                    Por motivos de segurança e privacidade,
                    solicitamos que você não saia do site durante a visualização
                </li>
                <li>Por questões de segurança e privacidade, pedimos que não utilizem
                    dispositivos de gravação e gravação de vídeo (telefones, câmeras, ...)</li>
                <li>Não copie de nenhuma forma</li>
            </ol>
        </div>
    )
}

if (window.innerWidth < 600) {
    confirm("Sử dụng máy tính, máy tính bảng để xem nội dung này!\nUse a computer or tablet to view this content!")
    root.render(
        <React.StrictMode>
            <div style={{ padding: '12px', display: 'flex', flexWrap: 'wrap' }}>
                Nội dung không hiển thị trên thiết bị này
                <br />The content is not displayed on this device
            </div>
        </React.StrictMode>
    );
}

// Check if webcam access is supported.
function getUserMediaSupported() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

// If webcam supported, add event listener to button for when user
// wants to activate it to call enableCam function which we will 
// define in the next step.
if (!getUserMediaSupported()) {
    console.warn('getUserMedia() is not supported by your browser');
}

// Placeholder function for next step. Paste over this in the next step.
function enableCam() {
    // Only continue if the COCO-SSD has finished loading.
    if (!model) {
        return;
    }
    // getUsermedia parameters to force video but not audio.
    const constraints = {
        video: true
    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        video.srcObject = stream;
        video.addEventListener('loadeddata', predictWebcam);
    });
}

// Store the resulting model in the global scope of our app.
var model = true;

// Before we can use COCO-SSD class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment 
// to get everything needed to run.
// Note: cocoSsd is an external object loaded from our index.html
// script tag import so ignore any warning in Glitch.
cocoSsd.load().then(function (loadedModel) {
    model = loadedModel;
});

var children = [];
var Camera = false;

function predictWebcam() {
    // Now let's start classifying a frame in the stream.
    if (model.detect(video)) {
        model.detect(video).then(function (predictions) {
            // Remove any highlighting we did previous frame.
            for (let i = 0; i < children.length; i++) {
                liveView.removeChild(children[i]);
            }
            children.splice(0);

            // Now lets loop through predictions and draw them to the live view if
            // they have a high confidence score.
            for (let n = 0; n < predictions.length; n++) {
                // If we are over 66% sure we are sure we classified it right, draw it!
                if (predictions[n].score > 0.6) {

                    if (predictions[n].class == "cell phone") {
                        root.render(
                            <React.StrictMode>
                                <Modal />
                            </React.StrictMode>);
                    }
                    else if (predictions[n].class == " ") {
                        root.render(
                            <React.StrictMode>
                                <Modal />
                            </React.StrictMode>);
                    }

                    const p = document.createElement('p');
                    p.innerText = predictions[n].class + ' - with '
                        + Math.round(parseFloat(predictions[n].score) * 100)
                        + '% confidence.';
                    p.style = 'margin-left: ' + predictions[n].bbox[0] + 'px; margin-top: '
                        + (predictions[n].bbox[1] - 10) + 'px; width: '
                        + (predictions[n].bbox[2] - 10) + 'px; top: 0; left: 0;';

                    const highlighter = document.createElement('div');
                    highlighter.setAttribute('class', 'highlighter');
                    highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: '
                        + predictions[n].bbox[1] + 'px; width: '
                        + predictions[n].bbox[2] + 'px; height: '
                        + predictions[n].bbox[3] + 'px;';

                    liveView.appendChild(highlighter);
                    liveView.appendChild(p);
                    children.push(highlighter);
                    children.push(p);
                }
            }
            // Call this function again to keep predicting when the browser is ready.
            requestAnimationFrame(predictWebcam);
        });
    }
    else {
        root.render(
            <React.StrictMode>
                <Modal />
            </React.StrictMode>);
    }
}

onload = () => {
    if (innerWidth >= 600) enableCam();
}

if (!sessionStorage.getItem("uid")) {
    confirm('Please Log In')
    window.location.href = './pages/login.html'
    root.render('Loading content...')
}
else if (window.innerWidth >= 600) {
    root.render(
        <React.StrictMode>
            <Modal />
        </React.StrictMode>);

    setInterval(() => {
        root.render(<React.StrictMode>
            <App />
        </React.StrictMode>)
    }, 9000);
}

document.body.addEventListener("mouseleave", function (event) {
    if (event.clientY <= 0 || event.clientX <= 0
        || (event.clientX >= window.innerWidth
            || event.clientY >= window.innerHeight)) {
        root.render(
            <React.StrictMode>
                <Modal />
            </React.StrictMode>);
    }
});

/** TO DISABLE SCREEN CAPTURE **/
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots disabled!');
    }
});

/** TO DISABLE PRINTS WHIT CTRL+P **/
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'p') {
        alert('This section is not allowed to print or export to PDF');
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

document.body.oncontextmenu = () => false

document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        alert('not allowed');
        return false;

    } else if (e.keyCode == 123) { // Prevent F12
        alert('not allowed');
        return false;
    } else if (e.ctrlKey && e
        .shiftKey && e.keyCode == 73) {
        // Prevent Ctrl+Shift+I 
        alert('not allowed');
        return false;
    } else {
        return true;
    }
};