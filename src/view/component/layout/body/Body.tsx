import ShowTodo from '../../todo/showTodo/ShowTodo';
import * as Styled from './Body.Styled';

const Body = () => {
  return (
    <Styled.Body>
      <div>
        <ShowTodo />
      </div>
    </Styled.Body>
  );
};

export default Body;
