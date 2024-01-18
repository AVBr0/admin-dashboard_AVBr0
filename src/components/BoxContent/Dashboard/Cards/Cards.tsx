import { Space, Statistic } from 'antd';
import { observer } from 'mobx-react-lite';
import CardSD from './Cards.styles';
import baseTheme from '../../../../theme';

type DashboardCardProps = {
  icon: React.ReactNode;
  title: string;
  value: number | string;
};

const DashboardCard = observer(({ icon, title, value }: DashboardCardProps) => {
  return (
    <CardSD>
      <Space direction="vertical">
        {icon}
        <h3 color={baseTheme.colors.font}>{title}</h3>
        <Statistic
          valueStyle={{ color: baseTheme.colors.font }}
          value={value}
        />
      </Space>
    </CardSD>
  );
});

export default DashboardCard;
