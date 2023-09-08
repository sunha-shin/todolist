import ShowTodo from '../../todo/showTodo/ShowTodo';
import * as Styled from './Body.Styled';

const Body = () => {
  return (
    <Styled.Body>
      <div className="body-container">
        <ShowTodo />
      </div>
    </Styled.Body>
  );
};

export default Body;
