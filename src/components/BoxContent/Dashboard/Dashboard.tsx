import {
  DollarCircleOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import MonthRevenue from './Revenue/Revenue';
import AllCartsStore from '../../../Data/AllCartsStore';
import DashboardCard from './Cards/Cards';
import RecentOrders from './RecentOrders/RecentOrders';
import RecentBuyers from './RecentBuyers/RecentBuyers';
import NetIncome from './NetIncome/NetIncome';
import AllProductsStore from '../../../Data/AllProductsStore';
import AllUsersStore from '../../../Data/AllUsersStore';
import getInventoryData from '../../../functions/getInventoryData';
import getTotalRevenue, {
  getTotalOrders,
} from '../../../functions/getCardsData';
import ProductsStock from './ProductsStock/ProductsStock';
import PieChartLegenda from './ProductsStock/PieChartLegenda';
import DashboardCardsWrapperSd, {
  Box,
  Box1,
  Box235,
  Box4,
  Box7,
} from './Dashboard.styles';
import baseTheme from '../../../theme';

export const allCartsStore = new AllCartsStore();
export const allProductsStore = new AllProductsStore();
export const allUsersStore = new AllUsersStore();

const Dashboard = observer(() => {
  const DashboardCardIconStyle = {
    color: baseTheme.colors.dashboardCardIcon,
    backgroundColor: baseTheme.colors.font,
    borderRadius: 20,
    fontSize: 24,
    padding: 8,
  };
  const { getAllCartsAction, allCarts } = allCartsStore;
  const { allProducts } = allProductsStore;
  const { allUsers } = allUsersStore;
  const navigate = useNavigate();
  const netIncomeK = 0.45;

  useEffect(() => {
    getAllCartsAction();
  }, [getAllCartsAction]);

  // console.log(allCarts);

  const totalRevenue =
    allCarts?.state === 'fulfilled'
      ? getTotalRevenue(allCarts.value)
      : 'Loading...';

  const totalOrders =
    allCarts?.state === 'fulfilled'
      ? getTotalOrders(allCarts.value)
      : 'Loading...';

  const inventoryData =
    allProducts?.state === 'fulfilled'
      ? getInventoryData(allProducts.value)
      : 'Loading...';

  const totalUsersAmount =
    allUsers?.state === 'fulfilled' ? allUsers.value.length : 'Loading...';

  return (
    <DashboardCardsWrapperSd>
      <Box1>
        <Typography.Title style={{ color: baseTheme.colors.font }} level={2}>
          Stock
        </Typography.Title>
        <ProductsStock
          getAllProductsAction={allProductsStore.getAllProductsAction}
          allProducts={allProductsStore.allProducts}
        />
        <PieChartLegenda textColor={baseTheme.colors.font} />
      </Box1>
      <Box235>
        <DashboardCard
          icon={<ShoppingCartOutlined style={DashboardCardIconStyle} />}
          title="Orders:"
          value={totalOrders}
        />

        <Button
          type="default"
          value="large"
          onClick={() => navigate('/admin-dashboard-react/orders')}
        >
          <InfoCircleOutlined />
          View all
        </Button>
      </Box235>
      <Box235>
        <DashboardCard
          icon={<ShoppingOutlined style={DashboardCardIconStyle} />}
          title="Inventory:"
          value={inventoryData}
        />

        <Button
          type="default"
          value="large"
          onClick={() => navigate('/admin-dashboard-react/inventory')}
        >
          <InfoCircleOutlined />
          View all
        </Button>
      </Box235>
      <Box4>
        <RecentOrders />
      </Box4>
      <Box235>
        <DashboardCard
          icon={<UserOutlined style={DashboardCardIconStyle} />}
          title="Customers:"
          value={totalUsersAmount}
        />

        <Button
          type="default"
          value="large"
          onClick={() => navigate('/admin-dashboard-react/customers')}
        >
          <InfoCircleOutlined />
          View all
        </Button>
      </Box235>
      <Box>
        <DashboardCard
          icon={<DollarCircleOutlined style={DashboardCardIconStyle} />}
          title="Revenue, $:"
          value={totalRevenue}
        />
      </Box>
      <Box7>
        <MonthRevenue
          getAllCartsAction={allCartsStore.getAllCartsAction}
          allCarts={allCartsStore.allCarts}
        />
      </Box7>
      <Box>
        <RecentBuyers
          getAllUsersAction={allUsersStore.getAllUsersAction}
          allUsers={allUsersStore.allUsers}
        />
      </Box>
      <Box>
        <NetIncome val={totalRevenue} k={netIncomeK} />
      </Box>
    </DashboardCardsWrapperSd>
  );
});

export default Dashboard;
