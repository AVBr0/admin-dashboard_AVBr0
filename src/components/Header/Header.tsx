import { BellFilled, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Badge, Image, Space } from 'antd';
import HeaderWrapper from './Header.styles';
import baseTheme from '../../theme';

const Header = () => {
  const IconStyle = { fontSize: 24, color: baseTheme.colors.font };

  return (
    <HeaderWrapper>
      <Image
        width={40}
        src="https://avatars.githubusercontent.com/u/96024193?s=400&u=9f23cff6f434378758082af065cced82730b5554&v=4"
      />

      <Space>
        <Badge count={10} dot>
          <MailOutlined style={IconStyle} />
        </Badge>
        <Badge count={15} dot>
          <BellFilled style={IconStyle} />
        </Badge>
        <Badge>
          <SettingOutlined style={IconStyle} />
        </Badge>
      </Space>
    </HeaderWrapper>
  );
};

export default Header;
