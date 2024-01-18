import ProductsType from '../Types/Types';

const getInventoryData = (arr: ProductsType[]) => {
  return arr.reduce((acc, e) => acc + e.stock, 0);
};

export default getInventoryData;
