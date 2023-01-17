import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducers/counter.reducer';

@NgModule({
  imports: [StoreModule.forFeature('count', counterReducer)],
})
export class CounterModule {}
