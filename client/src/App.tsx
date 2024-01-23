import React, { useState } from "react";

import "@/App.css";
import { Header } from "./components/Header";
import Select from "./components/Select";
import { useAppDispatch } from "./hooks";
import { OptionItem } from "./@types";

import {
  changeSelectedServerAction,
  getServersAction,
} from "./redux/modules/servers/slice";

import { StateType } from "./redux/reducers";
import { useSelector } from "react-redux";

// import { MantineProvider, Text } from "@mantine/core";

function App() {
  const servers = useSelector((state: StateType) => state.servers.servers);

  const appDispatch = useAppDispatch();

  const [items, setItems] = useState<Array<OptionItem>>([]);

  React.useEffect(() => {
    appDispatch(getServersAction());
  }, []);

  React.useEffect(() => {
    console.log("asdasds");

    const tempArr: Array<OptionItem> = [];
    tempArr.push({ value: "all", text: "All" });
    for (let row of servers.data?.rows ?? []) {
      tempArr.push({ value: row.serverId, text: row.serverName });
    }

    setItems(tempArr);
  }, [servers]);

  console.log(servers);
  const onServerChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    appDispatch(changeSelectedServerAction(e.target.value));
    // console.log(e.target.value);
  };

  return (
    <div>
      <Header>
        <a href="/ranking" className="header-item">
          Ranking
        </a>
        <a href="#" className="header-item">
          Header item 2
        </a>
        <a href="#" className="header-item">
          Header item 3
        </a>
        <a href="#" className="header-item">
          Header item 4
        </a>
        <a href="#" className="header-item">
          Header item 5
        </a>
        <Select
          title="server"
          name="server-selector"
          items={items}
          onChange={onServerChanged}
        ></Select>
      </Header>
      <div className=" body">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
