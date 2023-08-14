import * as React from "react";

import Select from "./Select";
import api from "@/api";
import { OptionItem, Servers } from "@/@types";

export const Header = () => {
  const [servers, setServers] = React.useState<Array<OptionItem>>();

  React.useEffect(() => {
    api.get("/servers").then((res) => {
      const payload: Servers = res.data;
      const items: OptionItem[] = [];

      for (let server of payload.rows) {
        items.push({
          text: server.serverName,
          value: server.serverId,
        } satisfies OptionItem);
      }

      setServers(items);
    });
  }, []);

  return (
    <>
      <header className="sticky top-0 w-full bg-gray-700 max-h-16 h-15">
        <div className="flex flex-wrap justify-center items-center mt-15 order">
          <div className="hidden lg:flex w-auto justify-between item-center">
            <ul className="flex flex-row mt-4">
              {/* <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li> */}

              <li>
                <Select id="server" items={servers}></Select>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
