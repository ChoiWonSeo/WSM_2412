function test() {
    // 현재 년, 월, 일 알아내자
    let today = new Date();
    
    year = today.getFullYear();
    month = today.getMonth() + 1;
    date = today.getDate();
    day = today.getDay(); // 0일 1월 2화 3수 4목 5금 6토
    // 현재 월 마지막날?
    let lastDate = new Date(year, month + 1, 0).getDate; // 현재 월의 마지막날 : 다음달의 0일
    // 현재 월 1일은 무슨 요일?
    let firstDay = new Date(year, month, 1).getDay();
    
    console.log(`${year}년 ${month}월 ${date}일 ${lastDate}`);
}

// 오늘을 구하자
let today = new Date();
// 오늘 연 구하자
let year = today.getFullYear();
// 오늘 월 구하자
let month = today.getMonth() + 1; // 0 ~ 11
// 오늘 일 구하자
let date = today.getDate();
// 오늘 요일 구하자
let day = today.getDay(); // 요일을 숫자로 구하고, 한글로 변환(인덱스)
let days = ['일', '월', '화', '수', '목', '금', '토']; // ex) days[3] == 수요일

console.log(`${year}년 ${month}월 ${date}일 ${days[day]}요일`);


// 1일 : 오늘 연, 오늘 월, 1 객체 구하자
let firstDate = new Date(year, month - 1, 1);
// 그 객체의 요일 구하자
let firstDay = firstDate.getDay();
console.log(days[firstDay]);
// 1일을 html -> js
let firstDiv = document.getElementsByClassName("first")[0];
// grid-column-start: 요일 + 1;
firstDiv.style.gridColumnStart = firstDay + 1;
