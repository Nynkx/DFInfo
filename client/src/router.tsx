import { createBrowserRouter, RouteObject } from "react-router-dom";

import App from "@/App";
import NotFound from "./views/NotFound";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
