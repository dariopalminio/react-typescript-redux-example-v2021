
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TPayload = {
  email: string;
};

/**
 * A function that accepts an initial state, an object full of reducer functions, 
 * and a "slice name", and automatically generates action creators and 
 * action types that correspond to the reducers and state.
 * Then, handle actions in your reducer.
 * name: A string name for this slice of state. Generated action type constants will use this as a prefix.
 * initialState: The initial state value for this slice of state. 
 *               The current value of the application is called state.
 * reducers: An object containing Redux "case reducer" functions.
 * (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
 * Reference: https://redux-toolkit.js.org/api/createSlice
 */
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    email: '',
  },
  reducers: {
    changeEmail: (state, { payload }: PayloadAction<TPayload>) => {
      state.email = payload.email;
      console.log("Reducer profileSlice change state in store.");
    },
  },
});
// Will handle the action type `'profile/changeEmail'`

export const profileReducer = profileSlice.reducer;
export const { changeEmail } = profileSlice.actions;