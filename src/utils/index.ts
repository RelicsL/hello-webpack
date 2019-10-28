import React, { createContext, useState } from 'react';
import { message } from 'antd';
interface IContextProps {
  store: { [key: string]: any },
  dispatch: any
}

export const Context = createContext<IContextProps>({ store: undefined, dispatch: undefined });

export function useLoadingEffect(func: Function): [(...args: any[]) => Promise<any>, boolean] {
  const [isLoading, setLoading] = useState<boolean>(false);
  return [async (...arg: any[]) => {
    setLoading(true);
    try {
      await func.apply(this, arg);
      message.success('操作成功');
    } catch (e) {
      console.log(e)
      message.error('操作失败');
      throw e;
    } finally {
      setLoading(false);
    }
  }, isLoading];
}