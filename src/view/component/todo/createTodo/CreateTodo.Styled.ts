import styled from 'styled-components';

export const CreateTodo = styled.div`
  .addTaskBtn {
    border-radius: 14px;
    box-shadow: 0 6px 12px rgba(113, 63, 255, 0.25);
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    padding: 13px 30px;
    border: none;
    transition: all 0.3s;

    &:hover {
      background-color: red;
      color: white;
    }
  }

  &.label {
    border: 10px solid red;
  }
`;
