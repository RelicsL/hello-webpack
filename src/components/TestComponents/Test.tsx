import React, { useContext, useEffect } from 'react';
import { Context } from '../../utils';

export function Plus () {
  const { dispatch, store } = useContext(Context);
  
  useEffect(() => {
    console.log(store.name);
  }, [])
  
  return (
    <div>
      <span>{store.count}</span><button onClick={() => dispatch({type: 'plus'})}>+</button>
    </div>
  )
}

export function Minus () {
  const { dispatch, store } = useContext(Context);

  return (
    <div>
      <span>{store.count}</span><button onClick={() => dispatch({type: 'minus'})}>-</button>
    </div>
  )
}