import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../../functions/useMediaQuery';
import SideBarSD from './Sidebar.styles';
import baseTheme from '../../theme';

const Sidebar = () => {
  const ButtonCollapsedStyle = {
    display: 'none',
    position: 'fixed',
    top: '10px',
    left: '75px',
  } as const;

  const [collapsed, setCollapsed] = useState(false);
  const mathches = useMediaQuery('lg');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  return (
    <SideBarSD>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={ButtonCollapsedStyle}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        theme="dark"
        style={{
          minWidth: 0,
          flex: 'auto',
          backgroundColor: baseTheme.colors.sideBarBg,
          borderRadius: '0 10px 10px 0 ',
        }}
        onClick={(item) => {
          navigate(item.key);
        }}
        mode="inline"
        inlineCollapsed={mathches ? collapsed : !collapsed}
        items={[
          {
            label: 'Dashboard',
            icon: <AppstoreOutlined />,
            key: '/admin-dashboard-react/',
          },
          {
            label: 'Inventory',
            icon: <ShopOutlined />,
            key: '/admin-dashboard-react/inventory',
          },
          {
            label: 'Orders',
            icon: <ShoppingCartOutlined />,
            key: '/admin-dashboard-react/orders',
          },
          {
            label: 'Customers',
            icon: <UserOutlined />,
            key: '/admin-dashboard-react/customers',
          },
        ]}
      />
    </SideBarSD>
  );
};

export default Sidebar;
