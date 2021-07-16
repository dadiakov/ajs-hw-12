import Cart from '../service/Cart';
import Phone from '../domain/Phone';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.getAll().length).toBe(0);
});

test('test all func', () => {

  let cart = new Cart();
  let movie1 = new Movie(1, 'Форсаж', 550, 2013, 'USA', 'Скорость наше всё', ['Боевик', 'Приключения'], 90)
  let movie2 = new Movie(2, 'Мстители', 500, 2018, 'USA', 'Они спасут мир', ['Боевик', 'Приключения', 'Фанстастика'], 110)
  let phone1 = new Phone(3, 'iPhone', 1000, 500);
  let phone2 = new Phone(4, 'Xiaomi', 500, 1000);
  cart.add(movie1);
  cart.add(movie2);
  cart.add(movie2);
  cart.add(phone1);
  cart.add(phone1);
  cart.add(phone1);
  cart.add(phone2);
  cart.removeOne(3);
  cart.removeOne(4);

  expect(cart.getAll()).toEqual([
    {
    "id": 1,
    "name": "Форсаж",
    "price": 550,
    "year": 2013,
    "country": "USA",
    "slogan": "Скорость наше всё",
    "genre": ["Боевик", "Приключения"],
    "duration": 90,
    "addable": false,
    "quantity": 1
    }, 

    {
    "id": 2,
    "name": "Мстители",
    "price": 500,
    "year": 2018,
    "country": "USA",
    "slogan": "Они спасут мир",
    "genre": ["Боевик", "Приключения", "Фанстастика"],
    "duration": 110,
    "addable": false,
    "quantity": 1
    }, 

    {
    "id": 3,
    "name": "iPhone",
    "price": 1000,
    "memory": 500,
    "addable": true,
    "quantity": 2
    }]);

    expect(cart.calculateTotalPrice()).toBe(3050);
    expect(cart.calculateTotalWithDiscount(20)).toBe(2440);
});