import styled from 'styled-components';

type DetailsWrapperProps = {
  width?: string;
  width_xl?: string;
  width_lg?: string;
  width_md?: string;
  height?: string;
  height_xl?: string;
  height_lg?: string;
  height_md?: string;
  gap?: string;
  color?: string;
};

const DetailsWrapper = styled.div<DetailsWrapperProps>`
  display: grid;
  width: ${({ width }) => width || '70%'};
  height: ${({ height }) => height || '60%'};
  gap: ${({ gap }) => gap || '20px'};
  color: ${({ color, theme }) => color || theme.colors.font};
  margin-left: 50px;
  padding-right: 10px;
  padding-bottom: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);

  @media screen and ${({ theme }) => theme.media.XL} {
    grid-template-columns: repeat(3, 1fr);
    width: ${({ width_xl }) => width_xl || '65%'};
    height: ${({ height_xl }) => height_xl || '65%'};
  }

  @media screen and ${({ theme }) => theme.media.LG} {
    grid-template-columns: repeat(2, 1fr);
    width: ${({ width_lg }) => width_lg || '75%'};
    height: ${({ height_lg }) => height_lg || '75%'};
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(120px, auto);
    max-width: 476px;
    width: ${({ width_md }) => width_md || '100%'};
    height: ${({ height_md }) => height_md || '100%'};
  }
`;

type BoxProps = {
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

export const Box = styled.div<BoxProps>`
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

export const Box2 = styled(Box)`
  grid-column: 2 span;
  grid-row: 2;

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const Box3 = styled(Box)`
  min-width: 200px;
`;

export const Box4 = styled(Box)`
  grid-column: span 1;
  grid-row: span 2;

  @media screen and ${({ theme }) => theme.media.LG} {
    grid-column: span 2;
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    grid-column: span 1;
  }
`;

export const Box5 = styled(Box2)`
  @media screen and ${({ theme }) => theme.media.MD} {
    grid-row: 1;
  }
`;

type BtnContainerProps = {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
};

export const BtnContainer = styled.div<BtnContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: ${({ width }) => width || '40px'};
  height: ${({ height }) => height || '40px'};
  position: fixed;
  left: 13.5%;

  @media screen and ${({ theme }) => theme.media.LG} {
    left: 5.5%;
  }
  @media screen and ${({ theme }) => theme.media.XS} {
    left: 7.5%;
  }
`;

type ImageWrapperProps = {
  width?: string;
  height?: string;
  objectFit?: string;
  borderRadius?: string;
};

export const ImageWrapper = styled.img<ImageWrapperProps>`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '80%'};
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
`;

type UlWrapperProps = {
  width?: string;
  width_lg?: string;
  width_md?: string;
  width_xs?: string;
};

export const UlWrapper = styled.ul<UlWrapperProps>`
  width: ${({ width }) => width};

  @media screen and ${({ theme }) => theme.media.LG} {
    width: ${({ width_lg }) => width_lg || '50%'};
    column-count: 2;
  }

  @media screen and ${({ theme }) => theme.media.MD} {
    width: ${({ width_md }) => width_md || '80%'};
  }

  @media screen and ${({ theme }) => theme.media.XS} {
    width: ${({ width_xs }) => width_xs || '100%'};
  }
`;

export const LiWrapper = styled.li`
  margin-bottom: 5px;
  list-style-type: none;
`;

export default DetailsWrapper;
