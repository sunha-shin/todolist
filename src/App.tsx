import Header from 'view/component/layout/header/Header';
import Body from 'view/component/layout/body/Body';
import * as Styled from './App.Styled';

const App = () => {
  // const [tempInput, setTempInput] = useState<string>('');

  // const onChangeFunc = (e: any) => {
  //   setTempInput(e.target.value);
  // };

  // const today = new Date(Date.now())
  // Intl.DateTimeFormat('default').format();
  // 2022.02.01

  // const onPrintFunc = (data: string) => {
  //   console.log(data);
  // };

  // const onClickFunc = (e: any) => {
  //   // e.preventDefault();
  //   e.preventDefault();
  //   alert('hello');
  //   window.location.href = 'https://google.com';
  // };

  return (
    <>
      <Styled.App>
        {/* <a href="https://google.com" onClick={onClickFunc}></a>
      <div onClick={() => console.log('a')}>
        <div onClick={() => console.log('b')}>
          <div onClick={() => console.log('c')}>Hello</div>
        </div>
      </div> */}
        <Header />
        <main>
          <Body />
        </main>
        {/* <AAA onClickFunc={onPrintFunc} /> */}
      </Styled.App>
    </>
  );
};

export default App;

// const AAA = ({ onClickFunc }: { onClickFunc: (data: string) => void }) => {
//   const [tempInput, setTempInput] = useState<string>('');

//   const onChangeFunc = (e: any) => {
//     setTempInput(e.target.value);
//   };
//   return (
//     <>
//       <input value={tempInput} onChange={onChangeFunc} />
//       <button onClick={() => onClickFunc(tempInput)}>Click</button>
//     </>
//   );
// };
