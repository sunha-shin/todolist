import { colors, getResponsiveMediaQuery } from 'GlobalStyle';
import { getColor } from 'service/util/getColor';
import styled from 'styled-components';

interface TaskCardStyle {
  priority: string;
}

export const ShowTodo = styled.section<TaskCardStyle>`
  background-color: white;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 22px 30px;
  column-gap: 50px;
  min-height: 56px;

  ${getResponsiveMediaQuery('sm')} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
  }

  .task-wrapper {
    width: 100%;
  }

  .task-top-text {
    color: #91929e;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
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
    min-width: 100px;
    text-align: center;

    ${getResponsiveMediaQuery('sm')} {
      text-align: left;
    }

    .task-text {
      color: ${(props) => getColor(props.priority)};
      font-weight: 700;
      text-transform: capitalize;
    }
  }

  .task-status-wrapper {
    min-width: 100px;
    display: flex;
    justify-content: center;
    text-align: center;

    ${getResponsiveMediaQuery('sm')} {
      justify-content: flex-start;
    }
  }

  .task-status-btn {
    color: ${colors.gray};
    background-color: ${colors.lightGray};
    border-radius: 8px;

    font-size: 12px;
    font-weight: 700;
    outline: none;
    padding: 7px 14px;
    cursor: pointer;
  }

  .progress-bar-wrapper {
    min-width: 75px;
    text-align: center;
  }

  .buttons-wrapper {
    min-width: 75px;
    display: flex;
    justify-content: space-between;

    .update-btn {
      cursor: pointer;
    }

    .delete-btn {
      cursor: pointer;
    }
  }
`;
