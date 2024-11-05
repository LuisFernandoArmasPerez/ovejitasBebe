// Array de productos con id únicos
const products = [
    {
        id: 1,
        imgSrc: "assets/images/ConjuntoSelva.jpg",
        title: "Conjunto Selva",
        price: "17.000",
        buyLink: "https://articulo.mercadolibre.com.ar/MLA-1457499339-conjunto-bebe-selva-verano-3-6-meses-_JM",
        category: "conjunto"
    },
    {
        id: 2,
        imgSrc: "assets/images/EnteritoOsito.jpg",
        title: "Enterito Osito",
        price: "17.000",
        buyLink: "https://articulo.mercadolibre.com.ar/MLA-1949895746-enterito-osito-azul-bebe-3-6-meses-_JM",
        category: "enterito"
    },
    // Agrega más productos aquí...
];

// Función para crear las cards
function createCards() {
    const container = document.getElementById('card-container');

    products.forEach(product => {
        // Crear el elemento card
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-3';

        const card = document.createElement('div');
        card.className = 'card shadow-sm catalog-card';
        card.setAttribute('data-id', product.id);
        card.setAttribute('data-category', product.category);

        // Agrego atributos de AOS para animación
        card.setAttribute('data-aos', 'zoom-in-right');
        card.setAttribute('data-aos-duration', '1500');

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

    // Inicializar AOS para las nuevas tarjetas
    AOS.init();
}

// Llamar a la función para crear las cards
createCards();