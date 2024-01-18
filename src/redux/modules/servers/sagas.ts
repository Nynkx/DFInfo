import { call, put } from "redux-saga/effects";
import { Api } from "@/api";
import { Servers } from "@/@types/server_list";
import { getServersErrorAction, getServersSuccessAction } from "./slice";

export const SERVERS = "servers";
export const FETCH_SERVERS_LIST = `${SERVERS}/getServersAction`;

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
