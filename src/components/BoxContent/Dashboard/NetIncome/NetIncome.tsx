import { Typography } from 'antd';
import React from 'react';
import baseTheme from '../../../../theme';

type NetIncomeProps = {
  val: number | string;
  k: number;
};

const NetIncome = ({ val, k }: NetIncomeProps) => {
  const TitleStyle = {
    color: baseTheme.colors.font,
  };

  return (
    <div>
      <Typography.Title style={TitleStyle} level={3}>
        Net Income:
      </Typography.Title>
      <Typography.Title style={TitleStyle} level={3}>
        {typeof val === 'number' ? Math.round(val * k) : val} $
      </Typography.Title>
    </div>
  );
};

export default NetIncome;
