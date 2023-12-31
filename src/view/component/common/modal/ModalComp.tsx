import React from 'react';
import Modal from '@mui/material/Modal';
import * as Styled from './ModalComp.Styled';
import { ExitIcon } from 'resource/icons';

export interface ITodoModal {
  title: string;
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
}

const ModalComp = ({ title, open, handleClose, children }: ITodoModal) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Styled.ModalComp>
        <div className="title">
          <div className="modal-title">{title}</div>
          <div className="close-button" onClick={handleClose}>
            <ExitIcon />
          </div>
        </div>
        <div>
          <div className="modalLabel">Task</div>
          {children}
        </div>
      </Styled.ModalComp>
    </Modal>
  );
};

export default ModalComp;
