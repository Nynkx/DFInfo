import { takeLatest } from "redux-saga/effects";

import { fetchServersList, FETCH_SERVERS_LIST } from "./sagas";

export default [takeLatest(FETCH_SERVERS_LIST, fetchServersList)];
