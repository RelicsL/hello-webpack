import { stat } from "fs";

export const globalState = {
  count: 0,
  name: 'relics'
}

export function globalAction(state: { [index: string]: any }, action: any): { [index: string]: any } {
  switch (action.type) {
    case 'plus':
      return { ...state, count: state.count + 1 };
    case 'minus':
      return { ...state, count: state.count - 1 };
    case 'name':
      return { ...state, name: 'relics' };
  }
}