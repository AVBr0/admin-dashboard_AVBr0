import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getAllCarts } from './Api';
import { CartType } from '../Types/Types';

class AllCartsStore {
  allCarts: IPromiseBasedObservable<CartType[]> | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getAllCartsAction = () => {
    this.allCarts = fromPromise(getAllCarts());
  };
}

export default AllCartsStore;
