import { globalHorizontalPadding, globalMaxWidth, getResponsiveMediaQuery } from 'GlobalStyle';
import styled from 'styled-components';

export const App = styled.div`
  main {
    min-height: 100vh;
    max-width: ${globalMaxWidth};
    margin: 0 auto;
    padding: 0 ${globalHorizontalPadding.web};

    ${getResponsiveMediaQuery('sm')} {
      padding: 0 ${globalHorizontalPadding.mobile};
    }
  }
`;
