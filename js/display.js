function compareByName(first, second) {
    if (first.name < second.name) {
        return -1;
    }
    if (first.name > second.name) {
        return 1;
    }
    return 0;
}

function makeParagraph(text, className) {
    const element = document.createElement('p');
    element.classList.add(className);
    element.textContent = text;
    return element;
}

function makeDishCard(dish) {
    const card = document.createElement('div');
    card.classList.add('dish');
    card.dataset.dish = dish.keyword;
    const picture = document.createElement('img');
    picture.src = 'images/' + dish.image + '.jpg';
    picture.alt = dish.name;
    picture.width = 400;
    picture.height = 400;
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Добавить';
    card.append(picture);
    card.append(makeParagraph(dish.price + '₽', 'dish-price'));
    card.append(makeParagraph(dish.name, 'dish-name'));
    card.append(makeParagraph(dish.count, 'dish-weight'));
    card.append(button);
    return card;
}

function renderCategory(category, containerId) {
    const container = document.getElementById(containerId);
    const list = dishes.filter(function (dish) {
        return dish.category === category;
    });
    list.sort(compareByName);
    list.forEach(function (dish) {
        container.append(makeDishCard(dish));
    });
}

renderCategory('soup', 'soups-dishes');
renderCategory('main', 'mains-dishes');
renderCategory('salad', 'salads-dishes');
renderCategory('drink', 'drinks-dishes');
renderCategory('dessert', 'desserts-dishes');
