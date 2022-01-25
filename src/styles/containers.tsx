import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from './theme';
import { ImageProps } from './types';

export const ListWrapper = styled.div`
  padding: 20px 16px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;

  &:active,
  &:focus {
    color: ${colors.pink};

    svg {
      fill: ${colors.pink};
    }
  }

  @media (hover: hover) {
    &:hover {
      color: ${colors.pink};

      svg {
        fill: ${colors.pink};
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  height: ${({ height = 70 }: ImageProps) => `${height}px`};
  width: ${({ width = 70 }) => `${width}px`};
  margin-right: 15px;

  img {
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`;
