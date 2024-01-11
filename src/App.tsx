import React, { useState } from "react";

import "@/App.css";
import { Header } from "./components/Header";
import Select from "./components/Select";
import { useAppDispatch, useAppSelector } from "./hooks";
import { OptionItem, Servers } from "./@types";
import { FETCH_SERVERS_LIST_ACTION } from "./redux/modules/servers/actions";

// import { MantineProvider, Text } from "@mantine/core";

function App() {
  const servers = useAppSelector<Servers>((state) => state.servers.servers);
  const appDispatch = useAppDispatch();

  const items: Array<OptionItem> = [];

  React.useEffect(() => {
    appDispatch({
      type: FETCH_SERVERS_LIST_ACTION,
      payload: { rows: [] },
    });
  }, []);

  console.log(servers);

  return (
    <div>
      <Header>
        <a href="#" className="header-item">
          Header item 1
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
        <Select items={items}></Select>
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
