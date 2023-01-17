import React from 'react';
import { Main } from './components/Layout/Layout';
import { GlobalProvaider } from './context/GlobalProvider';
import { GlobalStyled } from './GlobalStyled';




function App():JSX.Element{
  return (
    <GlobalProvaider>
      <GlobalStyled/>
      <Main/>
    </GlobalProvaider>
    
  );
}

export default App;
