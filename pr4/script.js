// Код практики

// "use strict";

// function printEvenNumbers() {
//   let a = parseInt(prompt("Введите начальное число (a):", ""));
//   let b = parseInt(prompt("Введите конечное число (b):", ""));

//   if (isNaN(a) || isNaN(b)) {
//     alert("Введите числовые значения.");
//     return;
//   }

//   let result = "";
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) {
//       result += i + " ";
//     }
//   }

//   if (result) {
//     alert("Четные числа: " + result);
//   } else {
//     alert("Четных чисел нет.");
//   }
// }

// printEvenNumbers();

// let i = 1;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// let number;
// do {
//   number = prompt("число большее 10:", "");
// } while (number !== null && number <= 10);

// function findMin() {
//   let a = parseFloat(prompt("первое число (a):", ""));
//   let b = parseFloat(prompt("второе число (b):", ""));

//   let min = a < b ? a : b;

//   alert("Меньшее число: " + min);
// }
// findMin();

// ("use strict");

// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы не согласились.")
// );

// const checkAge = () =>
//   parseInt(prompt("Ваш возраст:", ""), 10) > 18 ||
//   confirm("А родители то разрешили?");

// checkAge();

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

function showModalConfirm(message, onConfirm, onCancel) {
  const modalHTML = `
    <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmModalLabel">${message}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cancelBtn">Нет</button>
            <button type="button" class="btn btn-primary" id="confirmBtn">Да</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById("modal-container").innerHTML = modalHTML;
  const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
  confirmModal.show();

  document.getElementById('confirmBtn').addEventListener('click', function() {
    confirmModal.hide();
    onConfirm();
  });

  document.getElementById('cancelBtn').addEventListener('click', function() {
    confirmModal.hide();
    onCancel();
  });
}

function printEvenNumbers(callback) {
  showModalPrompt("Введите начальное число (a):", function(a) {
    showModalPrompt("Введите конечное число (b):", function(b) {
      a = parseInt(a);
      b = parseInt(b);
      
      if (isNaN(a) || isNaN(b)) {
        showModalAlert("Введите числовые значения.", callback);
        return;
      }

      let result = "";
      for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
          result += i + " ";
        }
      }

      if (result) {
        showModalAlert("Четные числа: " + result, callback);
      } else {
        showModalAlert("Четных чисел нет.", callback);
      }
    });
  });
}

function numberAlerts(callback) {
  let i = 1;
  function showNextAlert() {
    if (i < 3) {
      showModalAlert(`number ${i}!`, function() {
        i++;
        showNextAlert();
      });
    } else {
      callback();
    }
  }
  showNextAlert();
}

function askForNumber(callback) {
  function promptNumber() {
    showModalPrompt("Введите число большее 10:", function(value) {
      if (value <= 10) {
        promptNumber();
      } else {
        callback();
      }
    });
  }
  promptNumber();
}

function findMin(callback) {
  showModalPrompt("Введите первое число (a):", function(a) {
    showModalPrompt("Введите второе число (b):", function(b) {
      a = parseFloat(a);
      b = parseFloat(b);
      let min = a < b ? a : b;
      showModalAlert("Меньшее число: " + min, callback);
    });
  });
}

function askConfirmation(callback) {
  showModalConfirm(
    "Вы согласны?",
    function() { showModalAlert("Вы согласились.", callback); },
    function() { showModalAlert("Вы не согласились.", callback); }
  );
}

function checkAge(callback) {
  showModalPrompt("Ваш возраст:", function(age) {
    if (parseInt(age) > 18) {
      showModalAlert("Доступ разрешен.", callback);
    } else {
      showModalConfirm("Мамка-то разрешила?", function() {
        showModalAlert("Доступ разрешен.", callback);
      }, function() {
        showModalAlert("Доступ запрещен.", callback);
      });
    }
  });
}

function runAll() {
  printEvenNumbers(function() {
    numberAlerts(function() {
      askForNumber(function() {
        findMin(function() {
          askConfirmation(function() {
            checkAge(function() {
              console.log("Все задачи завершены.");
            });
          });
        });
      });
    });
  });
}

runAll();
