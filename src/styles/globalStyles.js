import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './theme';

const GlobalStyle = createGlobalStyle`
  .xs-hidden {
    @media (max-width: ${breakpoints.xs}) {
        display: none;
    }
  }
`;

export default GlobalStyle;
