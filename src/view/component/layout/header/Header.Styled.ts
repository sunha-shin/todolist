import { colors, getResponsiveMediaQuery, globalHorizontalPadding, globalMaxWidth } from 'GlobalStyle';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${colors.purple};
  /* padding: 0 300px; */

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;

    max-width: ${globalMaxWidth};
    margin: 0 auto;
    padding: 0 ${globalHorizontalPadding.web};
  }

  .title {
    color: ${colors.white};
    font-size: 36px;
    font-family: PoppinsBold;

    ${getResponsiveMediaQuery('sm')} {
      font-size: 20px;
      color: red;
      /* border: 1px solid black; */
    }

    ${getResponsiveMediaQuery('md')} {
      font-size: 20px;
      color: blue;
      /* border: 1px solid black; */
    }
  }
`;
