function filterCards(category) {
    const cards = document.querySelectorAll('.catalog-card');
    cards.forEach(card => {
        if (card.getAttribute('data-category') === category || category === 'all') {
            card.style.display = 'block'; // Mostrar tarjeta
        } else {
            card.style.display = 'none'; // Ocultar tarjeta
        }
    });
}