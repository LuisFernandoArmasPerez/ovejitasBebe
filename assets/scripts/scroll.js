function scrollToCatalogo() {
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
        catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
}
