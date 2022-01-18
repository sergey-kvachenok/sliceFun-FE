import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors } from './theme';

const GlobalStyle = createGlobalStyle`
body {
color: ${colors.darkBlue1};
max-width: 1200px;
margin: 0 auto;
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

    @media (max-width: ${breakpoints.xs}) {
        padding: 15px 5px;
    }
  }

  .pointer {
      cursor: pointer;
  }

  .display-flex {
    display: flex;
  }

  .header-poster {
    height: 120px;
    width: 120px;
    margin-right: 15px;

    img {
      height: inherit;
      width: inherit;
      object-fit: cover;
    }
  }

  .margin-top {
    margin-top: 20px;
  }
`;

export default GlobalStyle;
