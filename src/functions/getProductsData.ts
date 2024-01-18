import ProductsType from '../Types/Types';

type DataType = {
  name: string;
  value: number;
};

const getProductsStockValue = (arr: ProductsType[]) => {
  const data: DataType[] = [];
  arr.forEach((key) => {
    data.push({ name: key.title, value: key.stock });
  });

  return data;
};

export default getProductsStockValue;

export const getProductsStockByCategory = (arr: ProductsType[]) => {
  const res = arr.reduce((acc: { [key: string]: number }, el) => {
    if (el.category in acc) {
      acc[el.category] += el.stock;
    } else {
      acc[el.category] = el.stock;
    }

    return acc;
  }, {});

  const data: DataType[] = [];

  Object.keys(res).forEach((key) => {
    data.push({ name: key, value: res[key] });
  });

  return data;
};
