// Задание 1

let admin;
let name = "Джон";
admin = name;
alert(admin); 

// Задание 2
let cityName = prompt("Название города:");
let cityYear = prompt("Год образования города:");
let population = prompt("Население города:");

let cityAge = 2024 - cityYear;

alert(`Городу ${cityName} исполнилось ${cityAge} года/лет с момента его образования. Население - составляет ${population} человек`);

// Задание 3
let r = prompt("Введите радиус круга:");
let area = Math.PI * r * r;
alert(`Площадь круга с радиусом ${r} равна ${area}`);


// Задание 4
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

let sum = Number(num1) + Number(num2);
let difference = Number(num1) - Number(num2);
let quotient = Number(num1) / Number(num2);
let product = Number(num1) * Number(num2);

alert(`Сумма: ${sum}\nРазность: ${difference}\nЧастное: ${quotient}\nПроизведение: ${product}`);