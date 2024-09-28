"use strict";

let arrNews = [];

let form = document.getElementById('addNewsForm');
let nameInput = document.getElementById('newsTitle');
let descInput = document.getElementById('newsDesc');
let nameError = document.getElementById('nameError');
let descError = document.getElementById('descError');
let newsContainer = document.getElementById('newsContainer');

form.addEventListener('submit', addNews);

function addNews(event) {
    event.preventDefault();
    nameError.innerHTML = '';
    descError.innerHTML = '';
    let flag = true;

    nameInput.classList.remove('is-invalid');
    descInput.classList.remove('is-invalid');

    if (!nameInput.value.trim()) {
        nameError.innerHTML = 'Введите название';
        nameInput.classList.add('is-invalid');
        flag = false;
    }
    if (!descInput.value.trim()) {
        descError.innerHTML = 'Введите описание';
        descInput.classList.add('is-invalid');
        flag = false;
    }
    if (nameInput.value.trim().length < 8) {
        nameError.innerHTML = 'Введите не менее 8 символов';
        nameInput.classList.add('is-invalid');
        flag = false;
    }
    if (descInput.value.trim().length > 300) {
        descError.innerHTML = 'Введите не более 300 символов';
        descInput.classList.add('is-invalid');
        flag = false;
    }

    if (flag) {
        arrNews.push({
            title: nameInput.value.trim(),
            description: descInput.value.trim()
        });
        nameInput.value = '';
        descInput.value = '';
        let addNewsModal = bootstrap.Modal.getInstance(document.getElementById('addNewsModal'));
        addNewsModal.hide();
        displayNews();
    }
}

function displayNews() {
    newsContainer.innerHTML = '';
    arrNews.forEach(news => {
        let newsItem = document.createElement('div');
        newsItem.className = "col-md-6 mb-4";
        newsItem.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description}</p>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyB') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; 
    } else if (event.code === 'KeyW') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; 
    }
});