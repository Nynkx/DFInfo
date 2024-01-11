import { Servers } from "@/@types";
import {
  FETCH_SERVERS_LIST_SUCCESS,
  ServerListReducerPayload,
} from "./actions";

export const INITIAL_STATE = { rows: [] };

export default (
  state = INITIAL_STATE,
  dispatchPayload: ServerListReducerPayload
) => {
  switch (dispatchPayload.type) {
    case FETCH_SERVERS_LIST_SUCCESS:
      console.log("asd", dispatchPayload.payload);
      return { ...state, servers: dispatchPayload.payload };

    default:
      return state;
  }
};
