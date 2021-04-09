import Cart from "./classes/Cart";
import {film, film1} from "./base/film";

const cart = new Cart();
cart.add(film);
cart.add(film1);
console.log(Array.from(cart.repository));
console.log(cart.getSum(3));
cart.deleteProduct(1527)
console.log(cart.repository);
