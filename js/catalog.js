const select = document.getElementById('platform');
const cards = document.querySelectorAll('.card');

select.addEventListener('change', function () {
    for (const card of cards) {
        if (select.value === 'all' || card.dataset.platform === select.value) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
});