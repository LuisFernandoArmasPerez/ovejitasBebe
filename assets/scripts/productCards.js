(function() {
    const aosEffects = [
        { effect: 'zoom-in-right', duration: 1500 },
        { effect: 'fade-up', duration: 1500 },
        { effect: 'zoom-in-left', duration: 1500 }
    ];

    function createCards() {
        const container = document.getElementById('card-container');
        if (!container) return;

        products.forEach((product, index) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-3';

            const card = document.createElement('div');
            card.className = 'card shadow-sm catalog-card';
            card.setAttribute('data-id', product.id);
            card.setAttribute('data-category', product.category);

            const { effect, duration } = aosEffects[index % aosEffects.length];
            card.setAttribute('data-aos', effect);
            card.setAttribute('data-aos-duration', duration);

            const img = document.createElement('img');
            img.src = product.imgSrc;
            img.className = 'card-img-top';
            img.alt = `Producto ${product.title}`;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = product.title;

            const price = document.createElement('p');
            price.className = 'card-text';
            price.textContent = product.price;

            const button = document.createElement('a');
            button.className = 'btn btn-catalog';
            button.textContent = 'Detalle';

            button.addEventListener('click', () => {
                localStorage.setItem('selectedProduct', JSON.stringify(product));
                window.location.href = product.detailUrl;
            });

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(button);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            container.appendChild(col);
        });

        AOS.init();
    }

    createCards();
})();
