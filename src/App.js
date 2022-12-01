import React from "react";
import Nav from "./components/Navcomponenets/Nav.js";
import Hero from "./components/herocomponents/Hero.js";
import "./App.css";
import image from "./Image/pgru.png";
import cap from "./Image/HydroHat.png";
import wrist from "./Image/patwatch.png";
import { watch } from "./Data/data";
import { shoe } from "./Data/data";
import { pants } from "./Data/data";

function App() {
  return (
    <div>
      <Nav watch={watch} shoe={shoe} pants={pants} />
      <Hero image={image} cap={cap} wrist={wrist} />
    </div>
  );
}

export default App;
