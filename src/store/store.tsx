import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: reducer,
    middleware: [thunk, logger]
  })


export type TStore = ReturnType<typeof store.getState>;