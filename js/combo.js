function comboError() {
    const hasSoup = order.soup !== null;
    const hasMain = order.main !== null;
    const hasSalad = order.salad !== null;
    const hasDrink = order.drink !== null;
    const hasDessert = order.dessert !== null;
    const hasAny = hasSoup || hasMain || hasSalad
        || hasDrink || hasDessert;
    if (!hasAny) {
        return 'Ничего не выбрано. Выберите блюда для заказа';
    }
    if (!hasSoup && !hasMain && !hasSalad) {
        return 'Выберите главное блюдо';
    }
    if (hasSalad && !hasSoup && !hasMain) {
        return 'Выберите суп или главное блюдо';
    }
    if (hasSoup && !hasMain && !hasSalad) {
        return 'Выберите главное блюдо/салат/стартер';
    }
    if (!hasDrink) {
        return 'Выберите напиток';
    }
    return null;
}

function showNotice(message) {
    const overlay = document.createElement('div');
    overlay.classList.add('notice-overlay');
    const box = document.createElement('div');
    box.classList.add('notice');
    const text = document.createElement('p');
    text.textContent = message;
    const ok = document.createElement('button');
    ok.type = 'button';
    ok.textContent = 'Окей 👌';
    ok.addEventListener('click', function () {
        overlay.remove();
    });
    box.append(text);
    box.append(ok);
    overlay.append(box);
    document.body.append(overlay);
}

const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', function (event) {
    const error = comboError();
    if (error !== null) {
        event.preventDefault();
        showNotice(error);
    }
});
