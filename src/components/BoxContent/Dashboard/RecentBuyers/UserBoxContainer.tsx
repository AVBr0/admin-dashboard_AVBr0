import { NavigateFunction } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { SnippetsOutlined } from '@ant-design/icons';
import UserBox from './UserBoxContainer.styles';
import { UserType } from '../../../../Types/Types';

type UserBoxContainerProps = {
  user: UserType;
  nav: NavigateFunction;
  textColor: string;
};

const UserBoxContainer = ({ user, nav, textColor }: UserBoxContainerProps) => {
  return (
    <UserBox>
      <Typography.Text style={{ color: textColor }}>
        <img width={30} src={user.image} alt={user.image} />
      </Typography.Text>
      <Typography.Text style={{ color: textColor }}>
        {user.firstName} {user.lastName}
      </Typography.Text>

      <Button
        type="link"
        onClick={() => nav('/admin-dashboard-react/user', { state: user })}
      >
        <SnippetsOutlined />
      </Button>
    </UserBox>
  );
};

export default UserBoxContainer;
