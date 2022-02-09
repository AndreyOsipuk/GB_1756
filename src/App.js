import React, { Fragment } from 'react'
import { Button } from './components/Button/Button';
import { Input } from './components/Input';

// import style from './App.module.css';

const toggle = true

function App() {
  return (
    <>
      <h2>Hello Geekbrains</h2>
      {toggle && <Input />}
      <Button name={'geekbrains'} />
      <Button name={'andrey'}  />
    </>
  )
}

export default App;
