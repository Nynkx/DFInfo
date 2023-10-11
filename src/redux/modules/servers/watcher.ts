import { takeLatest } from "redux-saga/effects";

import { fetchServersList, FETCH_SERVERS_LIST_ACTION } from "./actions";

export default [takeLatest(FETCH_SERVERS_LIST_ACTION, fetchServersList)];
