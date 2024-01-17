import { call, put } from "redux-saga/effects";
import { Api } from "@/api";
import { Servers } from "@/@types/server_list";
import { getServersErrorAction, getServersSuccessAction } from "../slice";

export const FETCH_SERVERS_LIST_ACTION = "FETCH_SERVERS_LIST_ACTION";
export const FETCH_SERVERS_LIST_SUCCESS = `${FETCH_SERVERS_LIST_ACTION}_SUCCESS`;
export const FETCH_SERVERS_LIST_FAILURE = `${FETCH_SERVERS_LIST_ACTION}_FAILURE`;

export type ServerListReducerPayload = {
  type: string;
  payload: Servers;
};

export function* fetchServersList() {
  try {
    const data: Servers = yield call(Api.fetchServersList);

    console.log(data);

    yield put(getServersSuccessAction(data));
  } catch (error) {
    yield put(getServersErrorAction((error as Error).message));
  }
}
