import { call, put } from "redux-saga/effects";
import { Api } from "@/api";
import { Servers } from "@/@types/server_list";

export const FETCH_SERVERS_LIST_ACTION = "FETCH_SERVERS_LIST_ACTION";
export const FETCH_SERVERS_LIST_SUCCESS = `${FETCH_SERVERS_LIST_ACTION}_SUCCESS`;
export const FETCH_SERVERS_LIST_FAILURE = `${FETCH_SERVERS_LIST_ACTION}_FAILURE`;

export function* fetchServersList() {
  try {
    const data: Servers = yield call(Api.fetchServersList);

    yield put({ type: FETCH_SERVERS_LIST_SUCCESS, data });
  } catch (error) {
    yield put({ type: FETCH_SERVERS_LIST_FAILURE, error });
  }
}
