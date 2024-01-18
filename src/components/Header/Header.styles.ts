import styled from 'styled-components';

type HeaderWrapperProps = {
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  height?: string;
  backgroundColor?: string;
};

const HeaderWrapper = styled.div<HeaderWrapperProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  padding: ${({ padding }) => padding || '5px 20px 4px 12px'};
  height: ${({ height }) => height || '50px'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.bg};
`;

export default HeaderWrapper;
