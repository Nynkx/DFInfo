import { all } from "redux-saga/effects";
import serversWatcher from "./modules/servers/watcher";

export default function* rootSaga() {
  yield all([...serversWatcher]);
}
