// Recupera los datos del producto desde localStorage
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

// Verificamos si hay datos en localStorage
if (selectedProduct) {
    // Configuramos cada elemento con los datos obtenidos
    const productImg = document.getElementById('product-img');
    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const productSize = document.getElementById('product-size');
    const buyLink = document.getElementById('buy-link');

    // Asignamos las propiedades del producto
    productImg.src = selectedProduct.imgSrc;
    productImg.alt = `${selectedProduct.title}`;
    productTitle.textContent = selectedProduct.title;
    productPrice.textContent = `${selectedProduct.price}`;
    productDescription.textContent = selectedProduct.description;
    productSize.textContent = selectedProduct.size;
    buyLink.href = selectedProduct.buyLink;

} else {
    // Mensaje de error y redirección en caso de datos faltantes
    alert("No se encontró información del producto.");
    window.location.href = "index.html";
}