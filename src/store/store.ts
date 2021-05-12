import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * All the application data is in a predefined store structure.
 * The current value of the application is called state.
 * The store is never directly modified by components.
 * The new state is created by means of a reduce function that receives 
 * the combination of the old state and an action.
 * The "configureStore" is a friendly abstraction over the standard Redux 
 * createStore function that adds good defaults to the store setup .
 */
export const store = configureStore({
    reducer: reducer,
    middleware: [thunk, logger]
  });


export type TStore = ReturnType<typeof store.getState>;