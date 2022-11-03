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
    // 지금 구하자
    // 년, 월, 일 구하자
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // 0 ~ 11
    let date = now.getDate();

    // 급식API 요청할 url 만들자
    const KEY = "a9c902f701a34fe494d123a5b4970beb";
    const ATPT_OFCDC_SC_CODE = "B10";   // 서울특별시교육청
    const SD_SCHUL_CODE = "7010569";    // 미림여자정보과학고등학교

    let MLSV_YMD = `${year}${month.toString().padStart(2, "0")}${date.toString().padStart(2, "0")}`; 
    console.log(MLSV_YMD);
    const Type = "json";
    let url = `https://open.neis.go.kr/hub/mealServiceDietInfo`
            + `?KEY=${KEY}`
            + `&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}`
            + `&SD_SCHUL_CODE=${SD_SCHUL_CODE}`
            // + `&MMEAL_SC_CODE=${MMEAL_SC_CODE}`
            + `&MLSV_YMD=${MLSV_YMD}`
            + `&Type=json`;

    console.log(url);

    // 요청하자
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json)); // json -> HTML에 표시하자
};
const showMenu = (json) => {
    // html -> js 메뉴 표시하는 부분
    let menus = document.querySelectorAll(".card-menu");
    let breakfast = menus[0];
    let lunch = menus[1];
    let dinner = menus[2];
    // json 안에 조식, 중식, 석식 정보 빼오고
    try {
        if (json['mealServiceDietInfo'][0]['head'][1]['RESULT']['CODE'] == 'INFO-000') {
            // 응답이 제대로 왔으면
            // json -> HTML
            // 하나하나 하고싶으면 아래 애들 하나하나 try catch문으로 넣어줘야함 ㅋㅋ
            let breakfastData = json['mealServiceDietInfo'][1]['row'][0]['DDISH_NM'];
            // (5.13.) << 삭제하기   정규표현식 : (문자 숫자나 .문자)문자
            breakfastData = breakfastData.replace(/\([0-9\.]*\)/g, "");
            breakfast.innerHTML = breakfastData;

            let lunchData = json['mealServiceDietInfo'][1]['row'][1]['DDISH_NM'];
            lunchData = lunchData.replace(/\([0-9\.]*\)/g, "");
            lunch.innerHTML = lunchData;

            let dinnerData = json['mealServiceDietInfo'][1]['row'][2]['DDISH_NM'];
            dinnerData = dinnerData.replace(/\([0-9\.]*\)/g, "");
            dinner.innerHTML = dinnerData;

            // (    \(
            // 숫자 한글자
        } else {
            // 응답이 이상하면
            // 없음 표시하자
            breakfast.innerHTML = "없음";
            lunch.innerHTML = "없음";
            dinner.innerHTML = "없음";
        }
    } catch { // 문제가 생기면 {'RESULT':}
        breakfast.innerHTML = "없음";
        lunch.innerHTML = "없음";
        dinner.innerHTML = "없음";
    }
    // HTML에 표시하자

}

showTodayMenu();