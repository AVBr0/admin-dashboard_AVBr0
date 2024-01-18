import { Typography, ConfigProvider, Table, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { allCartsStore } from '../Dashboard/Dashboard';
import searchArguments from '../../../functions/searchFilter';
import { getOrdersProducts } from '../../../functions/getCardsData';
import OrdersWrapper from './Orders.styles';
import baseTheme from '../../../theme';

const Orders = observer(() => {
  const TableStyle = {
    width: '100%',
    height: '85%',
  } as const;

  const { getAllCartsAction, allCarts } = allCartsStore;
  const [searchedText, setSearchedText] = useState('');

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
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 10,
            colorTextBase: baseTheme.colors.font,
            colorBgBase: baseTheme.colors.bg,
            fontSize: 16,
          },
        }}
      >
        <OrdersWrapper>
          <Typography.Title level={4}>Orders</Typography.Title>

          <Input.Search
            placeholder="Type your request here, please..."
            style={{ marginBottom: 10 }}
            onSearch={(val) => {
              setSearchedText(val);
            }}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          />
          <Table
            columns={[
              {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                filteredValue: [searchedText],
                onFilter: (val, data) => {
                  const res = searchArguments(val.toString(), data.title);
                  return res;
                },
                sorter: (t1, t2) => {
                  const a = t1.title.toLowerCase();
                  const b = t2.title.toLowerCase();
                  if (a < b) return -1;
                  if (a > b) return 1;
                  return 0;
                },
              },
              {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity',
                sorter: (d1, d2) => d1.quantity - d2.quantity,
              },
              {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
                sorter: (d1, d2) => d1.price - d2.price,
              },
              {
                title: 'Total',
                dataIndex: 'total',
                key: 'total',
                sorter: (d1, d2) => d1.total - d2.total,
              },
            ]}
            // loading={loading}
            style={TableStyle}
            dataSource={getOrdersProducts(value)}
            rowKey={(record) => record.id}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30'],
            }}
          />
        </OrdersWrapper>
      </ConfigProvider>
    ),
  });
});

export default Orders;
