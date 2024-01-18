import styled from 'styled-components';

type SideBarSDProps = {
  min_width?: string;
  min_width_media?: string;
  height?: string;
  backgroundColor?: string;
  width?: string;
  width_media?: string;
};

const SideBarSD = styled.div<SideBarSDProps>`
  display: flex;
  min-width: ${({ min_width }) => min_width || '55px'};
  width: ${({ width }) => width || '15%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.bg};

  @media ${({ theme }) => theme.media.LG} {
    width: ${({ width_media }) => width_media || '5%'};
    min-width: ${({ min_width_media }) => min_width_media || '28px'};
  }
`;

export default SideBarSD;
