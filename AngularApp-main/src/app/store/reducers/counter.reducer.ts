import {ActionTypes, CounterAction} from "../actions/counter.action";
import * as Counter from "../actions/counter.action";
import {Action} from "@ngrx/store";


export const initialState = 0;
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      if(state<=0){
        return 0;
      }else return state -1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
