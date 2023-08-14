import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { dayNames, monthNames } from 'service/const/dateNames';
import CreateTodo from 'view/component/todo/CreateTodo';
import ShowTodo from 'view/component/todo/ShowTodo';

const App = () => {
  const today = new Date();
  const currentDay = dayNames[today.getDay()];
  const currentMonth = monthNames[today.getMonth()];
  const currentDate = today.getDate();

  return (
    <AppContainer>
      <div>TodoList</div>
      <div>My days</div>
      <div>
        {currentDay}, {currentMonth} {currentDate}
      </div>
      <CreateTodo />
      <ShowTodo />
    </AppContainer>
  );
};

// const Container = styled(div)`
//   background: url('https://source.unsplash.com/daily') no-repeat center center fixed;
//   background-size: cover;
// `;

const AppContainer = styled(Container)({
  // backgroundColor: 'red',
  width: '100%',
  backgroundSize: 'cover',
  borderRadius: '10%',
}) as typeof Container;

export default App;
