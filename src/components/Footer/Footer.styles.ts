import styled from 'styled-components';

type FooterStyleProps = {
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  backgroundColor?: string;
};

const FooterWrapper = styled.div<FooterStyleProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-evenly'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  height: ${({ height }) => height || '50px'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.bg};
`;

export default FooterWrapper;
