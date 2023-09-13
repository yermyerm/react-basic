import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
<BrowserRouter basename={process.env.PUBLIC_URL}>
  root.render(
  <App />
  );
</BrowserRouter>;
