import Cart from "../classes/Cart";
import {film, film1} from "../base/film";

it('Экземпляр класса должен создаваться', () => {
  const cart = new Cart();
  expect(cart.repository.size).toBe(0);
});

it('Метод getSum() экземпляра класса должен корректно возвращать сумму товаров', () => {
  const cart = new Cart();
  cart.add(film);
  cart.add(film1);
  expect(cart.getSum(3)).toBe(533);
  expect(cart.getSum()).toBe(550);
});

it('Метод deleteProduct() экземпляра класса должен корректно удалять товар', () => {
  const cart = new Cart();
  cart.add(film);
  cart.add(film1);
  cart.deleteProduct(1527)
  expect(Array.from(cart.repository)).toEqual([
      {
        id: 1538,
        name: 'Люди x',
        price: 250,
        translateName: 'The X-man',
        image: './src/base/images/x-man.jpg',
        year: 2011,
        slogan: 'Super-puper',
        country: 'США',
        ganre: ['фантастика', 'боевик', 'приключения', 'фентези'],
        time: ['./src/base/images/time.jpg', '120 мин/02:00']
      }
    ]
  )
});
