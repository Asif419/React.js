import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const increseValue = () => {
    setValue((preValue) => {
      return preValue + 1;
    });
  }
  useEffect(() => {
    console.log('called');
    document.title = `New message ${value}`;
  }[])
  return (<>

    <h1>{value}</h1>
    <button className='btn' onClick={() => { increseValue() }} >Click</button>

  </>
  )
};

export default UseEffectBasics;

-------------
  
//secoend argument
  

useEffect(() => {
    console.log('called');
    if (value >= 1) {
      document.title = `New message ${value}`;
    }
  }, [value]);
