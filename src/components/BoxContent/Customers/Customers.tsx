import { Typography, ConfigProvider, Table, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  EditOutlined,
  SnippetsOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { allUsersStore } from '../Dashboard/Dashboard';
import searchArguments from '../../../functions/searchFilter';
import sortString from '../../../functions/sortString';
import CustomersWrapper from './Customers.styles';
import baseTheme from '../../../theme';
import { deleteUser } from '../../../Data/Api';

const Customers = observer(() => {
  const TableStyle = {
    width: '100%',
    height: '85%',
  } as const;

  const { getAllUsersAction, allUsers } = allUsersStore;
  const [searchedText, setSearchedText] = useState('');
  const [refreshStatus, setRefreshStatus] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsersAction();
    setRefreshStatus(false);
  }, [getAllUsersAction, refreshStatus]);

  // console.log(allUsers?.value);

  if (!allUsers) {
    return null;
  }

  return allUsers.case({
    pending: () => <div>Loading...</div>,
    rejected: () => <div>Error</div>,
    fulfilled: (value) => (
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 10,
            colorBorder: baseTheme.colors.font,
            colorTextBase: baseTheme.colors.font,
            colorBgBase: baseTheme.colors.bg,
            fontSize: 16,
          },
        }}
      >
        <CustomersWrapper>
          <Typography.Title level={4}>Customers</Typography.Title>

          <Button
            onClick={() => {
              navigate('/admin-dashboard-react/editUsers', {
                state: {
                  lastUserID: value[value.length - 1].id,
                  action: 'create',
                },
              });
            }}
          >
            Create New User
          </Button>
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
                title: 'Photo',
                dataIndex: 'image',
                key: 'image',
                render: (i) => (
                  <img
                    width={50}
                    src={i || baseTheme.defaultImages.user}
                    alt={i || baseTheme.defaultImages.user}
                  />
                ),
              },
              {
                title: 'FirstName',
                dataIndex: 'firstName',
                key: 'firstName',
                filteredValue: [searchedText],
                onFilter: (val, data) => {
                  const res = searchArguments(val.toString(), data.firstName);
                  return res;
                },
                sorter: (t1, t2) => sortString(t1.firstName, t2.firstName),
              },
              {
                title: 'LastName',
                dataIndex: 'lastName',
                key: 'lastName',
                sorter: (t1, t2) => sortString(t1.lastName, t2.lastName),
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (d1, d2) => d1.age - d2.age,
              },
              {
                title: 'Details',
                width: '170px',
                render: (data) => (
                  <div>
                    <Button
                      type="link"
                      onClick={() => {
                        navigate('/admin-dashboard-react/user', {
                          state: data,
                        });
                      }}
                    >
                      <SnippetsOutlined />
                    </Button>

                    <Button
                      type="link"
                      style={{ color: baseTheme.colors.editButton }}
                      onClick={() => {
                        navigate('/admin-dashboard-react/editUsers', {
                          state: { selectedUserData: data, action: 'edit' },
                        });
                      }}
                    >
                      <EditOutlined />
                    </Button>

                    <Button
                      type="link"
                      style={{ color: baseTheme.colors.deleteButton }}
                      onClick={() => {
                        deleteUser(data.id);
                        setRefreshStatus(true);
                      }}
                    >
                      <UserDeleteOutlined />
                    </Button>
                  </div>
                ),
              },
            ]}
            // loading={loading}
            style={TableStyle}
            dataSource={value}
            rowKey={(record) => record.id}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30'],
            }}
          />
        </CustomersWrapper>
      </ConfigProvider>
    ),
  });
});

export default Customers;
