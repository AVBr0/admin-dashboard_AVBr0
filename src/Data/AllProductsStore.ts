import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getAllProducts } from './Api';
import ProductsType from '../Types/Types';

class AllProductsStore {
  allProducts: IPromiseBasedObservable<ProductsType[]> | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getAllProductsAction = () => {
    this.allProducts = fromPromise(getAllProducts());
  };
}

export default AllProductsStore;
