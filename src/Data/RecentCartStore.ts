import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getCart } from './Api';
import { CartType } from '../Types/Types';

class CartStore {
  cart?: IPromiseBasedObservable<CartType>;

  constructor() {
    makeAutoObservable(this);
  }

  getCartAction = () => {
    this.cart = fromPromise(getCart());
    // console.log('orders done');
  };
}

export default new CartStore();
