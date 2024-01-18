import { LeftOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import DetailsWrapper, {
  Box,
  Box4,
  Box5,
  BtnContainer,
  ImageWrapper,
  LiWrapper,
  UlWrapper,
} from './Details.styles';
import { UserType } from '../../../Types/Types';
import baseTheme from '../../../theme';

const SingleUser = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state as UserType;

  const { image, firstName, lastName, email, phone, age, gender, ...restInfo } =
    user;
  const img = image || baseTheme.defaultImages.user;

  const restInfoArr = Object.entries(restInfo);

  return (
    <DetailsWrapper width="60%">
      <BtnContainer>
        <Button type="link" onClick={() => navigate(-1)}>
          <LeftOutlined style={{ fontSize: 25 }} />
        </Button>
      </BtnContainer>
      <Box>
        <ImageWrapper width="100%" src={img} alt={img} />
      </Box>
      <Box5>
        <h4>Main Info:</h4>

        <Typography.Text style={{ fontSize: 15, color: baseTheme.colors.font }}>
          {firstName} {lastName}
        </Typography.Text>
        <Typography.Text style={{ fontSize: 15, color: baseTheme.colors.font }}>
          Age: {age}, {gender}
        </Typography.Text>
      </Box5>
      <Box>
        <h4>Contact Info:</h4>
        <Typography.Text style={{ fontSize: 12, color: baseTheme.colors.font }}>
          Email: {email}
        </Typography.Text>
        <Typography.Text style={{ fontSize: 12, color: baseTheme.colors.font }}>
          Phone: {phone}
        </Typography.Text>
      </Box>
      <Box4>
        <h4>Details:</h4>
        <UlWrapper>
          {restInfoArr.map((e) => (
            <LiWrapper
              style={{ fontSize: 10 }}
              key={e[0]}
            >{`${e[0]}: ${e[1]}`}</LiWrapper>
          ))}
        </UlWrapper>
      </Box4>
    </DetailsWrapper>
  );
});

export default SingleUser;
