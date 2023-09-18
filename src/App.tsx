import Header from 'view/component/layout/header/Header';
import Body from 'view/component/layout/body/Body';
import * as Styled from './App.Styled';

const App = () => {
  return (
    <>
      <Styled.App>
        <Header />
        <main>
          <Body />
        </main>
      </Styled.App>
    </>
  );
};

export default App;
