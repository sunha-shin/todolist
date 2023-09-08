import styled from 'styled-components';
import { colors } from 'GlobalStyle';

export const ModalComp = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
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
`;
