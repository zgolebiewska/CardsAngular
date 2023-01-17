import {Item} from "../../models/shopping-list.model";
import {ShoppingAction, ShoppingActionTypes} from "../actions/shopping-list.action";


export interface ShoppingState{
  items: { [id:number]: Item },
}
export const initialState: ShoppingState = {
  items: {},
};

export function shoppingListReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
): ShoppingState {
    switch(action.type){
      case ShoppingActionTypes.getList:
        return{
          ...state,
        }
      case ShoppingActionTypes.addToList:
        return{
          ...state,
          items: {...state.items}
        };

      case ShoppingActionTypes.deleteListItem: {
        return{
          ...state,
          items: {...state.items}
        };
      }
      default: {
        return state;
      }
    }
  }


