import styled from 'styled-components';

type UserBoxWrapperProps = {
  flexDirection?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  height?: string;
};

export const UserBoxWrapper = styled.div<UserBoxWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  padding: ${({ padding }) => padding || '5px'};
`;

type UserBoxProps = {
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
};

const UserBox = styled.div<UserBoxProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  gap: ${({ gap }) => gap || '20px'};
`;

export default UserBox;
