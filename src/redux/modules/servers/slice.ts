import { Servers } from "@/@types";
import { ServersState } from "@/@types/states/servers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ServersState = {
  servers: {
    data: null,
    error: "",
  },
  selectedServer: "all",
};

export const serversSlice = createSlice({
  name: "servers",
  initialState: initialState,
  reducers: {
    getServersAction: (state: ServersState) => {
      state.servers.error = "";
    },
    getServersSuccessAction: (
      state: ServersState,
      { payload: servers }: PayloadAction<Servers>
    ) => {
      state.servers.data = servers;
    },
    getServersErrorAction: (
      state: ServersState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.servers.error = error;
    },
    changeSelectedServerAction: (
      state: ServersState,
      { payload: selectedServer }: PayloadAction<string>
    ) => {
      state.selectedServer = selectedServer;
    },
  },
});

export const {
  getServersAction,
  getServersSuccessAction,
  getServersErrorAction,
  changeSelectedServerAction,
} = serversSlice.actions;

export default serversSlice.reducer;
