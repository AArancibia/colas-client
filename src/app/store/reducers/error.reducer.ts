import {Action, createReducer, on, State} from '@ngrx/store';
import {addError, removeError} from '@app/store/actions/error.action';


export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null,
};

const errorReducer = createReducer(
  initialState,
  on(addError, (state, { error }) => ({ error })),
  on(removeError, state => ({ error: null })),
);

export function reducer(state: State<ErrorState> | undefined, action: Action) {
  return errorReducer(state, action);
}
