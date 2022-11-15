import React from "react";
import Nav from "./components/Navcomponenets/Nav.js";
import "./App.css";
import { watch } from "./Data/data";
import { shoe } from "./Data/data";
import { pants } from "./Data/data";

function App() {
  return (
    <div>
      <Nav watch={watch} shoe={shoe} pants={pants} />
    </div>
  );
}

export default App;
