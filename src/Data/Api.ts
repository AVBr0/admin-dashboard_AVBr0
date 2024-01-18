import axios from 'axios';
import ProductsType, { CartType, UserType } from '../Types/Types';

const cartsPath = 'http://localhost:3001/carts';
const usersPath = 'http://localhost:3001/users';
const productsPath = 'http://localhost:3001/products';

export const getCart = async () =>
  (await axios.get<CartType>(`${cartsPath}/1`)).data;

export const getAllCarts = async () =>
  (await axios.get<CartType[]>(cartsPath)).data;

export const getAllUsers = async () =>
  (await axios.get<UserType[]>(usersPath)).data;

export const getAllProducts = async () =>
  (await axios.get<ProductsType[]>(productsPath)).data;

export const createUser = async (userData: UserType) => {
  try {
    const res = await axios.post(usersPath, userData);
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (userData: UserType) => {
  try {
    const res = await axios.patch(`${usersPath}/${userData.id}`, userData);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (userID: string) => {
  try {
    const res = await axios.delete(`${usersPath}/${userID}`);
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async (productData: ProductsType) => {
  try {
    const res = await axios.post(productsPath, productData);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (productData: ProductsType) => {
  try {
    const res = await axios.patch(
      `${productsPath}/${productData.id}`,
      productData
    );
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (productID: string) => {
  try {
    const res = await axios.delete(`${productsPath}/${productID}`);
  } catch (err) {
    console.log(err);
  }
};

export default getCart;
