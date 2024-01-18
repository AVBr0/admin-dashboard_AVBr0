import { LeftOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailsWrapper, {
  Box,
  Box2,
  Box3,
  Box4,
  BtnContainer,
  ImageWrapper,
  LiWrapper,
  UlWrapper,
} from './Details.styles';
import ProductsType from '../../../Types/Types';
import baseTheme from '../../../theme';

const SingleProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state;

  const { images, description, title, thumbnail, ...restInfo } =
    product as ProductsType;
  const img = images[0] || baseTheme.defaultImages.product;
  const restInfoArr = Object.entries(restInfo);
  // console.log(product);

  return (
    <DetailsWrapper>
      <BtnContainer>
        <Button type="link" onClick={() => navigate(-1)}>
          <LeftOutlined style={{ fontSize: 25 }} />
        </Button>
      </BtnContainer>
      <Box>
        <ImageWrapper src={img} alt={img} />
      </Box>
      <Box2>
        <h4>Description:</h4>
        <Typography.Text style={{ fontSize: 14, color: baseTheme.colors.font }}>
          {description}
        </Typography.Text>
      </Box2>
      <Box3>
        <h4>Title of product:</h4>
        <Typography.Text style={{ fontSize: 16, color: baseTheme.colors.font }}>
          {title}
        </Typography.Text>
      </Box3>
      <Box4>
        <h4>Details:</h4>
        <UlWrapper>
          {restInfoArr.map((e) => (
            <LiWrapper
              style={{ fontSize: 14 }}
              key={e[0]}
            >{`${e[0]}: ${e[1]}`}</LiWrapper>
          ))}
        </UlWrapper>
      </Box4>
    </DetailsWrapper>
  );
};

export default SingleProduct;
