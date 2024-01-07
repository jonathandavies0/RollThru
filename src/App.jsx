import React from "react";
import ResponsiveAppBar from "./components/AppBar.jsx";
// import BasicPopover from "./components/Button.jsx";
import SimpleMap from "./components/GoogleMaps.jsx";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        {/* <BasicPopover /> */}
        <SimpleMap />
      </header>
    </div>
  );
}
