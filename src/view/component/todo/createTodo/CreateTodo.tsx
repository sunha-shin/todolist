import { useState } from 'react';
import { useAppDispatch } from 'service/store';
import { Todo } from 'service/model/Todo';
import { nanoid } from 'nanoid';
import { createTodo } from 'redux/todo/todoAction';
import * as Styled from './CreateTodo.Styled';
import ModalComp from 'view/component/common/modal/ModalComp';
import { colors } from 'GlobalStyle';
import Input from 'view/component/common/input/InputComp';
import ButtonComp from 'view/component/common/button/ButtonComp';
import { difficulties } from 'service/const/general';

const CreateTodo = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [todoInput, setTodoInput] = useState<Partial<Todo>>({
    title: '',
    priority: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  const onClickDifficulty = (difficulty: string) => {
    setTodoInput({ ...todoInput, priority: difficulty });
  };

  const addTodo = () => {
    if (!todoInput.title) {
      alert('Enter task');
      return;
    }
    dispatch(createTodo({ ...todoInput, id: nanoid(), isCompleted: 0 }));
    handleClose();
    setTodoInput({});
  };

  return (
    <Styled.CreateTodo>
      <button className="addTaskBtn" onClick={handleOpen}>
        + Add Task
      </button>
      <ModalComp title={'Add Task'} open={open} handleClose={handleClose}>
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
        <div className="label">Priority</div>
        {difficulties.map((priority: string) => {
          const btnClicked = todoInput.priority === priority;
          return (
            <ButtonComp
              color={btnClicked ? colors.white : colors[priority]}
              $backgroundColor={btnClicked ? colors[priority] : colors.white}
              onClickFunc={() => onClickDifficulty(priority)}
              key={priority}
              priority={todoInput.priority}
            >
              {priority}
            </ButtonComp>
          );
        })}
        <div>
          <ButtonComp onClickFunc={addTodo} color={colors.gray}>
            Add
          </ButtonComp>
        </div>
      </ModalComp>
    </Styled.CreateTodo>
  );
};

export default CreateTodo;
