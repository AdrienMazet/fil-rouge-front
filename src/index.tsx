import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import LeafletMap from "./components/LeafletMap";

ReactDOM.render(
  <React.StrictMode>
    <LeafletMap />
  </React.StrictMode>,
  document.getElementById("root")
);
