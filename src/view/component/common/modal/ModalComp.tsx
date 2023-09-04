import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import ButtonComp from 'view/component/common/button/ButtonComp';
import { colors } from 'GlobalStyle';

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
        <Title>
          <ModalTitle>{title}</ModalTitle>
          <button onClick={handleClose}>X</button>
        </Title>
        <Body>{children}</Body>
        <div>
          <ButtonComp color={colors['darkGray']}>Add</ButtonComp>
        </div>
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

const ModalTitle = styled.header`
  color: #121212;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

const InputLabel = styled.div`
  color: #7d8592;
  font-size: 14px;
`;

const Title = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.body`
  color: #7d8592;
  font-size: 14px;
`;

export default ModalComp;
