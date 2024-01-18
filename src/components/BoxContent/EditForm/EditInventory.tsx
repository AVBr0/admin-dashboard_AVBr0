import React from 'react';
import { Button, Form, Input } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import FormWrapper from './EditForm.styles';
import { createProduct, updateProduct } from '../../../Data/Api';

type ProductsFormType = {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: string | null;
  rating: string | null;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string | null;
  images: string | null;
};

const EditInventoryForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lastProductID, selectedProductData, action } = location.state;
  const currentID = (lastProductID + 1) as number;

  // console.log(lastProductID, action, selectedProductData);

  const editInventory = (e: ProductsFormType) => {
    const newProduct = {
      ...e,
      id: action === 'create' ? currentID.toString() : selectedProductData.id,
      price: +e.price,
      discountPercentage: e.discountPercentage ? +e.discountPercentage : 0,
      rating: e.rating ? +e.rating : 0,
      stock: +e.stock,
      images: [e.images],
    };

    if (action === 'create') {
      createProduct(newProduct);
      navigate('/admin-dashboard-react/inventory');
    }

    if (action === 'edit') {
      // console.log(newProduct);
      updateProduct(newProduct);
      navigate('/admin-dashboard-react/inventory');
    }
  };

  return (
    <FormWrapper>
      PRODUCT FORM
      <Form
        initialValues={{
          id: action === 'create' ? currentID : selectedProductData.id,
          title: action === 'edit' ? selectedProductData.title : null,
          description:
            action === 'edit' ? selectedProductData.description : null,
          price:
            action === 'edit' ? selectedProductData.price.toString() : null,
          discountPercentage:
            action === 'edit'
              ? selectedProductData.discountPercentage.toString()
              : null,
          rating:
            action === 'edit' ? selectedProductData.rating.toString() : null,
          stock:
            action === 'edit' ? selectedProductData.stock.toString() : null,
          brand: action === 'edit' ? selectedProductData.brand : null,
          category: action === 'edit' ? selectedProductData.category : null,
          thumbnail: action === 'edit' ? selectedProductData.thumbnail : null,
          images: action === 'edit' ? selectedProductData.images[0] : null,
        }}
        labelCol={{ span: 8 }}
        style={{ width: '310px' }}
        onFinish={editInventory}
      >
        <Form.Item label="id" name="id">
          <Input readOnly />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter Product Title',
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
          label="Title"
          name="title"
          hasFeedback
        >
          <Input placeholder="Title" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter the price of the Product',
            },
            {
              pattern: /^\d+$/,
              message: 'Incorrect format',
            },
            {
              max: 18,
            },
          ]}
          label="Price"
          name="price"
          hasFeedback
        >
          <Input placeholder="Price" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              //   required: true,
              message: 'Please enter Discount Percentage of your Product',
            },
            {
              pattern: /^\d\d?(?:[.]\d+)?$/,
              message: 'Incorrect format',
            },
            {
              max: 5,
            },
          ]}
          hasFeedback
          label="Discount, %"
          name="discountPercentage"
        >
          <Input placeholder="Discount Percentage" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              message: 'Please enter a Rating for the Product',
            },
            {
              pattern: /^\d(?:[.]\d+)?$/,
              message: 'Incorrect format',
            },
            {
              max: 4,
            },
          ]}
          hasFeedback
          label="Rating"
          name="rating"
        >
          <Input placeholder="x.xx" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter the quantity in stock',
            },
            {
              pattern: /^\d+$/,
              message: 'Incorrect format',
            },
            {
              max: 6,
            },
          ]}
          hasFeedback
          label="Stock"
          name="stock"
        >
          <Input placeholder="Stock" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter the Brand of your Product',
            },
            {
              whitespace: true,
            },
            {
              min: 1,
            },
            {
              max: 30,
            },
          ]}
          hasFeedback
          label="Brand"
          name="brand"
        >
          <Input placeholder="Brand" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter the Category of your Product',
            },
            {
              whitespace: true,
            },
            {
              min: 1,
            },
            {
              max: 16,
            },
          ]}
          hasFeedback
          label="Category"
          name="category"
        >
          <Input placeholder="Category" required />
        </Form.Item>

        <Form.Item
          rules={[
            {
              whitespace: true,
            },
          ]}
          label="thumbnail URL"
          name="thumbnail"
        >
          <Input placeholder="thumbnail URL" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              whitespace: true,
            },
          ]}
          label="Image URL"
          name="images"
        >
          <Input placeholder="Image URL" />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please enter a Product Description',
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
            {
              max: 255,
            },
          ]}
          label="Description"
          name="description"
          hasFeedback
        >
          <Input.TextArea placeholder="Description Area" required />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            {action === 'edit' ? 'Apply Changes' : 'Create Product'}
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default EditInventoryForm;
