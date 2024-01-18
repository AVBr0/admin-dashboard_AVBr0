import { CartType } from '../Types/Types';

const getTotalRevenue = (arr: CartType[]) => {
  return arr.reduce((acc, e) => acc + e.total, 0);
};

export const getTotalOrders = (arr: CartType[]) => {
  return arr.reduce((acc, e) => acc + e.totalQuantity, 0);
};

export const getOrdersProducts = (arr: CartType[]) => {
  const res = arr.map((e) => {
    return e.products;
  });

  const data = res.flat().map((e, idx) => {
    return { ...e, id: idx };
  });

  return data;
};

export default getTotalRevenue;
