import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as Styled from './ModalComp.Styled';
import { ExitIcon } from 'resource/icons';

export interface ITodoModal {
  title: string | number;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalComp = ({ title, open, handleClose, children }: ITodoModal) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Styled.ModalComp>
          <div className="title">
            <div className="modal-title">{title}</div>
            <div className="close-button" onClick={handleClose}>
              <ExitIcon />
            </div>
          </div>
          {children}
          {/* <div>
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
            <div className="priority-buttons">Priority</div>
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
          </div>
          <div>
            <ButtonComp onClickFunc={() => addTodo(todoInput)} color={colors.gray}>
              Add
            </ButtonComp>
          </div> */}
        </Styled.ModalComp>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '15px',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  minHeight: '200px',
  minWidth: '400px',
  p: 4,
};

export default ModalComp;
