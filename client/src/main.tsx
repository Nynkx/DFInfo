import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { Provider } from "react-redux";
import store from "@/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.Suspense>
      <RouterProvider router={router}></RouterProvider>
    </React.Suspense>
  </Provider>
);
