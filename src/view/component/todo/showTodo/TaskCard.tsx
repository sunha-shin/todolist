import { EditIcon, TrashCanIcon } from 'resource/icons';
import CircularProgress from '@mui/material/CircularProgress';
import { Todo } from 'service/model/Todo';
import * as Styled from './TaskCard.Styled';
import { getIsCompleted } from 'service/util/getIsCompleted';

interface ITaskCardProps {
  todo: Todo;
  updateProcess: (todo: Todo) => void;
  handleUpdateOpen: (todo: Todo) => void;
  clickDelete: (id: string) => void;
}

const TaskCard = ({ todo, updateProcess, handleUpdateOpen, clickDelete }: ITaskCardProps) => {
  return (
    <Styled.ShowTodo priority={todo.priority}>
      <div className="task-wrapper">
        <div className="task-top-text">Task</div>
        <div className="task-text">{todo.title}</div>
      </div>
      <div className="priority-wrapper">
        <div className="task-top-text">Priority</div>
        <div className="task-text">{todo.priority}</div>
      </div>
      <div className="task-status-wrapper">
        <div className="task-status-btn" onClick={() => updateProcess(todo)}>
          {todo.isCompleted}
        </div>
      </div>
      <div className="progress-bar-wrapper">
        <CircularProgress
          color={'primary'}
          variant="determinate"
          value={getIsCompleted(todo.isCompleted)}
          size={'24px'}
        />
      </div>
      <div className="buttons-wrapper">
        <div className="update-btn" onClick={() => handleUpdateOpen(todo)}>
          <EditIcon />
        </div>
        <div className="delete-btn" onClick={() => clickDelete(todo.id)}>
          <TrashCanIcon />
        </div>
      </div>
    </Styled.ShowTodo>
  );
};

export default TaskCard;
