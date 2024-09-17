// "use strict";
// const init = () => {
//   console.log(document.querySelector("div"));
//   console.log(document.querySelector("ul"));
//   console.log(document.querySelectorAll("li")[1]);
// };

// document.addEventListener("DOMContentLoaded", init);

// const init1 = () => {
//   let liList = document.querySelectorAll("li");
//   for (let i of liList) {
//     i.classList.add("list-item");
//     console.log(i.className);
//   }
// };

// document.addEventListener("DOMContentLoaded", init1);

// document.addEventListener("DOMContentLoaded", function () {
//   let numberOfBlocks = prompt("Введите количество блоков:");

//   numberOfBlocks = parseInt(numberOfBlocks);

//   if (!isNaN(numberOfBlocks) && numberOfBlocks > 0) {
//     for (let i = 0; i < numberOfBlocks; i++) {
//       let block = document.createElement("div");
//       block.className = "block";
//       block.textContent = `Блок ${i + 1}`;

//       document.body.appendChild(block);
//     }
//   } else {
//     alert("Пожалуйста, введите корректное число.");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("userForm")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       let name = document.getElementById("name").value;
//       let email = document.getElementById("email").value;

//       console.log("Имя:", name);
//       console.log("Email:", email);

//       alert("Проверьте почту!");
//     });
// });

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

  if (callback) {
    document.getElementById('alertModal').addEventListener('hidden.bs.modal', callback);
  }
}

const init = () => {
  console.log(document.querySelector("div"));
  console.log(document.querySelector("ul"));
  console.log(document.querySelectorAll("li")[1]);
};

document.addEventListener("DOMContentLoaded", init);

const init1 = () => {
  let liList = document.querySelectorAll("li");
  for (let i of liList) {
    i.classList.add("list-item");
    console.log(i.className);
  }
};

document.addEventListener("DOMContentLoaded", init1);

document.addEventListener("DOMContentLoaded", function () {
  let numberOfBlocks = prompt("Введите количество блоков:");

  numberOfBlocks = parseInt(numberOfBlocks);

  if (!isNaN(numberOfBlocks) && numberOfBlocks > 0) {
    for (let i = 0; i < numberOfBlocks; i++) {
      let block = document.createElement("div");
      block.className = "block";
      block.textContent = `Блок ${i + 1}`;

      document.body.appendChild(block);
    }
  } else {
    showModalAlert("Пожалуйста, введите корректное число.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("userForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;

      console.log("Имя:", name);
      console.log("Email:", email);

      showModalAlert("Проверьте почту!");
    });
});