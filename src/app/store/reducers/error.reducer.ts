import {createReducer, on} from '@ngrx/store';
import {addError, removeError} from '@app/store/actions/error.action';


export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null,
};

export const errorReducer = createReducer(
  initialState,
  on(addError, (state, { error }) => ({ error })),
  on(removeError, state => ({ error: null })),
);


