import { globalHorizontalPadding, globalMaxWidth } from 'GlobalStyle';
import styled from 'styled-components';

export const App = styled.div`
  main {
    min-height: 100vh;
    max-width: ${globalMaxWidth};
    margin: 0 auto;
    padding: 0 ${globalHorizontalPadding.web} ${globalHorizontalPadding.web};
  }
`;
