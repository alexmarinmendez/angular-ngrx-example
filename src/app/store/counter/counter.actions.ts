import { createAction } from '@ngrx/store';

export const increment = createAction('[COUNTER] INCREMENT VALUE');
export const decrease = createAction('[COUNTER] DECREASE VALUE');
export const reset = createAction('[COUNTER] RESET VALUE');
