import { createGlobalStyle } from 'styled-components';

type ColorsType = {
  [key: string]: string;
};

export const colors: ColorsType = {
  high: '#f73446',
  medium: '#ffbd21',
  low: '#0ac947',
  primary: '#713fff',
  black: '#0a1629',
  gray: '#91929e',
  darkGray: '#7d8592',
  lightGray: '#F0F2F5',
  white: '#ffffff',
  purple: '#713fff',
};

export const globalMaxWidth = '1024px';
export const globalHorizontalPadding = {
  web: '60px',
  mobile: '20px',
};

export const responsiveSize = {
  sm: '480px',
  md: '996px',
};

export const getResponsiveMediaQuery = (size: string) => {
  switch (size) {
    case 'sm':
      // 0 - 480px
      return `@media screen and (max-width: ${responsiveSize.sm})`;
    case 'md':
      // 481px - 996px
      return `@media screen and (min-width: ${responsiveSize.sm}) and (max-width: ${responsiveSize.md})`;
    case 'lg':
      // 997px -
      return `@media screen and (min-width: ${responsiveSize.md})`;
    default:
      return '';
  }
};

const GlobalStyle = createGlobalStyle`
<<<<<<< Updated upstream
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.lightGray};
    color: ${colors.black};
  } 

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  :root {
    font-size: 16px;
    /* --var-background-black:#000; */
  }
=======
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${colors.lightGray};
  color: ${colors.black};
  font-family: 'Poppins', sans-serif;
} 

a {
  text-decoration: none;
  color: ${colors.black};
}

:root {
  font-size: 16px;  
}

::-webkit-scrollbar {
display: none;
}
>>>>>>> Stashed changes
`;

export default GlobalStyle;
