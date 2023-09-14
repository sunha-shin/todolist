import styled from 'styled-components';
import { colors } from 'GlobalStyle';

export const ModalComp = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .modal-title {
    color: #121212;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }

  .close-button {
    background-color: ${colors.white};
    cursor: pointer;
  }

  .modalLabel {
    color: #7d8592;
    font-size: 14px;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .priorityMarginTop {
    margin-top: 20px;
  }

  .priorityBtns {
    display: flex;
    gap: 13px;
    margin-top: 12px;
  }

  .addBtn {
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const boxStyle = {
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
