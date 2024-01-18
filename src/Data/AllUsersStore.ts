import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getAllUsers } from './Api';
import { UserType } from '../Types/Types';

class AllUsersStore {
  allUsers: IPromiseBasedObservable<UserType[]> | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getAllUsersAction = () => {
    this.allUsers = fromPromise(getAllUsers());
  };
}

export default AllUsersStore;
