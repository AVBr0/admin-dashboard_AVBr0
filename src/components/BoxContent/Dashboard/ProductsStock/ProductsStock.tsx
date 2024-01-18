import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { IPromiseBasedObservable } from 'mobx-utils';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import getProductsStockValue, {
  getProductsStockByCategory,
} from '../../../../functions/getProductsData';
import ProductsType from '../../../../Types/Types';

type ProductsStockProps = {
  getAllProductsAction: () => void;
  allProducts: IPromiseBasedObservable<ProductsType[]> | undefined;
};

const ProductsStock = observer(
  ({ getAllProductsAction, allProducts }: ProductsStockProps) => {
    useEffect(() => {
      getAllProductsAction();
    }, [getAllProductsAction]);

    // console.log(allProducts);

    if (!allProducts) {
      return null;
    }

    return allProducts.case({
      pending: () => <div>Loading...</div>,
      rejected: () => <div>Error</div>,
      fulfilled: (value) => (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={getProductsStockByCategory(value)}
              dataKey="value"
              // cx={200}
              // cy={200}
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={getProductsStockValue(value)}
              dataKey="value"
              // cx={200}
              // cy={200}
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
    });
  }
);

export default ProductsStock;
