// 1

'use strict';

let price = prompt("Введите стоимость товара:");
let money = prompt("Введите количество денег у клиента:");

let result = (price < 0 || money < 0) ? 'Неверный формат ввода!' :
  (price === money) ? 'Покупка совершена успешно!' :
  (price > money) ? `Покупка совершена. Ваша сдача: ${money - price} р.` :
  (price < money) ? `Покупка не совершена. Для покупки не хватает  ${price - money} р.` : '';

alert(result);
 
// 2

let one = prompt("Введите число:");

let result1 = (one > 0) ? 1 :
(one < 0) ? -1 :
(one === 0) ? 0 : '';

alert(result1)

// 3

let a = parseFloat(prompt("Введите число:"));
let b = parseFloat(prompt("Введите число:"));

let result3 = (a + b < 4) ? 'Мало' : 'Много';
alert(result3);

// 4

let login1 = prompt("Логин:"); 

let message1 = (login1 == 'Сотрудник') ? 'Привет' :
 (login1 == 'Директор') ? 'Здравствуйте' :
 (login1 == '') ? 'Нет логина' : '';
alert(message1);

// 5

let login = prompt("Введите логин:");
let password = login == "Админ" ? prompt("Введите ваш пароль:") : null;
let message = password == "Я главный" ? "Здравствуйте!" : 
 password == "" || password == null ? "Отменено" : 
 login == "" || login == null ? "Отменено" : 
 "Я вас не знаю";
alert(message);