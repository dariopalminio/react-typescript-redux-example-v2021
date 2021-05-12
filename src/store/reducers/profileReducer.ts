
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TEmailPayload = {
  email: string;
};

const emailInitialState: TEmailPayload = {
  email: '',
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
  initialState: emailInitialState,
  reducers: {
    changeEmail: (state, { payload }: PayloadAction<TEmailPayload>) => {
      console.log("profileReducer receive old state:", state.email);
      console.log("profileReducer change state in store with payload value.");
      //The store is never directly modified by components.
      //Only here the state in store can be changed.
      state.email = payload.email;
    },
  },
});
// Will handle the action type `'profile/changeEmail'`

export const profileReducer = profileSlice.reducer;
export const { changeEmail } = profileSlice.actions;