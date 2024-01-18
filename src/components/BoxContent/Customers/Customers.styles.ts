import styled from 'styled-components';

type CustomersWrapperProps = {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  fontSize?: string;
  gap?: string;
};

const CustomersWrapper = styled.div<CustomersWrapperProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '30%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  font-size: ${({ fontSize }) => fontSize || '50px'};
  gap: ${({ gap }) => gap || '5px'};
`;

export default CustomersWrapper;
