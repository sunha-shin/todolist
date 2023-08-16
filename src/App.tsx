import React from 'react';
import Container from '@mui/material/Container';
import { dayNames, monthNames } from 'service/const/dateNames';
import CreateTodo from 'view/component/todo/CreateTodo';
import ShowTodo from 'view/component/todo/ShowTodo';
import GlobalStyle from 'GlobalStyle';
import { EditIcon, TrashCanIcon } from 'resource/icons';
import { Button } from '@mui/material';
import styled from 'styled-components';

const App = () => {
  const today = new Date();
  const currentDay = dayNames[today.getDay()];
  const currentMonth = monthNames[today.getMonth()];
  const currentDate = today.getDate();

  return (
    <>
      <AppContainer>
        <PageWrapper>
          <Header>
            <Title>Task List </Title>
            <AddTaskBtn>+ Add Task</AddTaskBtn>
          </Header>
          <Body></Body>
          <CreateTodo />
          <ShowTodo />
        </PageWrapper>
      </AppContainer>
    </>
  );
};

// const Container = styled(div)`
//   background: url('https://source.unsplash.com/daily') no-repeat center center fixed;
//   background-size: cover;
// `;

const AppContainer = styled(Container)({
  color: '#0a1629',
  fontSize: '36px,',
  fontWeight: '700',
}) as typeof Container;

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

const Title = styled.h2`
  color: #0a1629;
  font-size: 36px;
  font-weight: 700;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.h2`
  color: #0a1629;
  font-size: 36px;
  font-weight: 700;
`;

const PageWrapper = styled(Container)({
  margin: '50px 0',
}) as typeof Container;

export default App;
