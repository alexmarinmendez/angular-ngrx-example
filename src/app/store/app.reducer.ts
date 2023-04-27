import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer } from './counter/counter.reducer';

export interface AppState {
  counterState: CounterState;
}

export const appReducer: ActionReducerMap<AppState> = {
  counterState: counterReducer,
};
