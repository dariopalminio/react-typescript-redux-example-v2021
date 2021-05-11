import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * Toda la data de la aplicación se encuentra en una estructura store predefinida.
 * El valor actual de la aplicación se llama state.
 * El store jamas se modifica de forma directa por componentes.
 * El nuevo estado se crea por medio de una función reducer que recibe la combinación
 * del estado antiguo y una acción.
 * The "configureStore" is a friendly abstraction over the standard Redux 
 * createStore function that adds good defaults to the store setup .
 */
export const store = configureStore({
    reducer: reducer,
    middleware: [thunk, logger]
  })


export type TStore = ReturnType<typeof store.getState>;