import styled from 'styled-components';

type DashboardCardsWrapperSdProps = {
  width?: string;
  height?: string;
  gap?: string;
  padding?: string;
};

const DashboardCardsWrapperSd = styled.div<DashboardCardsWrapperSdProps>`
  display: grid;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '99%'};
  gap: ${({ gap }) => gap || '20px'};
  padding: ${({ padding }) => padding || '5px'};
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);

  @media screen and ${({ theme }) => theme.media.XXL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${({ theme }) => theme.media.LG} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

type BoxProps = {
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
};

export const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  padding: ${({ padding }) => padding || '20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border: ${({ border }) => border || '3px solid #384256'};
  width: ${({ width }) => width || '100%'};
`;

type Box1Props = {
  gridColumn?: string;
  gridRow?: string;
  flexDirection?: string;
};

export const Box1 = styled(Box)<Box1Props>`
  grid-column: ${({ gridColumn }) => gridColumn || 'span 1'};
  grid-row: ${({ gridRow }) => gridRow || 'span 3'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

export const Box235 = styled(Box)`
  justify-content: space-between;

  @media ${({ theme }) => theme.media.MD} {
    justify-content: space-around;
  }
`;

type Box4Props = {
  color?: string;
  flexDirection?: string;
  gap?: string;
  gridColumn?: string;
  gridRow?: string;
};

export const Box4 = styled(Box)<Box4Props>`
  color: ${({ color, theme }) => color || theme.colors.font};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  gap: ${({ gap }) => gap || '10px'};
  grid-column: ${({ gridColumn }) => gridColumn || 'span 1'};
  grid-row: ${({ gridRow }) => gridRow || 'span 3'};
`;

export const Box7 = styled(Box)`
  grid-column: span 2;
  grid-row: span 2;

  @media screen and ${({ theme }) => theme.media.MD} {
    display: none;
  }
`;

export default DashboardCardsWrapperSd;
