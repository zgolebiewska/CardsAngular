import {Action, createAction, props} from '@ngrx/store';
import {Item} from "../../models/shopping-list.model";

export enum ShoppingActionTypes{
  getList = '[Item] GetItem',
  addToList = '[Item] AddItem',
  deleteListItem = '[Item] DeleteItem',

}
export class getListItem{
  readonly type = ShoppingActionTypes.getList
}
export class addToList{
  readonly type = ShoppingActionTypes.addToList

  constructor(public payload: Item) { }
}
export class deleteListItem{
  readonly type = ShoppingActionTypes.deleteListItem
  constructor(public payload: Item) {}

}
export type ShoppingAction = getListItem | addToList | deleteListItem;
