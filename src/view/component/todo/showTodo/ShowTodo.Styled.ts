import { colors } from 'GlobalStyle';
import styled from 'styled-components';

interface ShowTodoStyle {
  background: string;
}

export const ShowTodo = styled.div<ShowTodoStyle>`
  .task-card {
    background-color: white;
    /* background: ${(props) => props.background}; */
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 22px 30px;
    column-gap: 50px;
    .task-wrapper {
      /* border: 2px solid red; */
      /* width: 35%; */
      /* min-width: ; */
      width: 100%;
      /* width: 200px; */
      /* min-width: 200px; */
      /* max-width: 200px; */
    }

    .task-top-text {
      color: #91929e;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 7px;
      /* width: 100px; */
      text-overflow: ellipsis;
    }

    .task-text {
      color: ${colors.black};
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .priority-wrapper {
      /* border: 2px solid red; */
      /* max-width: 100px; */
      /* width: 20%; */
      min-width: 100px;
      text-align: center;
      /* width: 50px;
      min-width: 50px; */
    }

    .task-status-wrapper {
      /* border: 2px solid red; */
      /* width: 20%; */
      min-width: 100px;
      display: flex;
      justify-content: center;
      text-align: center;
    }

    .task-status-btn {
      color: ${colors.gray};
      background-color: ${colors.lightGray};
      background: hsla(217, 9%, 53%, 0.14);
      border-radius: 8px;

      font-size: 12px;
      font-weight: 700;
      outline: none;
      padding: 7px 14px;
      cursor: pointer;
    }

    .progress-bar-wrapper {
      /* border: 2px solid red; */
      /* width: 10%; */
      min-width: 75px;
      text-align: center;
    }

    .buttons-wrapper {
      /* border: 2px solid red; */
      /* width: 15%; */

      min-width: 75px;
      display: flex;
      justify-content: space-between;
      /* justify-content: end; */

      .update-btn {
        cursor: pointer;
      }

      .delete-btn {
        cursor: pointer;
      }
    }
  }
`;
