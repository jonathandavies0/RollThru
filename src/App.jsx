import React from "react";
import SimpleMap from "./components/GoogleMaps.jsx";
import BasicPopover from "./components/Button.jsx";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicPopover />
        <SimpleMap /> 
      </header>
    </div>
  );
}

