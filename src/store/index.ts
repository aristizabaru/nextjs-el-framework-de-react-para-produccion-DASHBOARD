import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';

// https://redux.js.org/usage/nextjs

/**
 * Moves from defining store as a global or module-singleton variable,
 * to defining a makeStore function that returns a new store for each request
 */
export const makeStore = () => {
    return configureStore( {
        reducer: {
            counter: counterReducer,
        }
    } );
};

/* Types definition */
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore[ 'getState' ]>;
export type AppDispatch = AppStore[ 'dispatch' ];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();