import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { ConfigProvider, Table } from 'antd';
import cartStore from '../../../../Data/RecentCartStore';
import baseTheme from '../../../../theme';

const RecentOrders = observer(() => {
  const TableStyle = {
    width: '100%',
    height: '100%',
  } as const;

  const { getCartAction, cart } = cartStore;

  useEffect(() => {
    getCartAction();
  }, [getCartAction]);

  // console.log('recent orders', cart);

  if (!cart) {
    return null;
  }

  return cart.case({
    pending: () => <div>Loading...</div>,
    rejected: () => <div>Error</div>,
    fulfilled: (value) => (
      <>
        <h2>Recent Orders</h2>
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
          <Table
            columns={[
              {
                title: 'Title',
                dataIndex: 'title',
              },
              {
                title: 'Quantity',
                dataIndex: 'quantity',
              },
              {
                title: 'Price',
                dataIndex: 'discountedPrice',
              },
            ]}
            // loading={loading}
            style={TableStyle}
            dataSource={value.products}
            rowKey={(record) => record.title}
            pagination={false}
          />
        </ConfigProvider>
      </>
    ),
  });
});

export default RecentOrders;
