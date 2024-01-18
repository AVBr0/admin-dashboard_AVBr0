import styled from 'styled-components';

type CardSDProps = {
  fontSize?: string;
  color?: string;
};

const CardSD = styled.div<CardSDProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '24px')};
  color: ${({ color, theme }) => color || theme.colors.font};
`;

export default CardSD;
