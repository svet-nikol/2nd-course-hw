console.log(`Задание 1`);

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort(function (a, b) {
    return a.age - b.age;
}));

console.log(` `);



console.log(`Задание 2`);

function isPositive(number) {
    return number > 0 ;
};

function isMale(a) {
    return a.gender === 'male';
};

function filter(arr, ruleFunction) {
    const output = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]); 
        }
    }
    return output;
};

const peopleWGender = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 
 console.log(filter([3, -4, 1, 9], isPositive));
 console.log(filter(peopleWGender, isMale));
