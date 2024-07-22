import React from 'react';
import { useState } from 'react';
import FormPage from './Pages/FormPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormPage />
    </>
  );
}

export default App;
