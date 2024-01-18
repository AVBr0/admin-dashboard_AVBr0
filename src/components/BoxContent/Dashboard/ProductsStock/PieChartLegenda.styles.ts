import styled from 'styled-components';

type LegendaWrapperProps = {
  justifyContent?: string;
  gap?: string;
};

export const LegendaWrapper = styled.div<LegendaWrapperProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-around'};
  gap: ${({ gap }) => gap || '20px'};
`;

type LegendaBoxProps = {
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
};

export const LegendaBox = styled.div<LegendaBoxProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-around'};
  gap: ${({ gap }) => gap || '5px'};
`;

type ColoredBoxProps = {
  width?: string;
  height?: string;
};

const ColoredBox = styled.div<ColoredBoxProps>`
  width: ${({ width }) => width || '10px'};
  height: ${({ height }) => height || '10px'};
`;

export default ColoredBox;
