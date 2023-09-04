import ShowTodo from '../../todo/showTodo/ShowTodo';
import * as Styled from './Body.Styled';

const Body = () => {
  console.log('body');
  return (
    <Styled.Body>
      <div className="body-container">
        <ShowTodo />
      </div>
    </Styled.Body>
  );
};

export default Body;
