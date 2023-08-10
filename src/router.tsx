import { createBrowserRouter, RouteObject } from "react-router-dom";

import App from "@/App";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
  },
];

export const router = createBrowserRouter(routes);
