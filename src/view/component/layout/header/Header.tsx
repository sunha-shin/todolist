import * as Styled from './Header.Styled';
import CreateTodo from 'view/component/todo/createTodo/CreateTodo';

const Header = () => {
  return (
    <Styled.Header>
      <header className="container">
        <h2 className="title">Task List </h2>
        <CreateTodo />
      </header>
    </Styled.Header>
  );
};

export default Header;
