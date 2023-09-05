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
    box-shadow: 0 6px 58px rgba(196, 203, 214, 0.104);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 22px 30px;

    .task-wrapper {
      width: 35%;
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
      width: 20%;
      text-align: center;
      /* width: 50px;
      min-width: 50px; */
    }

    .task-status-wrapper {
      width: 20%;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .progress-bar-wrapper {
      width: 10%;
      text-align: center;
    }

    .buttons-wrapper {
      width: 15%;
      display: flex;
      justify-content: end;

      .update-btn {
        margin-right: 20px;
        cursor: pointer;
      }

      .delete-btn {
        cursor: pointer;
      }
    }
  }
`;
