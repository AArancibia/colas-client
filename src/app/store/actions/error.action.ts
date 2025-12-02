import {createAction, props} from '@ngrx/store';

export const addError = createAction('[ERROR] Add Error', props<{ error: string; }>());
export const removeError = createAction('[ERROR] Remove Error');
