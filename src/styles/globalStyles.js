import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors } from './theme';

const GlobalStyle = createGlobalStyle`
body {
color: ${colors.darkBlue1};
}
  .xs-hidden {
    @media (max-width: ${breakpoints.xs}) {
        display: none;
    }
  }

  .primary-text {
    font-family: Montserrat-Bold;
    font-size: 16px;
    margin: 10px 0;
  }

  .secondary-text {
    font-size: 12px;
  }

  .secondary-text-bold {
     font-family: Montserrat-Bold;
    font-size: 12px;
  }

  .container-padding {
    padding: 15px;
  }

  .pointer {
      cursor: pointer;
  }

  .display-flex {
    display: flex;
  }
`;

export default GlobalStyle;
