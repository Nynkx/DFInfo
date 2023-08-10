import * as React from "react";

import Select from "./Select";
import api from "@/api";

export const Header = () => {
  const [servers, setServers] = React.useState([]);

  React.useEffect(() => {
    api.get("/servers").then((res) => {
      setServers((servers) => {
        const payload = [];
        for (let row of res.data.rows) {
          payload.push({
            value: row.serverId,
            text: row.serverName,
          });
          console.log(row);
        }

        return payload;
      });
    });
  }, []);

  // api.get("/servers").then((res) => {
  //   setServers((servers) => {
  //     const payload = [];
  //     for (let row of res.data.rows) {
  //       payload.push({
  //         value: row.serverId,
  //         text: row.serverName,
  //       });
  //       console.log(row);
  //     }

  //     return payload;
  //   });
  // });

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
