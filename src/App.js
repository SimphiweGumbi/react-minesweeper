//importing nessecary doucuments
import React from "react";
import Board from "./components/Board";
import Menu from "./components/Menu";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
//routing and display different components
function App() {
  return (
    <div className="aligned">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="board" element={[<Heading />, <Board />]} />
      </Routes>
    </div>
  );
}
//exporting app
export default App;
