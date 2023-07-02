// // Задание 1

// const puzzle = (a, b) => {
//     if (a <= b) {
//      return a;
//     } else {
//      return b;
//     } 
//  }
 
//  console.log(puzzle(6, 6));



// Задание 2

// let checkEvenNumber = function() {
//     let userNumber = prompt(`Введите число`);
//     if (isNaN(userNumber)) {
//        console.log("Введен текст или числа с пробелами")
//     } else {
//        if (userNumber % 2 == 0) {
//           console.log("Число четное")
//       } else {
//           console.log("Число нечетное")
//       }
//     }
//  }
 
//  checkEvenNumber();




// // Задание 3

// // 3.1.
// let userNumber = prompt(`Введите число`);
// let exponentiation = (a) => a ** 2;
// console.log(`${userNumber} в квадрате: ${exponentiation(userNumber)}`);

// // 3.2.
// let userNumber = prompt(`Введите число`);
// function exponentiation(a) {
//    let result = a ** 2;
//    return result;
// } 
// exponentiation(userNumber);



// // Задание 4

// function howOldAreYou () {
//     let userAge = prompt('Сколько вам лет?');
//     if (userAge > 0 && userAge < 13) {
//        alert("Привет, друг!");
//     } else if (userAge >= 13) {
//        alert("Добро пожаловать!");
//     } else {
//        alert("Вы ввели неправильное значение");
//     }
//  }
 
//  howOldAreYou ();



// Задание 5

// let checkNumber = function() {
//     let userNumber1 = prompt(`Введите число`);
//     let userNumber2 = prompt(`Введите второе число`);
//     if (isNaN(userNumber1) || isNaN(userNumber2)) {
//       return "Одно или оба значения не являются числом";
//     } else {
//       return userNumber1 * userNumber2;
//     }
//  }
//  console.log(checkNumber());



// Задание 6

// let exponentiation = function() {
//     let userNumber = prompt(`Введите число`);
//     if (isNaN(userNumber)) {
//         return `Переданный параметр не является числом`;
//     } else {
//         let result = userNumber ** 3;
//         return `${userNumber} в кубе равняется ${result}`;
//     }
// } 

// console.log(exponentiation())



// Задание 7

// function getArea() {
//     return 3.1415 * this.radius ** 2;
// };
 
// function getPerimeter() {
//     return 2 * 3.1415 * this.radius;
// };

// const circle1 = {
//     radius: 2,
//     getArea: getArea,
//     getPerimeter: getPerimeter
// }

// const circle2 = {
//     radius: 4,
//     getArea: getArea,
//     getPerimeter: getPerimeter
// }
// console.log(`Площадь круга circle1: ${circle1.getArea()}, а его периметр ${circle1.getPerimeter()}`);
// console.log(`Площадь круга circle2: ${circle2.getArea()}, а его периметр ${circle2.getPerimeter()}`);
 



// Задание 8. Работа с макетом

let seasonsGame = function() {
    let monthNumber = Number(prompt(`Ведите номер интересующего месяца :
декабрь - 12 / январь - 1 / февраль - 2 /
март - 3 / апрель - 4 / май - 5
июнь - 6 / июль - 7 / август - 8
сентябрь - 9 / октябрь - 10 / ноябрь - 11`));
if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    alert('это зима');
} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    alert('это весна');
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    alert('это лето');
} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    alert('это осень');
} else {
    alert('нет такого месяца в году');
}
}

// урок 2.7 Работа с макетом

let wordsGame = function() {
    let wordsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordsArr = wordsArr.sort(() => Math.random() - 0.5);
    alert(`Запомни массив слов:
${wordsArr.join(', ')}`);
    let firstWord = prompt(`Чему равнялся первый элемент массива?`);
    let lastWord = prompt(`Чему равнялся последний элемент массива?`);
    if (firstWord.toLowerCase() === wordsArr[0].toLowerCase() && lastWord.toLowerCase() === wordsArr[wordsArr.length - 1].toLowerCase())  {
        alert(`Вы угадали оба слова!`)
    } else if (firstWord.toLowerCase() === wordsArr[0].toLowerCase() || lastWord.toLowerCase() === wordsArr[i].toLowerCase()) {
        alert(`Вы были близки к победе!`)
    } else {
        alert(`Не угадали! пробуйте еще!`)
    }
}
