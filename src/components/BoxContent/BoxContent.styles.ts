import styled from 'styled-components';

type BoxContentWrapperProps = {
  paddingLeft?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
};

const BoxContentWrapper = styled.div<BoxContentWrapperProps>`
  display: flex;
  padding-left: ${({ paddingLeft }) => paddingLeft || '5px'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.bg};
  color: ${({ color, theme }) => color || theme.colors.font};
`;

export default BoxContentWrapper;
