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