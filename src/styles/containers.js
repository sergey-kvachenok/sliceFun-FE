import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/theme';

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
