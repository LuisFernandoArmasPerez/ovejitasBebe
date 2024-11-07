function filterCards(category) {
    const cards = document.querySelectorAll('.catalog-card');
    cards.forEach(card => {
        card.style.display = (card.getAttribute('data-category') === category || category === 'all') ? '' : 'none';
    });
}
