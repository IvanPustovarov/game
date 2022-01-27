import React from "react";
import "./App.css";

import Table from "./components/Table";
import { stepCreator } from "./api.js";

const App = () => {
  const MATRIX = 3;

  const stepObject = stepCreator(10, MATRIX);
  const {finalPoint, initialPoint, directionsArray} = stepObject;
  return (
    <div className="App">
      <Table
        matrix={MATRIX}
        steps={directionsArray}
        final={finalPoint}
        initial={initialPoint}
      />
    </div>
  );
};

export default App;
