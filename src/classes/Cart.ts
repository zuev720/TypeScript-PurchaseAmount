import Buyable from "../intarfaces/Buyable";

export default class Cart {
  readonly _repository: Set<Buyable>;

  constructor() {
    this._repository = new Set();
  }

  add(value: Buyable): void {
    this._repository.add(value);
  }

  get repository() {
    return this._repository;
  }

  getSum(discount?: number): number {
    const sum: number = Array.from(this.repository).reduce((sum, product) => sum + product.price, 0);
    return (discount) ? sum - Math.round(sum / 100 * discount) : sum;
  }

  deleteProduct(id: number): void {
    this.repository.forEach((product) => {
      if (product.id === id) {
        this.repository.delete(product);
      }
      return;
    });
  }
}
