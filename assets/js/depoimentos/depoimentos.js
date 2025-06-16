const button = document.getElementById('buttoncomente');
const cards = document.getElementById('depoimentos');

button.addEventListener('click', () => {
    cards.classList.toggle('expanded');

    const allDepoimentos = cards.querySelectorAll('.depoimento');

    if (cards.classList.contains('expanded')) {
        // Mostrar todos os depoimentos
        allDepoimentos.forEach(el => el.classList.remove('hidden'));
        button.textContent = 'Ver menos';
    } else {
        // Voltar a mostrar apenas os 3 primeiros
        allDepoimentos.forEach((el, index) => {
            if (index < 3) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
        button.textContent = 'Ver mais';
    }
});
