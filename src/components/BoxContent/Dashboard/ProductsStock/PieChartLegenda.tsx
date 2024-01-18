import { Typography } from 'antd';
import ColoredBox, {
  LegendaBox,
  LegendaWrapper,
} from './PieChartLegenda.styles';
import baseTheme from '../../../../theme';

type PieChartLegendaType = {
  textColor: string;
};

const PieChartLegenda = ({ textColor }: PieChartLegendaType) => {
  return (
    <LegendaWrapper>
      <LegendaBox>
        <ColoredBox
          style={{ backgroundColor: baseTheme.colors.innerPieLegenda }}
        />
        <Typography.Text style={{ color: textColor }}>
          Category Stock
        </Typography.Text>
      </LegendaBox>
      <LegendaBox>
        <ColoredBox
          style={{ backgroundColor: baseTheme.colors.outerPieLegenda }}
        />
        <Typography.Text style={{ color: textColor }}>
          Product Stock
        </Typography.Text>
      </LegendaBox>
    </LegendaWrapper>
  );
};

export default PieChartLegenda;
