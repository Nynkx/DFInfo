import * as React from "react";

import Select from "./Select";
import api from "@/api/baseApi";

import { HeaderProps, OptionItem, Servers } from "@/@types";

export const Header = (props: HeaderProps) => {
  // const [servers, setServers] = React.useState<Array<OptionItem>>();

  // React.useEffect(() => {
  //   api.get("/servers").then((res) => {
  //     const payload: Servers = res.data;
  //     const items: OptionItem[] = [];

  //     for (let server of payload.rows) {
  //       items.push({
  //         text: server.serverName,
  //         value: server.serverId,
  //       } satisfies OptionItem);
  //     }

  //     setServers(items);
  //   });
  // }, []);

  return (
    <>
      <header className="sticky top-0">
        <nav className="w-full bg-gray-700 py-2.5 px-6">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex w-auto justify-between items-center">
              <ul className="flex flex-row mt-0 lg:order-1 space-x-8">
                {props.children}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
