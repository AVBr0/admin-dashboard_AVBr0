import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../BoxContent/Dashboard/Dashboard';
import Inventory from '../BoxContent/Inventory/Inventory';
import Orders from '../BoxContent/Orders/Orders';
import Customers from '../BoxContent/Customers/Customers';
import SingleProduct from '../BoxContent/Details/SingleProduct';
import SingleUser from '../BoxContent/Details/SingleUser';
import EditUsersForm from '../BoxContent/EditForm/EditUsersForm';
import EditInventoryForm from '../BoxContent/EditForm/EditInventory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin-dashboard-react/" element={<Dashboard />} />
      <Route path="/admin-dashboard-react/inventory" element={<Inventory />} />
      <Route path="/admin-dashboard-react/orders" element={<Orders />} />
      <Route path="/admin-dashboard-react/customers" element={<Customers />} />
      <Route path="/admin-dashboard-react/item" element={<SingleProduct />} />
      <Route path="/admin-dashboard-react/user" element={<SingleUser />} />
      <Route
        path="/admin-dashboard-react/editUsers"
        element={<EditUsersForm />}
      />
      <Route
        path="/admin-dashboard-react/editInventory"
        element={<EditInventoryForm />}
      />
    </Routes>
  );
};

export default AppRoutes;
