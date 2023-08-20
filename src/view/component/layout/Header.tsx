import React, { useState } from 'react';
import styled from 'styled-components';
import TodoModal from 'view/component/common/modal/ModalComp';
import InputLabel from '@mui/material/InputLabel';
import Input from 'view/component/common/input/InputComp';

const Header = () => {
  console.log('Header Component');
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Title>Task List </Title>
      <AddTaskBtn onClick={handleOpen}>+ Add Task</AddTaskBtn>
      <TodoModal title={'Add Task'} open={open} handleClose={handleClose}>
        <InputLabel>Task</InputLabel>
        <InputLabel>Task</InputLabel>
        <Input
          type={'text'}
          name={'title'}
          value={'createTodoInput.title'}
          placeholder={'Enter todo'}
          onChange={() => {
            ('');
          }}
          dataTestId={'data1'}
        />
      </TodoModal>
    </Container>
  );
};

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #0a1629;
  font-size: 36px;
  font-weight: 700;
`;

const AddTaskBtn = styled.button`
  background: #713fff;
  border: none;
  border-radius: 14px;
  box-shadow: 0 6px 12px rgba(113, 63, 255, 0.25);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  padding: 13px 30px;
`;

export default Header;
