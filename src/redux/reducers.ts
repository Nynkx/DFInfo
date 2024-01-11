import { combineReducers } from "redux";
import serversReducer from "@/redux/modules/servers/reducer";

export default () => {
  combineReducers({
    servers: serversReducer,
  });
};
