import styled from 'styled-components';
import { colors, getResponsiveMediaQuery } from 'GlobalStyle';

export const ModalComp = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  box-shadow: 0 6px 58px rgba(121, 145, 173, 0.196);
  width: 40%;
  min-width: 240px;
  min-height: 200px;
  background-color: ${colors.white};
  outline: none;
  padding: 40px 60px;
  margin: 15% auto;

  ${getResponsiveMediaQuery('sm')} {
    padding: 40px;
  }

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
