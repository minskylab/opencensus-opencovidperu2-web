import { useMemo } from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import * as ducks from "./ducks";

let store: any;

const initialState = {
  profile: {
    region: "Lima",
    provincia: "Lima",
    modo: "",
  },
};

const reducers = combineReducers(ducks);

export type IReducer = ReturnType<typeof reducers>;

const initStore = (preloadedState = initialState) => {
  return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware()));
};

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState: any) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
