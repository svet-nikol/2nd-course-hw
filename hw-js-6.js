console.log(`Задание 1`);
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10)
        break;
    console.log(numbers[i]);
};

console.log(` `);

console.log(`Задание 2 вар 1`);
const position = [1, 5, 4, 10, 0, 3];
position.forEach((el, index) => {
    if (el === 4) console.log(`у числа ${el} индекс в массиве: ${index}`);
});

console.log(` `);

console.log(`Задание 2 вар 2`);
const position2 = [1, 5, 4, 10, 0, 3];
console.log(`у числа 4 индекс в массиве: ${position2.indexOf(4)}`);

console.log(` `);

console.log(`Задание 3`);
let bigNumber = [1, 3, 5, 10, 20];
bigNumber = bigNumber.join(' ');
console.log(bigNumber);

console.log(` `);

console.log(`Задание 4`);
let multilevelArr = [];
for (let i = 0; i < 3; i++) {
    multilevelArr[i] = [];        /*делаю 3 подмассива*/
    for (let j = 0; j < 3; j++) {
        multilevelArr[i].push(1);     /*заполняю подмассивы единицами*/
    }
}
console.log(multilevelArr);

console.log(` `);

console.log(`Задание 5`);
let one = [1, 1, 1];
one = one.concat(2, 2, 2);
console.log(one);

console.log(` `);

console.log(`Задание 6`);
let arr = [9, 8, 7, 'a', 6, 5];
arrIn = arr.sort();
arrIn = arrIn.pop();
console.log(arr);

console.log(` `);

console.log(`Задание 7`);
const guessing = [9, 8, 7, 6, 5];
let userNumber = Number(prompt(`Задание 7: Угадайте число из массива`));
if (guessing.includes(userNumber)) {
    console.log(`угадал`);
} else {
    console.log(`не угадал`);
}

console.log(` `);

console.log(`Задание 8`);
let string = 'abcdef';
let arrayString = string.split('');
arrayString = arrayString.reverse();
console.log(arrayString.join(''));

console.log(` `);

console.log(`Задание 9`);
let oneArr = [[1, 2, 3,], [4, 5, 6]];
let twoArr = [];
for (let i of oneArr) {
    for (let j of i) {
        twoArr.push(j);
    }
}
console.log(twoArr);

console.log(` `);

console.log(`Задание 10`);
const sumArr = [9, 8, 7, 6];
let sum = 0;
for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
    console.log(sum);
}

console.log(` `);

console.log(`Задание 11`);
const anyNumbers = [1, 1.2, 2, 2.5, 3, 3.8, 4];
function squareArr() {
    const integerNumbers = anyNumbers.filter(i => (i % 1 === 0));
    const squareNumbers = integerNumbers.map(j => j ** 2);
    return squareNumbers;
}
console.log(squareArr(anyNumbers));

console.log(` `);

console.log(`Задание 12`);
let expression = prompt(`Задание 12: Введите произвольное предложение, получите длину его слов`);
function getLengthWords() {
    let expressionArr = expression.split(' ');
    const lengthArr = [];
    console.log(expressionArr);
    expressionArr.forEach(el => {
        let j = el.split('');
        lengthArr.push(j.length);
    });
    console.log(lengthArr);
}
getLengthWords(expression);

console.log(` `);

console.log(`Задание 13`);

function filterPositive(array) {
    let arrayNeg = [];
    let arrayInteger = array.filter(i => (i % 1 === 0));
    arrayInteger.forEach(el => {
        if (el < 0) {
            arrayNeg.push(el);
        }
    });
    console.log(arrayNeg);
}
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

console.log(` `);

console.log(`Задание 14`);

let newArr = [];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

for (let i = 0; i < 10; i++) {
    j = getRandomNumber(1, 10);
    newArr.push(j);
}

let evenResult = newArr.filter(c => (c % 2 === 0));

console.log(`Исходный массив:`);
console.log(newArr);
console.log(`Массив с четными значениями:`);
console.log(evenResult);


console.log(` `);

console.log(`Задание 15`);

let lastArr = [];
for (let i = 0; i < 6; i++) {
    j = getRandomNumber(1, 10);
    lastArr.push(j);
}
console.log(`Массив случайных 6 элементов  в диапазоне от 1 до 10:`);
console.log(lastArr);
let lastResult = lastArr.reduce((a, b) => a + b) / lastArr.length
console.log(`Среднее арифметическое элементов: ${lastResult}`);