/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from 'styled-components';
import PoppinsBold from 'asset/font/Poppins-Bold.ttf';
import PoppinsRegular from 'asset/font/Poppins-Regular.ttf';

type ColorsType = {
  [key: string]: any;
};

export const colors: ColorsType = {
  priority: {
    high: '#f73446',
    medium: '#ffbd21',
    low: '#0ac947',
  },
  red: '#f73446',
  yellow: '#ffbd21',
  green: '#0ac947',
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
  sm: '850px',
};

export const getResponsiveMediaQuery = (size: string) => {
  switch (size) {
    case 'sm':
      // 0 - 850px
      return `@media screen and (max-width: ${responsiveSize.sm})`;

    // case 'md':
    //   // 481px - 996px
    //   return `@media screen and (min-width: ${responsiveSize.sm}) and (max-width: ${responsiveSize.md})`;
    // case 'lg':
    //   // 997px -
    //   return `@media screen and (min-width: ${responsiveSize.md})`;
    default:
      return '';
  }
};

const GlobalStyle = createGlobalStyle`
<<<<<<< HEAD
@font-face {
  font-family: PoppinsBold;
  src: url(${PoppinsBold}) format('truetype');
}
@font-face {
  font-family: PoppinsRegular;
  src: url(${PoppinsRegular}) format('truetype');
}
=======
<<<<<<< Updated upstream
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.lightGray};
    color: ${colors.black};
  } 
>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${colors.lightGray};
  color: ${colors.black};
  font-family: PoppinsRegular;
} 

<<<<<<< HEAD
=======
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

>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8
a {
  text-decoration: none;
  color: ${colors.black};
}

:root {
<<<<<<< HEAD
  font-size: 16px;
  /* --var-background-black:#000; */
=======
  font-size: 16px;  
>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8
}

::-webkit-scrollbar {
display: none;
}
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8
`;

export default GlobalStyle;
