import { colors } from 'GlobalStyle';
import React, { useState } from 'react';
import { difficulties, todoIsCompleted } from 'service/const/general';
import { Todo } from 'service/model/Todo';
import { useAppDispatch } from 'service/store';
import ButtonComp from 'view/component/common/button/ButtonComp';
import Input from 'view/component/common/input/InputComp';
import ModalComp from 'view/component/common/modal/ModalComp';
import * as Styled from './UpdateTodo.Styled';
import { readTodo } from 'redux/todo/todoAction';
import { getColor } from 'service/util/getColor';
import { readTodosAPI, updateTodoAPI } from 'api/todo';

export interface IUpdateTodo {
  selectedTodo: Todo;
  open: boolean;
  handleClose: () => void;
}

const UpdateTodo = ({ open, handleClose, selectedTodo }: IUpdateTodo) => {
  const dispatch = useAppDispatch();
  const [updatedInput, setUpdatedInput] = useState<Todo>(selectedTodo);
  const { white, purple } = colors;

  const onClickDifficulty = (difficulty: string) => {
    setUpdatedInput({ ...updatedInput, priority: difficulty });
  };

  const updateTodo = async () => {
    if (!updatedInput.title || !updatedInput.priority) {
      alert('Enter all required fields');
      return;
    }

    await updateTodoAPI(updatedInput);
    const result = await readTodosAPI();

    dispatch(readTodo(result));
    handleClose();
    setUpdatedInput({ id: '', title: '', isCompleted: todoIsCompleted[0], priority: '' });
  };

  return (
    <Styled.UpdateTodo>
      <ModalComp title={'Edit Task'} open={open} handleClose={handleClose}>
        <Input
          type={'text'}
          name={'title'}
          value={updatedInput.title}
          placeholder={'Type your task here...'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUpdatedInput({ ...updatedInput, [e.target.name]: e.target.value });
          }}
          dataTestId={'data1'}
        />
        <div className="modalLabel priorityMarginTop">Priority</div>
        <div className="priorityBtns">
          {difficulties.map((priority: string) => {
            const btnClicked = updatedInput.priority === priority;
            return (
              <ButtonComp
                color={btnClicked ? white : getColor(priority)}
                $backgroundColor={btnClicked ? getColor(priority) : white}
                $borderColor={getColor(priority)}
                onClickFunc={() => onClickDifficulty(priority)}
                key={priority}
                priority={updatedInput.priority}
              >
                {priority}
              </ButtonComp>
            );
          })}
        </div>
        <div className="addBtn">
          <ButtonComp onClickFunc={updateTodo} color={white} $backgroundColor={purple}>
            Edit
          </ButtonComp>
        </div>
      </ModalComp>
    </Styled.UpdateTodo>
  );
};

export default UpdateTodo;
