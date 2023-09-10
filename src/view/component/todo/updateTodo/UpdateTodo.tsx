import { colors } from 'GlobalStyle';
import React, { useMemo, useState } from 'react';
import { difficulties } from 'service/const/general';
import { Todo } from 'service/model/Todo';
import { useAppDispatch, useAppSelector } from 'service/store';
import ButtonComp from 'view/component/common/button/ButtonComp';
import Input from 'view/component/common/input/InputComp';
import ModalComp from 'view/component/common/modal/ModalComp';
import * as Styled from './UpdateTodo.Styled';
import { updateTodo } from 'redux/todo/todoAction';

export interface IUpdateTodo {
  id: Todo['id'];
  open: boolean;
  handleClose: () => void;
  // setUpdateTodo?: Dispatch<SetStateAction<Todo | undefined>>;
  // children?: React.ReactNode;
}

const UpdateTodo = ({ open, handleClose, id }: IUpdateTodo) => {
  const dispatch = useAppDispatch();
  const clickedTodo = useAppSelector((state) => state?.todoReducer.todoList.filter((todo) => todo.id === id)[0]);

  const onClickDifficulty = (difficulty: string) => {
    setUpdatedInput({ ...updatedInput, priority: difficulty });
  };

  const [updatedInput, setUpdatedInput] = useState<Todo>({
    id: '',
    title: '',
    isCompleted: 0,
    priority: clickedTodo.priority,
  });

  const addTodo = () => {
    if (!updatedInput.title) {
      alert('Enter task');
      return;
    }
    dispatch(updateTodo({ ...updatedInput, title: updatedInput.title, priority: updatedInput.priority }));
    handleClose();
    setUpdatedInput({ id: '', title: '', isCompleted: 0, priority: '' });
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const memoPriority = useMemo(() => {}, []);

  // const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUpdatedInput({ ...clickedTodo, [e.target.name]: e.target.value });
  // }, [clickedTodo]);

  return (
    <Styled.UpdateTodo>
      <ModalComp title={'Edit Task'} open={open} handleClose={handleClose}>
        <Input
          type={'text'}
          name={'title'}
          defaultValue={clickedTodo.title}
          placeholder={'Type your task here...'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUpdatedInput({ ...clickedTodo, [e.target.name]: e.target.value });
          }}
          dataTestId={'data1'}
        />
        <div className="label">Priority</div>
        {difficulties.map((priority: string) => {
          const btnClicked = updatedInput.priority === priority;
          return (
            <ButtonComp
              color={btnClicked ? colors.white : colors[priority]}
              $backgroundColor={btnClicked ? colors[priority] : colors.white}
              onClickFunc={() => onClickDifficulty(priority)}
              key={priority}
              priority={updatedInput.priority}
            >
              {priority}
            </ButtonComp>
          );
        })}
        <div>
          <ButtonComp onClickFunc={addTodo} color={colors.white} $backgroundColor={colors.purple}>
            Edit
          </ButtonComp>
        </div>
      </ModalComp>
    </Styled.UpdateTodo>
  );
};

export default UpdateTodo;
