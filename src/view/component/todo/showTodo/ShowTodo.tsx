import * as Styled from './ShowTodo.Styled';
import { useState } from 'react';
import { deleteTodo, updateTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import CircularProgress from '@mui/material/CircularProgress';
import { EditIcon, TrashCanIcon } from 'resource/icons';
import { todoIsCompeted } from 'service/model/Todo';
import Input from 'view/component/common/input/InputComp';
import ModalComp from 'view/component/common/modal/ModalComp';
import { difficulties } from 'service/const/general';
import ButtonComp from 'view/component/common/button/ButtonComp';
import { colors } from 'GlobalStyle';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state?.todoReducer);

  const [updateTodoInput, setUpdateTodoInput] = useState<Todo>({
    id: '',
    title: '',
    isCompleted: 0,
    priority: '',
  });
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);
  const [todoInput, setTodoInput] = useState<Partial<Todo>>({
    title: '',
    priority: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // update todo
  const changeTodo = () => {
    dispatch(updateTodo(updateTodoInput));
    setShowUpdateInput(false);
  };

  const onChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateTodoInput({ ...updateTodoInput, [name]: value });
  };

  const clickUpdate = (todo: Todo) => {
    setUpdateTodoInput({
      ...updateTodoInput,
      ...todo,
    });
    setShowUpdateInput(true);
  };

  const completeTodo = (todo: Todo) => {
    let tempTodo: Todo;

    if ((todo.isCompleted as number) === todoIsCompeted.length - 1) {
      tempTodo = { ...todo, isCompleted: 0 };
    } else {
      tempTodo = { ...todo, isCompleted: (todo?.isCompleted as number) + 1 };
    }

    dispatch(updateTodo(tempTodo));
  };

  // delete todo
  const clickDelete = (id: string | number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Styled.ShowTodo background={'red'}>
      {todoList.map((todo: Todo) => {
        return (
          <section className="task-card" key={todo.id}>
            <div className="task-wrapper">
              <div className="task-top-text">Task</div>
              <div className="task-text">{todo.title}</div>
            </div>
            <div className="priority-wrapper">
              <div className="task-top-text">Priority</div>
              <div className="task-text">{todo.priority}</div>
            </div>
            <div className="task-status-wrapper">
              <div className="task-status-btn" onClick={() => completeTodo(todo)}>
                {todoIsCompeted[todo.isCompleted as number]}
              </div>
            </div>
            <div className="progress-bar-wrapper">
              <CircularProgress variant="determinate" value={100} size={'24px'} />
            </div>
            <div className="buttons-wrapper">
              <div className="update-btn" onClick={() => clickUpdate(todo)}>
                <EditIcon />
              </div>
              <div className="delete-btn" onClick={() => clickDelete(todo.id)}>
                <TrashCanIcon />
              </div>
            </div>
          </section>
        );
      })}
      {showUpdateInput && (
        <ModalComp title={'Add Task'} open={open} handleClose={handleClose}>
          <div>
            <div>Task</div>
            <Input
              type={'text'}
              name={'title'}
              value={todoInput.title}
              placeholder={'Type your task here...'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTodoInput({ ...todoInput, [e.target.name]: e.target.value });
              }}
              dataTestId={'data1'}
            />
          </div>
          <div>
            <div className="">Priority</div>
            {difficulties.map((priority: string) => {
              const btnClicked = todoInput.priority === priority;
              return (
                <ButtonComp
                  color={btnClicked ? colors.white : colors[priority]}
                  $backgroundColor={btnClicked ? colors[priority] : colors.white}
                  // onClickFunc={() => onClickDifficulty(priority)}
                  key={priority}
                  priority={todoInput.priority}
                >
                  {priority}
                </ButtonComp>
              );
            })}
          </div>
          <div>
            <ButtonComp color={colors.gray}>Add</ButtonComp>
          </div>
        </ModalComp>
        // <>
        //   <Input
        //     type={'text'}
        //     name={'title'}
        //     value={updateTodoInput.title}
        //     placeholder={'title'}
        //     onChange={onChangeUpdate}
        //     dataTestId={'data1'}
        //   />
        //   <button onClick={changeTodo}>update todo</button>
        // </>
      )}
    </Styled.ShowTodo>
  );
};

export default ShowTodo;
