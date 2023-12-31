import { colors, getResponsiveMediaQuery, globalHorizontalPadding, globalMaxWidth } from 'GlobalStyle';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${colors.purple};

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: ${globalMaxWidth};
    margin: 0 auto;
    padding: 0 ${globalHorizontalPadding.web};
    min-height: 115px;

    ${getResponsiveMediaQuery('sm')} {
      padding: 0 ${globalHorizontalPadding.mobile};
    }
  }

  .title {
    color: ${colors.white};
    font-size: 36px;
    font-weight: 700;
    ${getResponsiveMediaQuery('sm')} {
      font-size: 24px;
    }
  }
`;
