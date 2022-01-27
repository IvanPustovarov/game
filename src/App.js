import React from "react";
import "./App.css";

import Table from "./components/Table";
import { createSteps } from "./api.js";

const App = () => {
  const STEP_NUMBER = 10;
  const stepObject = createSteps(STEP_NUMBER);
  const { finalPoint, initialPoint, directionsArray } = stepObject;
  return (
    <div className="App">
      <Table
        steps={directionsArray}
        final={finalPoint}
        initial={initialPoint}
      />
    </div>
  );
};

export default App;
