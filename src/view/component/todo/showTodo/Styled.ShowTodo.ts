import styled from 'styled-components';
interface ShowTodoStyle {
  background: string;
}
export const ShowTodo = styled.div<ShowTodoStyle>`
  .task-card {
    // background: #fff;
    background: ${(props) => props.background}
    border-radius: 24px;
    box-shadow: 0 6px 58px rgba(196, 203, 214, 0.104);
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding: 22px 30px;
  }

  .task-text {
    color: #91929e;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }
`;
