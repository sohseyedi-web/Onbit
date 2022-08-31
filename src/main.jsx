import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ArzContext from "./Context/Arz-Context";
import ModalProvider from "./Context/ModalProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ArzContext>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ArzContext>
    </BrowserRouter>
  </React.StrictMode>
);
