import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import FormWrapper from './EditForm.styles';
import { UserType } from '../../../Types/Types';
import { createUser, updateUser } from '../../../Data/Api';

const EditUsersForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lastUserID, selectedUserData, action } = location.state;
  const currentID = (lastUserID + 1) as number;

  // console.log(lastUserID, action, selectedUserData);

  const createNewUser = (e: UserType) => {
    e.id = currentID.toString();
    // console.log(e);
    createUser(e);
    navigate('/admin-dashboard-react/customers');
  };

  const editUser = (e: UserType) => {
    // console.log(e);
    updateUser(e);
    navigate('/admin-dashboard-react/customers');
  };

  return (
    <FormWrapper>
      USERFORM
      <Form
        initialValues={{
          id: action === 'create' ? currentID : selectedUserData.id,
          firstName: action === 'edit' ? selectedUserData.firstName : null,
          lastName: action === 'edit' ? selectedUserData.lastName : null,
          phone: action === 'edit' ? selectedUserData.phone : null,
          email: action === 'edit' ? selectedUserData.email : null,
          birthDate: action === 'edit' ? selectedUserData.birthDate : null,
          image: action === 'edit' ? selectedUserData.image : null,
          gender: action === 'edit' ? selectedUserData.gender : null,
          ip: action === 'edit' ? selectedUserData.ip : null,
          username: action === 'edit' ? selectedUserData.username : null,
          password: action === 'edit' ? selectedUserData.password : null,
          age: action === 'edit' ? selectedUserData.age.toString() : null,
        }}
        labelCol={{ span: 8 }}
        onFinish={action === 'create' ? createNewUser : editUser}
      >
        <Form.Item label="id" name="id">
          <Input readOnly />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter user name',
            },
            {
              whitespace: true,
            },
            {
              min: 2,
            },
            {
              max: 16,
            },
          ]}
          label="First Name"
          name="firstName"
          hasFeedback
        >
          <Input placeholder="First Name" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter the last name of the user',
            },
            {
              whitespace: true,
            },
            {
              min: 2,
            },
            {
              max: 16,
            },
          ]}
          label="Last Name"
          name="lastName"
          hasFeedback
        >
          <Input placeholder="Last Name" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please enter your user email',
            },
          ]}
          hasFeedback
          label="email"
          name="email"
        >
          <Input placeholder="email" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter your user phone',
            },
            {
              pattern: /^[+]?\d+[\s]?\d+[\s]?\d+[\s]?\d+$/,
              message: 'Incorrect format',
            },
            {
              min: 10,
            },
            {
              max: 18,
            },
          ]}
          hasFeedback
          label="Phone"
          name="phone"
        >
          <Input placeholder="+xxx xx xxxxxxx" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter your user age',
            },
            {
              pattern: /^\d+$/,
              message: 'Incorrect format',
            },
            {
              max: 3,
            },
          ]}
          hasFeedback
          label="Age"
          name="age"
        >
          <Input placeholder="Age" required />
        </Form.Item>

        <Form.Item hasFeedback label="Gender" name="gender">
          <Select placeholder="Select User gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter Username',
            },
            {
              whitespace: true,
            },
            {
              min: 4,
            },
            {
              max: 16,
            },
          ]}
          hasFeedback
          label="Username"
          name="username"
        >
          <Input placeholder="Username" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter User Password',
            },
            {
              whitespace: true,
            },
            {
              min: 4,
            },
            {
              max: 16,
            },
          ]}
          hasFeedback
          label="Password"
          name="password"
        >
          <Input.Password placeholder="Password" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              pattern: /^(([0-9.]?)*)+$/,
              message: 'Incorrect format',
            },
            {
              min: 4,
            },
            {
              max: 16,
            },
          ]}
          label="ip"
          name="ip"
        >
          <Input placeholder="xxx.xxx.xxx.xxx" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              pattern: /^(\d{4})[/ .-]?(\d{2})[/ .-]?(\d{2})$/,
              message: 'Incorrect format',
            },
          ]}
          label="Birth Date"
          name="birthDate"
        >
          <Input placeholder="yyyy/mm/dd" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              whitespace: true,
            },
          ]}
          label="Image URL"
          name="image"
        >
          <Input placeholder="Image URL" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            {action === 'edit' ? 'Apply Changes' : 'Create User'}
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default EditUsersForm;
