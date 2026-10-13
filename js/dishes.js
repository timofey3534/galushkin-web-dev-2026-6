const dishes = [
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'soups/gazpacho',
        kind: 'veg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'soups/mushroom_soup',
        kind: 'veg'
    },
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'soups/norwegian_soup',
        kind: 'fish'
    },
    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 340,
        category: 'soup',
        count: '400 г',
        image: 'soups/ramen',
        kind: 'meat'
    },
    {
        keyword: 'tomyum',
        name: 'Том ям с креветками',
        price: 365,
        category: 'soup',
        count: '350 г',
        image: 'soups/tomyum',
        kind: 'fish'
    },
    {
        keyword: 'chicken_soup',
        name: 'Куриный суп',
        price: 210,
        category: 'soup',
        count: '350 г',
        image: 'soups/chicken',
        kind: 'meat'
    },
    {
        keyword: 'fried_potatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        count: '250 г',
        image: 'main_course/friedpotatoeswithmushrooms1',
        kind: 'veg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        count: '310 г',
        image: 'main_course/lasagna',
        kind: 'meat'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Котлеты из курицы с пюре',
        price: 225,
        category: 'main',
        count: '280 г',
        image: 'main_course/chickencutletsandmashedpotatoes',
        kind: 'meat'
    },
    {
        keyword: 'fish_rice',
        name: 'Рыба с рисом',
        price: 350,
        category: 'main',
        count: '300 г',
        image: 'main_course/fishrice',
        kind: 'fish'
    },
    {
        keyword: 'margherita',
        name: 'Пицца Маргарита',
        price: 390,
        category: 'main',
        count: '450 г',
        image: 'main_course/pizza',
        kind: 'veg'
    },
    {
        keyword: 'shrimp_pasta',
        name: 'Паста с креветками',
        price: 410,
        category: 'main',
        count: '300 г',
        image: 'main_course/shrimppasta',
        kind: 'fish'
    },
    {
        keyword: 'caesar',
        name: 'Салат Цезарь с курицей',
        price: 240,
        category: 'salad',
        count: '180 г',
        image: 'salads_starters/caesar',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Салат Капрезе',
        price: 260,
        category: 'salad',
        count: '200 г',
        image: 'salads_starters/caprese',
        kind: 'veg'
    },
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 290,
        category: 'salad',
        count: '180 г',
        image: 'salads_starters/tunasalad',
        kind: 'fish'
    },
    {
        keyword: 'egg_salad',
        name: 'Салат с яйцом',
        price: 190,
        category: 'salad',
        count: '170 г',
        image: 'salads_starters/saladwithegg',
        kind: 'veg'
    },
    {
        keyword: 'fries',
        name: 'Картофель фри',
        price: 140,
        category: 'salad',
        count: '150 г',
        image: 'salads_starters/frenchfries1',
        kind: 'veg'
    },
    {
        keyword: 'rustic_potatoes',
        name: 'Картофель по-деревенски',
        price: 150,
        category: 'salad',
        count: '180 г',
        image: 'salads_starters/frenchfries2',
        kind: 'veg'
    },
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'beverages/orangejuice',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'beverages/applejuice',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'beverages/carrotjuice',
        kind: 'cold'
    },
    {
        keyword: 'green_tea',
        name: 'Зелёный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'beverages/greentea',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Чёрный чай',
        price: 80,
        category: 'drink',
        count: '300 мл',
        image: 'beverages/tea',
        kind: 'hot'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: 'beverages/cappuccino',
        kind: 'hot'
    },
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 120,
        category: 'dessert',
        count: '80 г',
        image: 'desserts/baklava',
        kind: 'small'
    },
    {
        keyword: 'donuts',
        name: 'Пончики',
        price: 100,
        category: 'dessert',
        count: '90 г',
        image: 'desserts/donuts',
        kind: 'small'
    },
    {
        keyword: 'glazed_donuts',
        name: 'Пончики в глазури',
        price: 110,
        category: 'dessert',
        count: '100 г',
        image: 'desserts/donuts2',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 160,
        category: 'dessert',
        count: '120 г',
        image: 'desserts/chocolatecake',
        kind: 'medium'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 170,
        category: 'dessert',
        count: '110 г',
        image: 'desserts/checheesecake',
        kind: 'medium'
    },
    {
        keyword: 'choco_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 190,
        category: 'dessert',
        count: '150 г',
        image: 'desserts/chocolatecheesecake',
        kind: 'large'
    }
];
