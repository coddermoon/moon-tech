import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={routes} />
    </Provider>
   
  </React.StrictMode>
);
