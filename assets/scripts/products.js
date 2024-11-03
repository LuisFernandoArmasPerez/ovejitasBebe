// Array de productos con id únicos
const products = [
    {
        id: 1,
        imgSrc: "assets/images/ropita1.jpg",
        title: "Conjunto Selva",
        price: "17.000",
        buyLink: "https://articulo.mercadolibre.com.ar/MLA-1457499339-conjunto-bebe-selva-verano-3-6-meses-_JM",
        category: "ropa" // Ejemplo de categoría
    },
    {
        id: 2,
        imgSrc: "assets/images/ropita2.jpg",
        title: "Enterito Osito",
        price: "17.000",
        buyLink: "https://articulo.mercadolibre.com.ar/MLA-1949895746-enterito-osito-azul-bebe-3-6-meses-_JM",
        category: "juguetes" // Ejemplo de categoría
    },
    // Agrega más productos aquí...
];

// Función para crear las cards
function createCards() {
    const container = document.getElementById('card-container');

    products.forEach(product => {
        // Crear el elemento card
        const col = document.createElement('div');
        col.className = 'col-md-4';
        const card = document.createElement('div');
        card.className = 'card shadow-sm catalog-card';
        card.setAttribute('data-id', product.id); // Asignar el ID como data attribute
        card.setAttribute('data-category', product.category); // Asignar la categoría como data attribute

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
        button.href = product.buyLink;
        button.className = 'btn btn-catalog';
        button.textContent = 'Comprar';

        // Agregar los elementos a la card
        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
    });
}

// Llamar a la función para crear las cards
createCards();