import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IPromiseBasedObservable } from 'mobx-utils';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import getMonthsRevenue from '../../../../functions/getMonthsRevenue';
import { CartType } from '../../../../Types/Types';

type MonthRevenueProps = {
  getAllCartsAction: () => void;
  allCarts: IPromiseBasedObservable<CartType[]> | undefined;
};

const MonthRevenue = observer(
  ({ getAllCartsAction, allCarts }: MonthRevenueProps) => {
    useEffect(() => {
      getAllCartsAction();
    }, [getAllCartsAction]);

    // console.log(allCarts);

    if (!allCarts) {
      return null;
    }

    return allCarts.case({
      pending: () => <div>Loading...</div>,
      rejected: () => <div>Error</div>,
      fulfilled: (value) => (
        <div style={{ minWidth: 0, width: '100%', height: '90%' }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={getMonthsRevenue(value)}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="month" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="EBIT"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="EBT" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="EBITDA" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      ),
    });
  }
);

export default MonthRevenue;
