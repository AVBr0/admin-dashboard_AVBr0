import styled from 'styled-components';

type FormWrapperProps = {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  padding?: string;
  padding_xs?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
};

const FormWrapper = styled.div<FormWrapperProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  gap: ${({ gap }) => gap || '20px'};
  padding: ${({ padding }) => padding || '20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border: ${({ border }) => border || '1px solid #384256'};
  width: ${({ width }) => width || '100%'};

  @media screen and ${({ theme }) => theme.media.XS} {
    padding: ${({ padding_xs }) => padding_xs || '10px'};
  }
`;

export default FormWrapper;
