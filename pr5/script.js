// "use strict";

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// ("use strict");

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// console.log(menu);

// ("use strict");

// let calculator = {
//   read() {
//     this.a = +prompt("Первое число:", 0);
//     this.b = +prompt("Второе число:", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// ("use strict");

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$120"));


// 'use strict';

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name);

// console.log(names); 

// 'use strict';

// let vasya1 = { name: "Вася", age: 25 };
// let petya1 = { name: "Петя", age: 30 };
// let masha1 = { name: "Маша", age: 8 };

// let users1 = [vasya1, petya1, masha1];

// function getAverageAge(users1) {
//   let totalAge = users1.reduce((sum, user1) => sum + user1.age, 0);
//   return totalAge / users1.length;
// }

// console.log(getAverageAge(users));

"use strict";

function showModalAlert(message, callback) {
  const modalHTML = `
    <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="alertModalLabel">Сообщение</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${message}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ок</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById("modal-container").innerHTML = modalHTML;
  const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
  alertModal.show();

  document.getElementById('alertModal').addEventListener('hidden.bs.modal', function () {
    if (callback) callback();
  });
}

function showModalPrompt(message, callback) {
  const modalHTML = `
    <div class="modal fade" id="promptModal" tabindex="-1" aria-labelledby="promptModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="promptModalLabel">${message}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control" id="promptInput" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
            <button type="button" class="btn btn-primary" id="promptConfirmBtn">Ок</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById("modal-container").innerHTML = modalHTML;
  const promptModal = new bootstrap.Modal(document.getElementById('promptModal'));
  promptModal.show();

  document.getElementById('promptConfirmBtn').addEventListener('click', function() {
    const userInput = document.getElementById('promptInput').value;
    promptModal.hide();
    callback(userInput);
  });
}

function sumSalaries(callback) {
  let salaries = { John: 100, Ann: 160, Pete: 130 };
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  showModalAlert(`Сумма зарплат: ${sum}`, callback);
}

function multiplyNumeric(callback) {
    let menu = { width: 200, height: 300, title: "My menu" };
    
    for (let key in menu) {
      if (typeof menu[key] === "number") {
        menu[key] *= 2;  
      }
    }
  
    showModalAlert(`Меню после изменения: ${JSON.stringify(menu)}`, callback);
  }

function calculator(callback) {
  let calc = {
    read() {
      showModalPrompt("Первое число:", (a) => {
        this.a = +a;
        showModalPrompt("Второе число:", (b) => {
          this.b = +b;
          showModalAlert(`Сумма: ${this.a + this.b}, Произведение: ${this.a * this.b}`, callback);
        });
      });
    }
  };
  calc.read();
}

function extractCurrencyValue(callback) {
  let str = "$120";
  let result = +str.slice(1);
  showModalAlert(`Извлеченное значение: ${result}`, callback);
}

function userNames(callback) {
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];
  let names = users.map(user => user.name);
  showModalAlert(`Имена пользователей: ${names.join(', ')}`, callback);
}

function averageAge(callback) {
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 8 };

  let users = [vasya, petya, masha];
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);
  let avg = totalAge / users.length;
  showModalAlert(`Средний возраст: ${avg}`, callback);
}

function runAllTasks() {
  sumSalaries(() => {
    multiplyNumeric(() => {
      calculator(() => {
        extractCurrencyValue(() => {
          userNames(() => {
            averageAge(() => {
              showModalAlert("Все задачи завершены.", () => {});
            });
          });
        });
      });
    });
  });
}

runAllTasks();
