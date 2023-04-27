import { createReducer, on } from '@ngrx/store';
import { decrease, increment, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (oldState) => {
    return {
      ...oldState,
      value: oldState.value + 1,
    };
  }),
  on(decrease, (oldState) => {
    if (oldState.value < 1) return oldState;
    return {
      ...oldState,
      value: oldState.value - 1,
    };
  }),
  on(reset, () => initialState)
);
