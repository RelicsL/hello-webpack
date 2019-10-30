import React, { useContext, useEffect, createRef, RefObject } from 'react';
import { Context } from '../../utils';

export function Plus () {
  const { dispatch, store } = useContext(Context);
  const iptRef:RefObject<HTMLSpanElement> = createRef();

  useEffect(() => {
    console.log(store.name);
  }, [])
  
  return (
    <div>
      <span ref={iptRef}>{store.count}</span>
      <button onClick={() => {
        console.log(iptRef.current);
        dispatch({ type: 'plus' })
      }}>+</button>
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