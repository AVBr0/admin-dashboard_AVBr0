import styled from 'styled-components';

type OrdersWrapperProps = {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  fontSize?: string;
};

const OrdersWrapper = styled.div<OrdersWrapperProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '30%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  font-size: ${({ fontSize }) => fontSize || '50px'};
`;

export default OrdersWrapper;
