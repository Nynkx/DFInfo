import { combineReducers, configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import serversReducer from "@/redux/modules/servers/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    servers: serversReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
