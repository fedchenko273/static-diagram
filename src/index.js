import React from "react";
import ReactDOM from "react-dom";
import MyDiagram from "./MyDiagram";

function App() {
  return <MyDiagram />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
