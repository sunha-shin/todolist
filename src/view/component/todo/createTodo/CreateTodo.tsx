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
import { difficulties, todoIsCompleted } from 'service/const/general';
import { getColor } from 'service/util/getColor';

const CreateTodo = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [todoInput, setTodoInput] = useState<Partial<Todo>>({
    title: '',
    priority: '',
  });
  const { white, purple } = colors;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTodoInput({});
  };
  const dispatch = useAppDispatch();

  const onClickDifficulty = (difficulty: string) => {
    setTodoInput({ ...todoInput, priority: difficulty });
  };

  const addTodo = () => {
    if (!todoInput.title || !todoInput.priority) {
      alert('Enter all required fields');
      return;
    }
    dispatch(createTodo({ ...todoInput, id: nanoid(), isCompleted: todoIsCompleted[0] }));
    handleClose();
  };

  return (
    <Styled.CreateTodo>
      <button className="addTaskBtn" onClick={handleOpen}>
        Add Task
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
        <div className="modalLabel priorityMarginTop">Priority</div>
        <div className="priorityBtns">
          {difficulties.map((priority: string) => {
            const btnClicked = todoInput.priority === priority;
            return (
              <ButtonComp
                color={btnClicked ? white : getColor(priority)}
                $backgroundColor={btnClicked ? getColor(priority) : white}
                $borderColor={getColor(priority)}
                onClickFunc={() => onClickDifficulty(priority)}
                key={priority}
                priority={todoInput.priority}
              >
                {priority}
              </ButtonComp>
            );
          })}
        </div>
        <div className="addBtn">
          <ButtonComp onClickFunc={addTodo} color={white} $backgroundColor={purple}>
            Add
          </ButtonComp>
        </div>
      </ModalComp>
    </Styled.CreateTodo>
  );
};

export default CreateTodo;
