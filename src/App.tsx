import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Header from 'view/component/layout/Header';
import Body from 'view/component/layout/Body';

// import Input from 'view/component/common/input/InputComp';

const App = () => {
  // const [tempInput, setTempInput] = useState<string>('');

  // const onChangeFunc = (e: any) => {
  //   setTempInput(e.target.value);
  // };

  // const today = new Date(Date.now())
  // Intl.DateTimeFormat('default').format();
  // 2022.02.01

  const onPrintFunc = (data: string) => {
    console.log(data);
  };

  const onClickFunc = (e: any) => {
    // e.preventDefault();
    e.preventDefault();
    alert('hello');
    window.location.href = 'https://google.com';
  };

  return (
    <AppContainer>
      <a href="https://google.com" onClick={onClickFunc}>
        {' '}
        asdsd
      </a>
      <div onClick={() => console.log('a')}>
        <div onClick={() => console.log('b')}>
          <div onClick={() => console.log('c')}>Hello</div>
        </div>
      </div>
      <Header />
      <Body />
      <AAA onClickFunc={onPrintFunc} />
      {/* <input value={tempInput} onChange={onChangeFunc} /> */}
    </AppContainer>
  );
};

const AppContainer = styled(Container)({
  color: '#0a1629',
  fontSize: '36px,',
  fontWeight: '700',
}) as typeof Container;

export default App;

const AAA = ({ onClickFunc }: { onClickFunc: (data: string) => void }) => {
  const [tempInput, setTempInput] = useState<string>('');

  const onChangeFunc = (e: any) => {
    setTempInput(e.target.value);
  };
  return (
    <>
      <input value={tempInput} onChange={onChangeFunc} />
      <button onClick={() => onClickFunc(tempInput)}>Click</button>
    </>
  );
};
