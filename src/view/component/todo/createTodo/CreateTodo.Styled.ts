import styled from 'styled-components';
import { colors, getResponsiveMediaQuery } from 'GlobalStyle';

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
export const CreateTodo = styled.div``;
=======
>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8
export const CreateTodo = styled.div`
  ${getResponsiveMediaQuery('sm')} {
  }

  .addTaskBtn {
    border-radius: 14px;
    box-shadow: 0 6px 12px rgba(113, 63, 255, 0.25);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    padding: 13px 30px;
<<<<<<< HEAD
    border: none;
=======
    border: 2px solid ${colors.white};
>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8
    transition: all 0.3s;
    min-height: 50px;
    background-color: ${colors.purple};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.lightGray};
      color: ${colors.purple};
    }
  }

  &.label {
    border: 10px solid red;
  }
`;
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> ecd15f73f7f1d3decbbe76220fb813ed9c50f1f8
