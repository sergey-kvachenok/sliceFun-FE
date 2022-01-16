import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './theme';

const GlobalStyle = createGlobalStyle`
  .xs-hidden {
    @media (max-width: ${breakpoints.xs}) {
        display: none;
    }
  }

  .primary-text {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }

  .secondary-text {
    font-size: 12px;
  }

  .secondary-text-bold {
    font-size: 12px;
     font-weight: bold;
  }

  .container-padding {
    padding: 15px;
  }

  .pointer {
      cursor: pointer;
  }
`;

export default GlobalStyle;
