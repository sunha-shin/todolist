import React, { useState } from 'react';
import * as Styled from './Header.Styled';
import { colors } from 'GlobalStyle';
import TodoModal from 'view/component/common/modal/ModalComp';
import Input from 'view/component/common/input/InputComp';
import ButtonComp from 'view/component/common/button/ButtonComp';
import { difficulties } from 'service/const/general';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Styled.Header>
      <header className="container">
        <h2 className="title">Task List </h2>
        <button className="addTaskBtn" onClick={handleOpen}>
          + Add Task
        </button>
        <TodoModal title={'Add Task'} open={open} handleClose={handleClose}>
          <div>
            <div className="inputLabel">Task</div>
            <Input
              type={'text'}
              name={'title'}
              value={'createTodoInput.title'}
              placeholder={'Enter todo'}
              onChange={() => {
                ('');
              }}
              dataTestId={'data1'}
              className={'a'}
            />
          </div>
          <div>
            <div className="inputLabel">Priority</div>
            {difficulties.map((difficulty: string) => {
              return <ButtonComp color={colors[difficulty]}>{difficulty}</ButtonComp>;
            })}
          </div>
        </TodoModal>
      </header>
    </Styled.Header>
  );
};

export default Header;
