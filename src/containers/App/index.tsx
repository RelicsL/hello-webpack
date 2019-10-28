import React, { useReducer } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Plus, Minus } from '../../components/TestComponents/Test';
import { Context, useLoadingEffect } from '../../utils';
import { globalAction, globalState } from '../../stores/globalStore';

export function App() {

  const [store, dispatch] = useReducer(globalAction, globalState);
  async function btnClick(number: number) {
    console.log(111)
    await setTimeout(async() => {
      alert(number);
    },500);
  }
  const [handleClick, btnLoading] = useLoadingEffect(btnClick)

  return (
    <>
      <Context.Provider value={{ store, dispatch }}>
        <Button onClick={() => handleClick(111)} loading={btnLoading} >Hello World!!!</Button>
        <Plus />
        <Minus />
      </Context.Provider>
    </>
  )
}