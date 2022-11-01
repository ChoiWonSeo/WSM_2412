// function say(params) {
//     console.log('hello world');
// }

// const say = function() {
//     console.log('hello world2');
// }

// const say = () => console.log('hello world3');
// say();

const addNow = (homeCardId) => {
    // html -> js
    const homeCard = document.getElementById(homeCardId);
    
    // 시간 -> index번째 식사가 선택되어야하는지 결정
    // 조식 끝 : 8시
    // 중식 끝 : 1시
    // 석식 끝 : 5시50분
    const now = new Date();
    let hour = now.getHours(); // 시 now.getHours()
    let minute = now.getMinutes(); // 분 now.getMinutes()
    console.log(hour, minute);

    minute = hour * 60 + minute; // 시, 분을 분으로 합치기

    // if(hour < 8) {
    //     index = 0;
	// } else if(hour < 13) {
    //     index = 1;
	// } else if(hour < 17) {
    //     index = 2;
    // } else if(hour == 17){
    //     if(minute < 50) {
    //         index = 2;
    //     } else {
    //         index = 0;
    //     }
    // } else {
    //     index = 0;
    // }

    if(minute >= 17 * 60 + 50) { // 1070
        index = 0;
    } else if(13 * 60 <= minute) {
        index = 2;
    } else if(8 * 60 <= minute) {
        index = 1;
    } else {
        index = 0;
    }

    // homeCard에서 index번째 card에 now 클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card');
// 오늘의 날짜 표시하자
const showToday = () => {
    // 오늘 구하고, 년, 월, 일, 요일 구하자
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // 0 ~ 11
    let date = now.getDate();
    
    let day = now.getDay(); // 요일을 숫자로 구하고, 한글로 변환(인덱스)
    let days = ['일', '월', '화', '수', '목', '금', '토']; // ex) days[3] == 수요일
    
    // 문자열 형식 맞추고
    let title = `${year}.${month}.${date}.(${days[day]})`;
    // console.log(title);

    // html에 표시하자
    let cardDateDivs = document.querySelectorAll(".card-date");
    // let cardDateDivs = document.getElementByClassName("card-date");
    for (cardDateDiv of cardDateDivs) {
        cardDateDiv.innerHTML = title;
    }
}
showToday();

// 오늘의 급식 가져오고, 표시하자
const showTodayMenu = () => {

}
showTodayMenu();