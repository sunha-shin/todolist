import { colors, getResponsiveMediaQuery, globalMaxWidth } from 'GlobalStyle';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${colors.purple};

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: ${globalMaxWidth};
    margin: 0 auto;
  }

  .title {
    color: #0a1629;
    font-size: 36px;
    font-weight: 700;

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

  .task-card {
    // background: #fff;
    border-radius: 24px;
    box-shadow: 0 6px 58px rgba(196, 203, 214, 0.104);
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding: 22px 30px;
    background-color: var(--var-background-black);
  }

  .task-text {
    color: #91929e;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }

  .inputLabel {
    color: #7d8592;
    font-size: 14px;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .addTaskBtn {
    background: #713fff;
    border: none;
    border-radius: 14px;
    box-shadow: 0 6px 12px rgba(113, 63, 255, 0.25);
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    padding: 13px 30px;
  }
`;
