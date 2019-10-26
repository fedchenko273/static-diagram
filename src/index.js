import React from "react";
import ReactDOM from "react-dom";
import Scene from "./Scene";

function App() {
  return <Scene />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
