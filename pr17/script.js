document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.getElementById('catalog');
    const productDetail = document.getElementById('product-detail');
    const backButton = document.getElementById('back-button');

    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    const detailPrice = document.getElementById('detail-price');
    const detailCategory = document.getElementById('detail-category');

    function loadCatalog() {
        fetch('https://dummyjson.com/products?limit=15')
            .then(response => response.json())
            .then(data => {
                const products = data.products;
                products.forEach(product => {
                    const col = document.createElement('div');
                    col.className = 'col';

                    const card = document.createElement('div');
                    card.className = 'card h-100';
                    card.style.cursor = 'pointer';
                    card.dataset.productId = product.id; 

                    const img = document.createElement('img');
                    img.src = product.thumbnail;
                    img.className = 'card-img-top';
                    img.alt = product.title;

                    const cardBody = document.createElement('div');
                    cardBody.className = 'card-body';

                    const title = document.createElement('h5');
                    title.className = 'card-title';
                    title.textContent = product.title;

                    const price = document.createElement('p');
                    price.className = 'card-text';
                    price.innerHTML = `<strong>Цена:</strong> $${product.price}`;

                    cardBody.appendChild(title);
                    cardBody.appendChild(price);
                    card.appendChild(img);
                    card.appendChild(cardBody);
                    col.appendChild(card);
                    catalog.appendChild(col);

                    card.addEventListener('click', () => showProductDetail(product));
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке каталога:', error);
                catalog.innerHTML = '<p class="text-danger">Не удалось загрузить каталог товаров.</p>';
            });
    }

    function showProductDetail(product) {

        detailImage.src = product.thumbnail;
        detailTitle.textContent = product.title;
        detailDescription.textContent = product.description;
        detailPrice.textContent = product.price;
        detailCategory.textContent = product.category;
        catalog.classList.add('d-none');
        productDetail.classList.remove('d-none');
    }

    backButton.addEventListener('click', () => {
        productDetail.classList.add('d-none');
        catalog.classList.remove('d-none');
    });

    loadCatalog();
});
