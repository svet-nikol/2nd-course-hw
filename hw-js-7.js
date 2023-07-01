console.log(`Задание 1`);
let str = 'js';
console.log(str.toUpperCase());

console.log(` `);

console.log(`Задание 2`);

function searchStart(array, substr) {
    let newArray = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(substr.toLowerCase())) {
            newArray.push(element);
        }
    });
    console.log(newArray);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'Гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

console.log(` `);

console.log(`Задание 3`);

const x = 32.58884;
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));

console.log(` `);

console.log(`Задание 4`);

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

console.log(` `);

console.log(`Задание 5`);

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomInt(5, 10));

console.log(` `);

console.log(`Задание 6`);

function getRandomArrNumbers(abc) {
    let RandomArr = [];
    for (let i = 0; i < (Math.floor(abc / 2)); i++) {
        j = getRandomInt(0, abc);
        RandomArr.push(j);
    }
    console.log(RandomArr);
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);

console.log(` `);

console.log(`Задание 7`);

let RandomNumber = (a, b) => {
    return getRandomInt(Math.round(a), Math.round(b));
}
console.log(RandomNumber(3.2, 9.6));

console.log(` `);

console.log(`Задание 8`);

let currentD = new Date();
console.log(currentD);

console.log(` `);

console.log(`Задание 9`);

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toDateString());

console.log(` `);

console.log(`Задание 10`);

function outputDate(inputDate) {
    let freshDate = new Date(inputDate);
    
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    // let minute = freshDate.getMinutes();
    // let second = freshDate.getSeconds();
    // if (minute < 10) {
    //     minute = "0" + minute;
    // };
    // if (second < 10) {
    //     second = "0" + second;
    // };

    let message = `Дата: ${freshDate.getDate()} ${months[freshDate.getMonth()]} ${freshDate.getFullYear()} - это ${days[freshDate.getDay()]}
Время: ${freshDate.toLocaleTimeString('ru-RU')}.`
// Время: ${freshDate.getHours()}:${minute}:${second}.
    console.log(message);
}
outputDate(2025, 5, 6, 11, 2, 7);
outputDate(1748725200000);
outputDate(new Date());