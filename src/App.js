import React, { Fragment } from 'react'
import { Button } from './components/Button/Button';
import { Input } from './components/Input';

import style from './App.module.css';

const name = () => 'ivan'

const toggle = true

function App() {
  return (
    <Fragment>
      <h2 className={style.header} >Hello Geekbrains</h2>
      {toggle && <Input name={name()} />}
      <Button name={name()} adsfsddf="asdfasdf" />
    </Fragment>
  )
}

export default App;
